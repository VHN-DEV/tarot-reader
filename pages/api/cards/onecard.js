import { getCurrentDeck } from '../../../data/tarotCards';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const deck = getCurrentDeck();
    const randomIndex = Math.floor(Math.random() * deck.length);
    const randomCard = deck[randomIndex];
    res.status(200).json(randomCard);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

