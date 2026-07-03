export type Member = {
  id: string;
  realName: string;
  nickname: string;
  title: string;
  about: string;
  poem: string[];
  quote: string;
  themeColor: string;
  personality: {
    [key: string]: number; // trait: level 0-100
  };
  specialAbility: string;
  achievements: string[];
  joinedDate: string;
  favoriteEmoji: string;
  hiddenFact: string;
};

export const INITIAL_MEMBERS: Member[] = [
  {
    id: "fatheena",
    realName: "Fatheena",
    nickname: "Cupcake / Fatheee!",
    title: "Tribe Mother",
    about: "A warm and inviting soul who always makes sure everyone is taken care of. She wraps the community in a cozy blanket of comfort and love.",
    poem: [
      "A gentle hand, a quiet grace,",
      "She turns the cold into a warm embrace.",
      "The tribe's quiet center, steadfast and true,",
      "Holding the stars, painting the sky anew."
    ],
    quote: "You belong here, always.",
    themeColor: "var(--accent-rose)",
    personality: {
      Empathy: 100,
      Comfort: 95,
      Patience: 90,
      Wisdom: 85
    },
    specialAbility: "Mother's Embrace",
    achievements: ["Heart of the Tribe", "Comfort Person", "Always Replies"],
    joinedDate: "2023-01-15",
    favoriteEmoji: "🌸",
    hiddenFact: "She reads a lot of books — like, so much — and paints."
  },
  {
    id: "ragav",
    realName: "Ragav",
    nickname: "Raguu!",
    title: "Calm Companion",
    about: "The steady anchor in the middle of a storm. When everything is moving too fast, his calm presence reminds you to breathe.",
    poem: [
      "Like the ocean's gentle tide,",
      "He walks calmly by our side.",
      "No tempest too fierce, no wind too strong,",
      "Where the quiet water runs, we belong."
    ],
    quote: "Say, I'll listen no matter what.",
    themeColor: "var(--accent-sky)",
    personality: {
      Calmness: 100,
      Wisdom: 90,
      Patience: 85,
      Listening: 95
    },
    specialAbility: "Calm Presence",
    achievements: ["Community Therapist", "Stayed When Others Left"],
    joinedDate: "2023-02-10",
    favoriteEmoji: "🌊",
    hiddenFact: "He reads poetry at 3 AM."
  },
  {
    id: "rajvi",
    realName: "Rajvi",
    nickname: "Bossy Rajvi",
    title: "Chaos Coordinator",
    about: "She brings the energy, the fun, and the absolute chaos. Without her, the chat would be too quiet and the nights too boring.",
    poem: [
      "A spark in the dark, a wildfire untamed,",
      "She makes sure the quiet is never unnamed.",
      "With laughter and commands, she takes the lead,",
      "A chaotic comfort is exactly what we need."
    ],
    quote: "Do it now or I'm taking away your sleeping privileges.",
    themeColor: "var(--accent-emerald)",
    personality: {
      Chaos: 100,
      Energy: 95,
      Humor: 90,
      Leadership: 85
    },
    specialAbility: "Chaos Engine",
    achievements: ["Chaos Certified", "Certified Yapper", "Meme Dealer"],
    joinedDate: "2023-03-05",
    favoriteEmoji: "🎭",
    hiddenFact: "She's actually incredibly organized in real life."
  },
  {
    id: "ak",
    realName: "AK",
    nickname: "AK47",
    title: "Chaos Engine",
    about: "Unpredictable, loud, and incredibly fun. He turns mundane conversations into absolute riots and leaves smiles everywhere.",
    poem: [
      "Like thunder cracking through a silent night,",
      "He brings the thunder, the spark, the light.",
      "A rapid fire of jokes and cheer,",
      "You always know when he is near."
    ],
    quote: "Why be normal when you can be a legend?",
    themeColor: "var(--accent-orange)",
    personality: {
      Energy: 100,
      Chaos: 95,
      Humor: 95,
      Creativity: 85
    },
    specialAbility: "Healing Smile",
    achievements: ["Meme Dealer", "Chaos Certified"],
    joinedDate: "2023-05-20",
    favoriteEmoji: "⚡",
    hiddenFact: "He actually has a very soft heart."
  },
  {
    id: "deetya",
    realName: "Deetya",
    nickname: "Deethu!",
    title: "Gentle Soul",
    about: "A pure and innocent presence that brings out the best in everyone. She's the friend you want to protect at all costs.",
    poem: [
      "A fragile leaf on a gentle breeze,",
      "She brings the troubled minds to ease.",
      "With words so soft and intentions pure,",
      "Her gentle heart is a lasting cure."
    ],
    quote: "I just want everyone to be happy.",
    themeColor: "var(--accent-emerald)",
    personality: {
      Innocence: 100,
      Empathy: 95,
      Kindness: 95,
      Hope: 90
    },
    specialAbility: "Hope Whisper",
    achievements: ["Comfort Person", "Heart of the Tribe"],
    joinedDate: "2023-06-15",
    favoriteEmoji: "🌿",
    hiddenFact: "She's cute."
  },
  {
    id: "kovendran",
    realName: "Kovendran",
    nickname: "Kovannan",
    title: "Wise Wanderer",
    about: "The one who always drops the most profound thoughts out of nowhere. His perspective always grounds the conversation.",
    poem: [
      "He walks a path of ancient trees,",
      "And whispers wisdom to the breeze.",
      "A wandering soul with roots so deep,",
      "The stories of the tribe, he'll keep."
    ],
    quote: "Every journey begins with a single thought.",
    themeColor: "var(--accent-gold)",
    personality: {
      Wisdom: 100,
      Reflection: 95,
      Curiosity: 90,
      Calmness: 85
    },
    specialAbility: "Story Collector",
    achievements: ["Professional Overthinker", "Stayed When Others Left"],
    joinedDate: "2023-07-01",
    favoriteEmoji: "🌳",
    hiddenFact: "He's the eldest one, I guess."
  },
  {
    id: "rishika",
    realName: "Rishika",
    nickname: "Rishi",
    title: "Dream Weaver",
    about: "Always lost in her imagination, she brings creativity and beautiful ideas to the tribe. She sees the magic in the mundane.",
    poem: [
      "She spins the threads of starry skies,",
      "With galaxies hidden in her eyes.",
      "Where others see a simple stone,",
      "She sees a castle, an ancient throne."
    ],
    quote: "What if we just looked up?",
    themeColor: "var(--accent-lavender)",
    personality: {
      Creativity: 100,
      Imagination: 95,
      Hope: 90,
      Curiosity: 90
    },
    specialAbility: "Dream Weaver",
    achievements: ["Night Owl", "Comfort Person"],
    joinedDate: "2023-08-10",
    favoriteEmoji: "✨",
    hiddenFact: "She paints her dreams when she wakes up."
  },
  {
    id: "thasneem",
    realName: "Thasneem",
    nickname: "Thasniiii!!",
    title: "Sunshine Keeper",
    about: "Literally a ray of sunshine. She can instantly lift the mood of the entire room with just a simple 'hello'.",
    poem: [
      "The morning sun caught in a jar,",
      "She shines the brightest, near or far.",
      "When clouds gather and shadows fall,",
      "Her golden light outshines them all."
    ],
    quote: "Good morning beautiful people!",
    themeColor: "var(--accent-gold)",
    personality: {
      Positivity: 100,
      Energy: 95,
      Empathy: 90,
      Humor: 85
    },
    specialAbility: "Golden Aura",
    achievements: ["Heart of the Tribe", "Always Replies"],
    joinedDate: "2023-09-05",
    favoriteEmoji: "☀️",
    hiddenFact: "The busiest real Mallu OG (more than me)."
  },
  {
    id: "varshitha",
    realName: "Varshitha",
    nickname: "varsh",
    title: "Peaceful Presence",
    about: "A calm person and incredibly good minded. She brings a steady, gentle energy that balances the chaos of the constellation.",
    poem: [
      "With a steady heart and a quiet mind,",
      "She leaves the noise of the world behind.",
      "A gentle light that softly gleams,",
      "Guiding the tribe through all its dreams."
    ],
    quote: "Peace comes from within.",
    themeColor: "var(--accent-emerald)",
    personality: {
      Calmness: 100,
      Kindness: 95,
      Empathy: 90,
      Peace: 95
    },
    specialAbility: "Tranquil Aura",
    achievements: ["Peacemaker", "Good Minded", "Heart of Gold"],
    joinedDate: "2023-11-01",
    favoriteEmoji: "🦋",
    hiddenFact: "She can find the good in absolutely anyone."
  }
];
