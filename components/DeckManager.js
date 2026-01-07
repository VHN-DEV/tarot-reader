import { useState, useEffect } from 'react';
import { getAvailableDecks, setCurrentDeck, getCurrentDeck, getDeckName, getDeck } from '../data/tarotCards';

export default function DeckManager() {
  const [decks] = useState(getAvailableDecks());
  const [selected, setSelected] = useState(decks[0]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrentDeck() {
      const cards = await getCurrentDeck();
      // Tìm deck hiện tại dựa trên cards trả về
      let currentDeck = decks[0];
      for (const deck of decks) {
        const deckCards = getDeck(deck);
        if (Array.isArray(deckCards) && deckCards.length && cards.length === deckCards.length && cards[0]?.name === deckCards[0]?.name) {
          currentDeck = deck;
          break;
        }
      }
      setSelected(currentDeck);
      setLoading(false);
    }
    fetchCurrentDeck();
    // eslint-disable-next-line
  }, []);

  const handleChange = async (e) => {
    const deck = e.target.value;
    setSelected(deck);
    const ok = await setCurrentDeck(deck);
    if (ok) {
      setMessage('Đã đổi bộ bài mặc định thành công!');
    } else {
      setMessage('Không thể đổi bộ bài.');
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full max-w-lg bg-[#222] rounded-2xl shadow-xl p-8 mt-8 mb-12 border border-[#d4a052]/20">
        <h1 className="text-2xl font-playfair text-[#d4a052] mb-4 text-center">Quản lý bộ bài Tarot</h1>
        <p className="text-white/70 text-center mb-6">Chọn bộ bài mặc định cho trải nghiệm bói bài của bạn. Tính năng này sẽ giúp bạn dễ dàng chuyển đổi giữa các bộ bài khác nhau.</p>
        <div className="flex flex-col gap-3 items-center">
          <label className="text-white/90 font-medium">Chọn bộ bài mặc định:</label>
          <select
            className="p-2 rounded bg-[#181818] text-white border border-[#d4a052]/40 focus:outline-none w-60"
            value={selected}
            onChange={handleChange}
            disabled={loading}
          >
            {decks.map(deck => (
              <option key={deck} value={deck}>{getDeckName(deck)}</option>
            ))}
          </select>
          {message && <div className="text-green-400 text-sm mt-2">{message}</div>}
        </div>
      </div>
    </section>
  );
}
