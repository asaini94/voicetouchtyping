export interface WordBank {
  id: string;
  label: string;
  description: string;
  words: string[];
}

export const wordBanks: WordBank[] = [
  {
    id: "short-words",
    label: "Short Words",
    description: "3–5 letter common words",
    words: [
      "the", "cat", "dog", "run", "big", "red", "fun", "map", "sun", "cup",
      "fish", "bird", "tree", "book", "hand", "fast", "blue", "cold", "warm", "soft",
      "play", "star", "rain", "door", "bell", "king", "song", "lake", "hill", "milk",
      "jump", "read", "sing", "walk", "talk", "give", "take", "make", "come", "help",
      "wave", "dust", "gold", "wind", "rock", "sand", "moon", "fire", "snow", "time",
      "love", "hope", "calm", "deep", "bold", "fair", "kind", "wild", "tall", "true",
    ],
  },
  {
    id: "medium-words",
    label: "Medium Words",
    description: "6–8 letter intermediate words",
    words: [
      "morning", "blanket", "picture", "garden", "window", "planet", "silver", "cotton",
      "spring", "winter", "summer", "autumn", "candle", "basket", "helmet", "rocket",
      "purple", "orange", "yellow", "forest", "bridge", "castle", "dragon", "flower",
      "gentle", "honest", "kindly", "bright", "clever", "golden", "hidden", "jumble",
      "kitten", "ladder", "marble", "number", "puzzle", "rabbit", "saddle", "turtle",
      "violet", "wiggle", "zephyr", "better", "corner", "dinner", "frozen", "goblin",
      "hammer", "insect", "jungle", "kettle", "lemon", "mirror", "narrow", "oxygen",
    ],
  },
  {
    id: "long-words",
    label: "Long Words",
    description: "9+ letter challenging words",
    words: [
      "beautiful", "development", "education", "environment", "government",
      "conference", "experience", "knowledge", "community", "challenge",
      "opportunity", "adventure", "excellence", "independent", "literature",
      "technology", "university", "resolution", "celebration", "difference",
      "expression", "foundation", "generation", "historical", "impossible",
      "leadership", "management", "navigation", "obsession", "phenomenon",
      "philosophy", "recognition", "satisfaction", "temperature", "understanding",
      "vegetable", "yesterday", "champion", "dangerous", "furniture",
    ],
  },
  {
    id: "phrases",
    label: "Phrases",
    description: "Common short phrases (2–3 words)",
    words: [
      "hello world", "good morning", "thank you", "have fun", "well done",
      "keep going", "stay calm", "be brave", "nice work", "all good",
      "time flies", "so cool", "big dream", "deep breath", "bright idea",
      "fast pace", "fresh air", "hard work", "high five", "long road",
      "next step", "open mind", "quiet place", "real deal", "safe space",
      "slow down", "smart move", "sweet spot", "tough job", "warm smile",
      "wise choice", "young soul", "zen mode", "pure joy", "true love",
      "kind heart", "fair game", "free time", "great job", "happy day",
    ],
  },
  {
    id: "sentences",
    label: "Sentences",
    description: "Full sentences for advanced practice",
    words: [
      "The quick brown fox jumps over the lazy dog.",
      "She sells seashells by the seashore.",
      "How much wood would a woodchuck chuck?",
      "The rain in Spain falls mainly on the plain.",
      "Peter Piper picked a peck of pickled peppers.",
      "A journey of a thousand miles begins with a single step.",
      "To be or not to be that is the question.",
      "All that glitters is not gold.",
      "The early bird catches the worm.",
      "Practice makes perfect.",
      "Knowledge is power.",
      "Time waits for no one.",
      "The best time to plant a tree was twenty years ago.",
      "In the middle of difficulty lies opportunity.",
      "Life is what happens when you are busy making other plans.",
      "The only way to do great work is to love what you do.",
      "Simplicity is the ultimate sophistication.",
      "Try not to become a man of success but a man of value.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "It does not matter how slowly you go as long as you do not stop.",
    ],
  },
];
