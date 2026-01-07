import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST.' });
  const { deck } = req.body;
  if (!deck || deck === 'classic' || deck === 'demo') return res.status(400).json({ error: 'Không thể xóa bộ bài mặc định.' });
  try {
    // Xóa thư mục ảnh
    const deckFolder = deck.toLowerCase().replace(/[^a-z0-9]/g, '');
    const deckImageDir = path.join(process.cwd(), 'public', 'tarotdeck', deckFolder);
    if (fs.existsSync(deckImageDir)) {
      fs.rmSync(deckImageDir, { recursive: true, force: true });
    }
    // Xóa dữ liệu trong tarotDecksData.js
    const decksPath = path.join(process.cwd(), 'data', 'tarotDecksData.js');
    let code = fs.readFileSync(decksPath, 'utf8');
    // Regex xóa object deck khỏi object tarotDecks (xử lý cả trường hợp cuối, giữa, đầu)
    code = code.replace(new RegExp(`([,\n\r\s]*)["']?${deck}["']?\s*:\s*{[^{}]*?(?:{[^{}]*?}[^{}]*?)*?}\s*,?`, 'gs'), '');
    // Dọn dấu phẩy thừa trước hoặc sau }
    code = code.replace(/,\s*}/g, '\n}');
    fs.writeFileSync(decksPath, code, 'utf8');
    res.json({ success: true });
  } catch (error) {
    console.error('Lỗi xóa deck:', error);
    res.status(400).json({ error: 'Lỗi khi xóa bộ bài.' });
  }
}
