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

  const handleDownloadTemplate = () => {
    const template = {
      name: "Tên bộ bài mới",
      cards: [
        {
          name: "Tên lá bài",
          description: "Mô tả lá bài",
          image: "https://link-anh-vi-du.com/image.jpg"
        }
        // ... thêm các lá bài khác ...
      ]
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tarot-deck-template.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportDeck = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('deck', file);
    setLoading(true);
    setMessage('Đang nhập bộ bài mới...');
    try {
      const res = await fetch('/api/import-deck', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Nhập bộ bài thành công!');
        window.location.reload();
      } else {
        setMessage(data.error || 'Lỗi khi nhập bộ bài.');
      }
    } catch (err) {
      setMessage('Lỗi khi nhập bộ bài.');
    }
    setLoading(false);
  };

  const handleSetDefault = async (deck) => {
    setSelected(deck);
    const ok = await setCurrentDeck(deck);
    if (ok) {
      setMessage('Đã đổi bộ bài mặc định thành công!');
    } else {
      setMessage('Không thể đổi bộ bài.');
    }
  };

  const handleDeleteDeck = async (deck) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bộ bài này?')) return;
    setLoading(true);
    setMessage('Đang xóa bộ bài...');
    try {
      const res = await fetch('/api/delete-deck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deck })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Đã xóa bộ bài thành công!');
        window.location.reload();
      } else {
        setMessage(data.error || 'Lỗi khi xóa bộ bài.');
      }
    } catch (err) {
      setMessage('Lỗi khi xóa bộ bài.');
    }
    setLoading(false);
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full max-w-2xl bg-[#222] rounded-2xl shadow-xl p-8 mt-8 mb-12 border border-[#d4a052]/20">
        <h1 className="text-2xl font-playfair text-[#d4a052] mb-4 text-center">Quản lý bộ bài Tarot</h1>
        <p className="text-white/70 text-center mb-6">Chọn, đặt mặc định hoặc xóa bộ bài Tarot của bạn.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-white border border-[#d4a052]/30 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#181818]">
                <th className="px-4 py-2 text-left">Tên bộ bài</th>
                <th className="px-4 py-2 text-center">Mặc định</th>
                <th className="px-4 py-2 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {decks.map(deck => (
                <tr key={deck} className={selected === deck ? 'bg-[#2a1f17]/40' : ''}>
                  <td className="px-4 py-2 font-semibold">{getDeckName(deck)}</td>
                  <td className="px-4 py-2 text-center">
                    {selected === deck ? (
                      <span className="text-[#d4a052] font-bold">Mặc định</span>
                    ) : (
                      <button
                        className="px-3 py-1 bg-[#d4a052] text-white rounded hover:bg-[#bfa14a] text-sm font-semibold cursor-pointer"
                        onClick={() => handleSetDefault(deck)}
                        disabled={loading}
                      >
                        Đặt mặc định
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {deck === selected || deck === 'classic' ? (
                      <span className="text-gray-400 italic text-sm">Không thể xóa</span>
                    ) : (
                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-semibold cursor-pointer"
                        onClick={() => handleDeleteDeck(deck)}
                        disabled={loading}
                      >
                        Xóa
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {message && <div className="text-green-400 text-sm mt-4 text-center">{message}</div>}
        <div className="flex flex-col gap-3 items-center mt-8">
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-[#d4a052] text-white rounded font-semibold hover:bg-[#bfa14a] cursor-pointer"
              onClick={handleDownloadTemplate}
              disabled={loading}
            >
              Tải template JSON bộ bài
            </button>
            <label className="px-4 py-2 bg-[#222] text-white rounded font-semibold border border-[#d4a052]/40 cursor-pointer hover:bg-[#333]">
              Import bộ bài mới
              <input type="file" accept="application/json" onChange={handleImportDeck} className="hidden" disabled={loading} />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
