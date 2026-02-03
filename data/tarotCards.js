import axios from 'axios';
import tarotDecks from './tarotDecksData';

// Bộ bài mặc định
// Đã bỏ biến currentDeck, luôn lấy từ localStorage khi cần

export function getAvailableDecks() {
  return Object.keys(tarotDecks);
}

export function getDeckName(deckName) {
  return tarotDecks[deckName]?.name || '';
}

// Lấy bộ bài hiện tại từ config.json qua API
export async function getCurrentDeck() {
  let deck = 'classic';
  try {
    const res = await axios.get('/api/config');
    if (res.data && res.data.currentDeck && tarotDecks[res.data.currentDeck]) {
      deck = res.data.currentDeck;
    }
  } catch (e) {
    // fallback classic nếu lỗi
  }
  return tarotDecks[deck]?.cards || [];
}

// Đặt bộ bài hiện tại vào config.json qua API
export async function setCurrentDeck(deckName) {
  if (tarotDecks[deckName]) {
    try {
      await axios.post('/api/config', { currentDeck: deckName });
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
}

export function getDeck(deckName) {
  return tarotDecks[deckName]?.cards || null;
}

// Backward compatibility: export tarotCards as default deck
export const tarotCards = tarotDecks.classic.cards;

