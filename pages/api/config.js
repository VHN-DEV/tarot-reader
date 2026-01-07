import fs from 'fs';
import path from 'path';

const configPath = path.join(process.cwd(), 'data', 'config.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(configPath, 'utf8');
      res.status(200).json(JSON.parse(data));
    } catch (err) {
      res.status(500).json({ error: 'Cannot read config file' });
    }
  } else if (req.method === 'POST') {
    const { currentDeck } = req.body;
    if (!currentDeck) {
      res.status(400).json({ error: 'Missing currentDeck' });
      return;
    }
    try {
      fs.writeFileSync(configPath, JSON.stringify({ currentDeck }, null, 2));
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Cannot write config file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
