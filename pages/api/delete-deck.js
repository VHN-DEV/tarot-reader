import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST.' });
  const { deck } = req.body;

  // Đọc config.json để lấy currentDeck
  const configPath = path.join(process.cwd(), 'data', 'config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const currentDeck = config.currentDeck;

  if (!deck || deck === 'classic' || deck === currentDeck) return res.status(400).json({ error: 'Không thể xóa bộ bài mặc định.' });
  try {
    // Xóa thư mục ảnh
    const deckFolder = deck.toLowerCase().replace(/[^a-z0-9]/g, '');
    const deckImageDir = path.join(process.cwd(), 'public', 'tarotdeck', deckFolder);
    if (fs.existsSync(deckImageDir)) {
      fs.rmSync(deckImageDir, { recursive: true, force: true });
    }
    // Xóa dữ liệu trong tarotDecksData.js
    const decksPath = path.join(process.cwd(), 'data', 'tarotDecksData.js');
    let fileContent = fs.readFileSync(decksPath, 'utf8');

    // 1. Tìm phần nội dung bên trong dấu ngoặc nhọn của tarotDecks
    const startMarker = "const tarotDecks = ";
    const endMarker = "};";
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.lastIndexOf(endMarker);

    if (startIndex !== -1 && endIndex !== -1) {
        // Trích xuất chuỗi object (Lưu ý: eval là cách nhanh nhất để biến chuỗi JS object thành object thực tế)
        // Cẩn thận: Chỉ dùng eval nếu bạn tin tưởng nguồn dữ liệu nội bộ này
        const objectString = fileContent.substring(startIndex + startMarker.length, endIndex + 1);
        
        try {
            // Sử dụng Function thay vì eval để an toàn hơn một chút để parse object JS
            let tarotDecks = new Function(`return ${objectString}`)();
            
            // Xóa deck (sử dụng trực tiếp key truyền lên)
            if (tarotDecks[deck]) {
                delete tarotDecks[deck];
            }

            // Tạo lại nội dung file
            const newObjectString = JSON.stringify(tarotDecks, null, 2);
            const newFileContent = `// File này chứa dữ liệu các bộ bài Tarot\n\nconst tarotDecks = ${newObjectString};\n\nexport default tarotDecks;`;
            
            fs.writeFileSync(decksPath, newFileContent, 'utf8');
        } catch (parseError) {
            console.error("Lỗi khi parse cấu trúc object:", parseError);
            return res.status(500).json({ error: 'Cấu trúc file dữ liệu không hợp lệ.' });
        }
    }
    res.json({ success: true });
  } catch (error) {
    console.error('Lỗi xóa deck:', error);
    res.status(400).json({ error: 'Lỗi khi xóa bộ bài.' });
  }
}
