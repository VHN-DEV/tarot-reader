import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const tarotDecksPath = path.join(process.cwd(), 'data', 'tarotCards.js');
const publicDeckPath = path.join(process.cwd(), 'public', 'tarotdeck');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Không thể tải ảnh: ' + url);
  const buffer = await res.buffer();
  await writeFile(dest, buffer);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST.' });

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) throw new Error('Lỗi khi upload file.');
      // Hỗ trợ formidable v2 (object) và v3+ (array)
      let uploadedFile = Array.isArray(files.deck) ? files.deck[0] : files.deck;
      if (!uploadedFile) throw new Error('Không tìm thấy file.');
      let filePath = uploadedFile.filepath || uploadedFile.path;
      if (!filePath) throw new Error('Không xác định được đường dẫn file upload.');
      let deckJson;
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        deckJson = JSON.parse(content);
      } catch (e) {
        throw new Error('File JSON không hợp lệ hoặc bị lỗi encoding.');
      }
      if (!deckJson.name || !Array.isArray(deckJson.cards) || !deckJson.cards.length) {
        throw new Error('Thiếu thông tin bộ bài hoặc danh sách lá bài.');
      }
      // Tạo tên folder deck
      const deckFolder = deckJson.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const deckImageDir = path.join(publicDeckPath, deckFolder);
      // Kiểm tra trùng tên deck
      if (fs.existsSync(deckImageDir)) throw new Error('Bộ bài này đã tồn tại. Vui lòng chọn tên khác.');
      await mkdir(deckImageDir, { recursive: true });
      // Tải ảnh và cập nhật đường dẫn
      for (const card of deckJson.cards) {
        if (card.image && card.image.startsWith('http')) {
          const ext = path.extname(card.image).split('?')[0] || '.jpg';
          const imgName = card.name.toLowerCase().replace(/[^a-z0-9]/g, '') + ext;
          const imgPath = path.join(deckImageDir, imgName);
          try {
            await downloadImage(card.image, imgPath);
            card.image = `/tarotdeck/${deckFolder}/${imgName}`;
          } catch (e) {
            throw new Error(`Không thể tải ảnh cho lá bài: ${card.name}`);
          }
        }
      }
      // Đọc tarotCards.js và thêm deck mới
      let tarotCardsCode = await readFile(tarotDecksPath, 'utf8');
      // Kiểm tra trùng key deck
      if (tarotCardsCode.includes(`${deckFolder}:`)) throw new Error('Bộ bài này đã tồn tại trong hệ thống.');
      // Tìm vị trí tarotDecks = { ...
      const decksInsertIdx = tarotCardsCode.indexOf('const tarotDecks = {');
      if (decksInsertIdx === -1) throw new Error('Không tìm thấy tarotDecks.');
      // Tìm vị trí đóng của object
      const decksEndIdx = tarotCardsCode.indexOf('};', decksInsertIdx);
      if (decksEndIdx === -1) throw new Error('Không tìm thấy kết thúc tarotDecks.');
      // Tạo object JS cho deck mới
      const deckKey = deckFolder;
      const deckObjStr = `\n  ${JSON.stringify(deckKey)}: ${JSON.stringify({ name: deckJson.name, cards: deckJson.cards }, null, 2)},`;
      // Thêm vào trước dấu đóng object
      tarotCardsCode = tarotCardsCode.slice(0, decksEndIdx) + deckObjStr + tarotCardsCode.slice(decksEndIdx);
      await writeFile(tarotDecksPath, tarotCardsCode, 'utf8');
      res.json({ success: true });
    } catch (error) {
      console.error('Lỗi import deck:', error);
      res.status(400).json({ error: error.message || 'Lỗi không xác định.' });
    }
  });
}
