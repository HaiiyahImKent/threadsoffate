export const storyStages = [
  {
    id: 1,
    stage: "Exposition",
    title: "The Shepherd's Dream",
    image: "/stages/stage_1.png",
    description: "You wake in a ruined church in Andalusia. Starlight spills through the broken roof, and a sycamore grows where the sacristy once stood. Again, you dream of a child leading you to the Egyptian pyramids and a hidden treasure. The sheep breathe softly around you. Do you follow the dream or choose the comfort of the known?",
    choices: [
      {
        id: "exp_1",
        text: "Seek the gypsy woman in Tarifa and ask her to read the dream.",
        isOriginal: true,
        type: "Destiny",
        points: 0 // Straying from original path adds points to Divergence
      },
      {
        id: "exp_2",
        text: "Ignore the dream and invest in more sheep to build a merchant's life.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "exp_3",
        text: "Stay with the merchant's daughter and settle into a quiet future.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "MerchantDaughter"
      },
      {
        id: "exp_4",
        text: "Avoid the church and the dream altogether, choosing safety over omens.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "FearChurch"
      },
      {
        id: "exp_5",
        text: "Study old texts to interpret the dream as symbol rather than calling.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      }
    ]
  },
  {
    id: 2,
    stage: "Rising Action",
    title: "The Crystal Merchant",
    image: "/stages/stage_2.png",
    description: "You cross into Africa and lose everything in Tangier. With no money and no language, you work for a crystal merchant whose shop is fading. Your ideas revive the business, but the desert still calls to you.",
    choices: [
      {
        id: "ris_1",
        text: "Leave the shop and join a caravan across the Sahara toward the pyramids.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "ris_2",
        text: "Use the profits to buy ships and expand into Mediterranean trade.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "ris_3",
        text: "Persuade the crystal merchant to travel to Mecca and fulfill his vow.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      },
      {
        id: "ris_4",
        text: "Stay in Tangier a while longer to rebuild your confidence before crossing the desert.",
        isOriginal: false,
        type: "Fear",
        points: 1
      },
      {
        id: "ris_5",
        text: "Partner with a local artisan to build a crystal empire, but keep the desert in your sights.",
        isOriginal: false,
        type: "Love",
        points: 1
      }
    ]
  },
  {
    id: 3,
    stage: "Climax",
    title: "The Al-Fayoum Oasis",
    image: "/stages/stage_3.png",
    description: "The caravan halts at Al-Fayoum as tribal war spreads across the desert. You meet Fatima among the palms and feel your heart lock in place. A vision follows: an attack is coming to the neutral oasis.",
    choices: [
      {
        id: "cli_1",
        text: "Warn the chieftains of the attack, risking your life by trusting the omens.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "cli_2",
        text: "Leave the oasis with a smaller caravan, choosing caution while still moving forward.",
        isOriginal: false,
        type: "Fear",
        points: 1
      },
      {
        id: "cli_3",
        text: "Pledge yourself to Fatima, then continue the journey with her blessing.",
        isOriginal: false,
        type: "Love",
        points: 1
      },
      {
        id: "cli_4",
        text: "Use the vision to leverage power and become the oasis ruler.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "cli_5",
        text: "Keep the vision secret and observe the war to study its strategies.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      }
    ]
  },
  {
    id: 4,
    stage: "Falling Action",
    title: "The Alchemist & The Desert",
    image: "/stages/stage_4.png",
    description: "You ride with the Alchemist into the deep desert toward the pyramids. Captured by a warring tribe, he claims you can transform into the wind. You have three days to prove it or you will both die.",
    choices: [
      {
        id: "fal_1",
        text: "Commune with the Desert, the Wind, the Sun, and the Soul of the World to become the wind.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "fal_2",
        text: "Beg the Alchemist to use his power, admitting you know nothing.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "AlchemistBeg"
      },
      {
        id: "fal_3",
        text: "Offer the chief all your gold and promise to lead his armies to victory.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "fal_4",
        text: "Surrender to death, finding peace in the memory of Fatima's smile.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "AlchemistDeath"
      },
      {
        id: "fal_5",
        text: "Explain the impossibility of the task and appeal to the chief's reason.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      }
    ]
  },
  {
    id: 5,
    stage: "Resolution",
    title: "The Pyramids",
    image: "/stages/stage_5.png",
    description: "You stand before the Pyramids. As you dig where your tears fell, refugees attack and steal your gold. Their leader laughs and tells you of his dream about a treasure buried under a sycamore in a ruined church in Spain.",
    choices: [
      {
        id: "res_1",
        text: "Smile at the revelation; the treasure was where you began. You must return.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "res_2",
        text: "Give in to despair and abandon the excavation, leaving the Pyramids behind.",
        isOriginal: false,
        type: "Fear",
        points: 1
      },
      {
        id: "res_3",
        text: "Vow revenge and hunt down the robbers for your stolen gold.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "res_4",
        text: "Let love guide you; vow to return to Fatima after you secure the treasure.",
        isOriginal: false,
        type: "Love",
        points: 1
      },
      {
        id: "res_5",
        text: "Realize the true treasure is the knowledge gained along the way.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      }
    ]
  },
  {
    id: 6,
    stage: "Denouement",
    title: "The Return to the Sycamore",
    image: "/stages/stage_6.png",
    description: "You return to Andalusia and stand again in the ruined church. Beneath the sycamore, you uncover a chest of Spanish gold and stones. Your Personal Legend is fulfilled, but what will you do with the treasure and the wisdom?",
    choices: [
      {
        id: "den_1",
        text: "Keep a small share for travel and return to Al-Fayoum to be with Fatima.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "den_2",
        text: "Use the gold to buy the surrounding lands and become a lord in Andalusia.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "den_3",
        text: "Build a grand estate and shower your loved ones with luxury.",
        isOriginal: false,
        type: "Love",
        points: 1
      },
      {
        id: "den_4",
        text: "Bury most of the gold again so no thieves ever target you.",
        isOriginal: false,
        type: "Fear",
        points: 1
      },
      {
        id: "den_5",
        text: "Build a library and sanctuary to teach the Language of the World.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      }
    ]
  },
  {
    id: 7,
    stage: "Epilogue",
    title: "The Journey's End",
    description: "Your path is complete. The choices you made have woven a unique tapestry of fate. It is time to reveal your Personal Legend.",
    choices: [
      {
        id: "epi_1",
        text: "Reveal my destiny.",
        isOriginal: true,
        type: "Reveal",
        points: 0
      }
    ]
  }
];

const endingsMap = {
  // Pure paths
  "Destiny_Destiny": {
    title: "The True Alchemist",
    summary: "You followed the Omens without hesitation. Like Santiago, you learned the Language of the World, understood the desert, and turned yourself into the wind. In the end, you found the treasure where you began, and the journey gave you the eyes to see it."
  },
  "Ambition_Ambition": {
    title: "The Merchant King",
    summary: "Your thirst for greatness eclipsed the Omens. You built fleets, wealth, and influence across the Mediterranean. The Pyramids remain a distant dream, but you forged an empire of your own. On quiet nights, the desert still whispers of the path you left behind."
  },
  "Love_Love": {
    title: "The Oasis Heart",
    summary: "You chose the heart over the unknown. You built a life of devotion and became a pillar of your community. Your Personal Legend transformed into a life built on love. You are happy, though the Omens have grown quiet.",
    image: "/tarot/tarot_sun.png"
  },
  "Fear_Fear": {
    title: "The Cautious Wanderer",
    summary: "The vastness of the world froze your steps. You chose the familiar and avoided the leap of faith the Soul of the World required. You survived, but you lived a life of 'what ifs', never touching the magic beyond your comfort zone.",
    image: "/tarot/tarot_moon.png"
  },
  "Wisdom_Wisdom": {
    title: "The Desert Scholar",
    summary: "You treated the journey as a puzzle to solve rather than a path to walk. You accumulated knowledge, mastered the desert's strategies, and became a revered scholar. You learned everything about the Pyramids, except what it felt like to touch their stones.",
    image: "/tarot/tarot_hermit.png"
  },
  // Ambition primary
  "Ambition_Love": {
    title: "The Wealthy Suitor",
    summary: "You sought both power and affection, building a fortune to secure the love you found. Your wealth protects your heart, but you wonder whether love alone would have been enough."
  },
  "Ambition_Wisdom": {
    title: "The Master of Coin",
    summary: "Your intellect sharpened your ambition. You studied markets, wars, and people, using every lesson to expand your influence. You became impossibly rich, trading mystery for the weight of gold."
  },
  "Ambition_Fear": {
    title: "The Hoarder",
    summary: "Your ambition grew from fear, not from growth. You amassed wealth and locked it away, building walls around yourself. You are safe and rich, but trapped in a prison of your own making."
  },
  "Ambition_Destiny": {
    title: "The Powerful Visionary",
    summary: "You heard the Omens, but bent them toward your rise to power. You achieved your Personal Legend as a conqueror, not a humble traveler. The universe yielded to your unrelenting will."
  },
  // Love primary
  "Love_Ambition": {
    title: "The Oasis Sovereign",
    summary: "Love anchored you, but ambition still burned. You stayed for the heart and rose to lead your community, turning a simple life into a local dynasty. You found a kingdom in the sand, built around the one you love."
  },
  "Love_Wisdom": {
    title: "The Sage of Hearts",
    summary: "You prioritized connection with empathy and clarity. You became a legendary counselor, healing travelers who crossed the desert. You never reached the Pyramids, but you helped hundreds find their way."
  },
  "Love_Fear": {
    title: "The Sheltered Lover",
    summary: "You clung to love, terrified of the dangers beyond the dunes. Your affection became a shield against the unknown. You lived a peaceful life, though the horizon always felt forbidden."
  },
  "Love_Destiny": {
    title: "The Devoted Pilgrim",
    summary: "You followed the Omens, fueled by the connections you made. You recognized that the Soul of the World is love itself. You reached your destination carrying the hearts of those you met."
  },
  // Wisdom Primary
  "Wisdom_Ambition": {
    title: "The Strategic Architect",
    summary: "You viewed the world as a chessboard. Your grasp of texts and human nature placed you in positions of influence. You never found the treasure, but you wrote the maps future kings would use."
  },
  "Wisdom_Love": {
    title: "The Compassionate Guide",
    summary: "Your pursuit of knowledge was softened by love for humanity. You abandoned the solitary quest to teach, becoming a beacon in the desert. The treasure you found was the legacy you left behind."
  },
  "Wisdom_Fear": {
    title: "The Paralyzed Thinker",
    summary: "You learned so much that you feared the world's complexities. Knowing every danger, you chose not to move at all. You died a genius, but a genius who never truly lived."
  },
  "Wisdom_Destiny": {
    title: "The Enlightened Seeker",
    summary: "You did not follow the Omens blindly; you studied them, decoding the Language of the World. Your journey was slow and deliberate. When you arrived, you understood not just where the treasure was, but why the universe put it there.",
    image: "/tarot/tarot_star.png"
  },
  // Fear Primary
  "Fear_Ambition": {
    title: "The Paranoid Ruler",
    summary: "Terrified of being a victim, you seized power to protect yourself. You struck first, hoarding influence out of fear. You became the most powerful person in the oasis and the most miserable."
  },
  "Fear_Love": {
    title: "The Clinging Soul",
    summary: "Fear drove you into the arms of the first person who offered safety. You mistook sanctuary for love, clinging to it to avoid the desert. It is a quiet life, shadowed by dread."
  },
  "Fear_Wisdom": {
    title: "The Anxious Scholar",
    summary: "You used studying as an excuse to avoid action. You read every book, mapped every route, and delayed with 'just a bit more preparation'. The years slipped by behind your scrolls."
  },
  "Fear_Destiny": {
    title: "The Reluctant Hero",
    summary: "You were terrified at every step, doubting the Omens and wanting to turn back. Yet the universe dragged you toward your Personal Legend. You found the treasure with trembling hands."
  },
  // Destiny Primary
  "Destiny_Ambition": {
    title: "The Driven Chosen",
    summary: "You followed the Omens with fierce competitive fire. Your Personal Legend felt like a prize to be won. You claimed the treasure with a conqueror's pride, proving your greatness to the world."
  },
  "Destiny_Love": {
    title: "The Romantic Traveler",
    summary: "You pursued your destiny with love as your compass. Every step toward the Pyramids was guided by the heart. When you found the treasure, your first thought was to return and share it."
  },
  "Destiny_Fear": {
    title: "The Hesitant Prophet",
    summary: "You stayed on the path but walked it with immense caution, second-guessing every Omen. You achieved your destiny, proving courage is moving forward despite fear."
  },
  "Destiny_Wisdom": {
    title: "The Wise Wanderer",
    summary: "You walked the path of the Omens with a philosopher's eye. You sought the mechanics of fate itself. You found the physical treasure, but the spiritual insight was far more valuable."
  }
};

export const fatalEndingsMap = {
  "MerchantDaughter": {
    title: "The Lovers (Andalusia)",
    summary: "You abandoned the dream of the Pyramids before the journey even began. Settling down with the merchant's daughter, you live a simple, predictable life as a shepherd. It is comfortable, but every time you look at the stars, a pang of regret whispers of the treasure you never sought.",
    image: "/tarot/tarot_lovers.png"
  },
  "FearChurch": {
    title: "The Tower (Ignorance)",
    summary: "Terrified by the vastness of your dream, you fled from the Omens. You refused to sleep in the ruined church again, severing your connection to the Soul of the World. You lived a safe life, forever blind to the magic that surrounds you.",
    image: "/tarot/tarot_tower.png"
  },
  "AlchemistBeg": {
    title: "The Hanged Man (Doubt)",
    summary: "Faced with the impossible task of turning yourself into the wind, your faith shattered. You begged for your life, proving you had not learned the Language of the World. The tribal chief showed no mercy to a false sorcerer.",
    image: "/tarot/tarot_hanged.png"
  },
  "AlchemistDeath": {
    title: "Death (Surrender)",
    summary: "Instead of communing with the desert, you surrendered to despair. You chose the stillness of death, ending the quest before the Soul of the World could answer you.",
    image: "/tarot/tarot_death.png"
  }
};

export const getLegendData = (divergence, history) => {
  if (history.length > 0) {
    const lastChoice = history[history.length - 1];
    if (lastChoice.isFatal) {
      return fatalEndingsMap[lastChoice.isFatal];
    }
  }

  const counts = { Destiny: 0, Ambition: 0, Love: 0, Fear: 0, Wisdom: 0 };
  
  history.forEach(choice => {
    if (counts[choice.type] !== undefined) {
      counts[choice.type]++;
    }
  });

  const sortedTraits = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  
  let primary = sortedTraits[0][0];
  let secondary = sortedTraits[1][0];
  
  if (sortedTraits[0][1] >= 4 || sortedTraits[1][1] === 0) {
    secondary = primary;
  }

  const combinationKey = `${primary}_${secondary}`;
  const legend = endingsMap[combinationKey] || endingsMap["Destiny_Destiny"];
  
  // Dynamic Timeline Generation
  let journeyDetails = "";
  const dev = history.filter(c => !c.isOriginal && c.type !== "Reveal");
  
  if (dev.length === 0) {
    journeyDetails = "Your footsteps perfectly mirrored the legendary journey of Santiago. You walked the pure path of the Omens without a single hesitation or doubt.";
  } else if (dev.length === 1) {
    const devIdx = history.findIndex(c => !c.isOriginal && c.type !== "Reveal");
    const stageName = storyStages[devIdx]?.title || "your journey";
    journeyDetails = `You stayed true to the Omens for almost the entire path, except during the chapter of '${stageName}', where the allure of ${dev[0].type} momentarily pulled you away. That single pivot uniquely shaped your final treasure.`;
  } else {
    const firstDevIdx = history.findIndex(c => !c.isOriginal && c.type !== "Reveal");
    const lastDevIdx = history.findLastIndex(c => !c.isOriginal && c.type !== "Reveal");
    
    const firstStage = storyStages[firstDevIdx]?.title || "the beginning";
    const lastStage = storyStages[lastDevIdx]?.title || "the end";
    
    if (firstDevIdx === lastDevIdx) {
       journeyDetails = `You wrestled with the Omens throughout your journey. Your defining divergence occurred during '${firstStage}' driven by ${history[firstDevIdx].type}, setting off a chain reaction that made your Personal Legend entirely your own.`;
    } else {
       journeyDetails = `Your path was a beautiful contradiction. You first drifted from the Omens during '${firstStage}' due to ${history[firstDevIdx].type}, and your final notable deviation occurred at '${lastStage}'. You didn't just walk the path; you actively wrestled with your destiny.`;
    }
  }

  let finalImage = legend.image || `/tarot/tarot_${primary.toLowerCase()}.png`;
  if (combinationKey === "Destiny_Destiny" && dev.length === 0) {
    finalImage = "/tarot/tarot_alchemist.png";
  }

  return {
    ...legend,
    summary: `${legend.summary}\n\n${journeyDetails}`,
    image: finalImage
  };
};
