import tarotDecks from './tarotDecksData';

const DECK_STORAGE_KEY = 'tarot_current_deck';

function getStoredDeckName() {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(DECK_STORAGE_KEY);
    if (stored && tarotDecks[stored]) return stored;
  } catch (e) {
    // Ignore storage errors (private mode, blocked storage, etc.)
  }
  return null;
}

export function getAvailableDecks() {
  return Object.keys(tarotDecks);
}

export function getDeckName(deckName) {
  return tarotDecks[deckName]?.name || '';
}

export function getCurrentDeck() {
  const stored = getStoredDeckName();
  const deck = stored || 'classic';
  return tarotDecks[deck]?.cards || [];
}

export async function setCurrentDeck(deckName) {
  if (!tarotDecks[deckName]) return false;
  if (typeof window === 'undefined') return false;
  try {
    window.localStorage.setItem(DECK_STORAGE_KEY, deckName);
    return true;
  } catch (e) {
    return false;
  }
}

export function getDeck(deckName) {
  return tarotDecks[deckName]?.cards || null;
}

// Backward compatibility: export tarotCards as default deck
export const tarotCards = tarotDecks.classic.cards;
