export const storyStages = [
  {
    id: 1,
    stage: "Exposition",
    title: "The Shepherd's Dream",
    description: "You awaken in an abandoned church in Andalusia. The ruined roof lets the stars shine through, and a giant sycamore grows where the sacristy once stood. Once again, you have dreamed of a child transporting you to the Egyptian pyramids to find a hidden treasure. The sheep stir around you, unaware of the vast world beyond their pastures. What is your next move?",
    choices: [
      {
        id: "exp_1",
        text: "Seek out the Gypsy woman in Tarifa to interpret the recurring dream.",
        isOriginal: true,
        type: "Destiny",
        points: 0 // Straying from original path adds points to Divergence
      },
      {
        id: "exp_2",
        text: "Ignore the dream and focus on buying more sheep to become a wealthy merchant.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "exp_3",
        text: "Stay with the merchant's daughter you met last year and settle down.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "MerchantDaughter"
      },
      {
        id: "exp_4",
        text: "Fear the vast unknown and decide never to sleep in the ruined church again.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "FearChurch"
      },
      {
        id: "exp_5",
        text: "Study ancient texts to understand the psychological meaning of the dream.",
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
    description: "You have crossed the strait to Africa, only to be robbed of all your savings in Tangier. Stranded in a foreign land with no money and unable to speak the language, you find work with a despondent crystal merchant. Months pass, and your ideas bring prosperity to the shop, but the desert still calls to you.",
    choices: [
      {
        id: "ris_1",
        text: "Leave the shop, join a caravan across the Sahara, and resume your quest for the pyramids.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "ris_2",
        text: "Use your newfound wealth to buy a fleet of ships and dominate Mediterranean trade.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "ris_3",
        text: "Convince the Crystal Merchant to travel to Mecca with you, fulfilling his lifelong dream.",
        isOriginal: false,
        type: "Wisdom",
        points: 1
      },
      {
        id: "ris_4",
        text: "Stay in Tangier forever; it's safe, you are wealthy, and the desert is too dangerous.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "TangierFear"
      },
      {
        id: "ris_5",
        text: "Fall in love with a local artisan and build a crystal empire together.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "TangierLove"
      }
    ]
  },
  {
    id: 3,
    stage: "Climax",
    title: "The Al-Fayoum Oasis",
    description: "The caravan halts at the Al-Fayoum oasis as tribal wars rage in the desert. Here, amidst the palm trees, you meet Fatima, a woman of the desert, and your heart is captivated. Meanwhile, you receive a terrifying vision of an impending attack on the neutral oasis.",
    choices: [
      {
        id: "cli_1",
        text: "Warn the chieftains of the attack, risking your life, but trusting the Omens.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "cli_2",
        text: "Flee the oasis under the cover of darkness to save yourself from the war.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "OasisFlee"
      },
      {
        id: "cli_3",
        text: "Abandon your Personal Legend to marry Fatima and become an oasis counselor.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "OasisFatima"
      },
      {
        id: "cli_4",
        text: "Use the vision to leverage power over the chieftains and become the oasis ruler.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "cli_5",
        text: "Keep the vision secret, observing the battle to study the strategies of desert warfare.",
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
    description: "You have met the Alchemist. Together, you ride into the deep desert towards the pyramids, leaving Fatima behind. Captured by a fierce warring tribe, the Alchemist tells the chief that you are a powerful sorcerer who can transform into the wind. You have three days to prove it, or you will both be executed.",
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
        text: "Beg the Alchemist to use his magic to save you both, admitting you know nothing.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "AlchemistBeg"
      },
      {
        id: "fal_3",
        text: "Offer the tribe's chief all the gold you have and promise to lead his armies to victory.",
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
        text: "Try to logically explain the impossibility of the task to the chief, hoping for reason.",
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
    description: "You finally stand before the majestic Pyramids of Egypt. As you dig in the sand where your tears fell, you are attacked by refugees from the tribal wars. They beat you and steal your gold. As they leave, their leader mocks you, telling you of his own recurring dream about a treasure hidden in a ruined church in Spain under a sycamore tree.",
    choices: [
      {
        id: "res_1",
        text: "Smile at the revelation; the treasure was where you started all along. You must return.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "res_2",
        text: "Give in to despair and die in the shadow of the pyramids, your journey a failure.",
        isOriginal: false,
        type: "Fear",
        points: 1,
        isFatal: "PyramidDeath"
      },
      {
        id: "res_3",
        text: "Vow revenge, planning to hunt down the robbers and reclaim your stolen gold.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "res_4",
        text: "Forget the treasure entirely and walk back to the oasis to find Fatima.",
        isOriginal: false,
        type: "Love",
        points: 1,
        isFatal: "PyramidGiveUp"
      },
      {
        id: "res_5",
        text: "Realize the true treasure was the knowledge and experiences gained along the way.",
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
    description: "You have traveled all the way back to Andalusia, standing once again in the ruined church where your journey began. Underneath the sycamore roots, you dig and find a chest overflowing with old Spanish gold coins and precious stones. Your Personal Legend is physically fulfilled, but the question remains: what will you do with this newfound treasure and knowledge?",
    choices: [
      {
        id: "den_1",
        text: "Keep a small share for travel, and return to the Al-Fayoum oasis to be with Fatima forever.",
        isOriginal: true,
        type: "Destiny",
        points: 0
      },
      {
        id: "den_2",
        text: "Use the gold to buy the surrounding lands and become a powerful lord in Andalusia.",
        isOriginal: false,
        type: "Ambition",
        points: 1
      },
      {
        id: "den_3",
        text: "Take the chest and build a massive estate to shower your loved ones with endless luxury.",
        isOriginal: false,
        type: "Love",
        points: 1
      },
      {
        id: "den_4",
        text: "Bury most of the gold back where you found it, hiding it so no thieves ever target you.",
        isOriginal: false,
        type: "Fear",
        points: 1
      },
      {
        id: "den_5",
        text: "Build a library and sanctuary over the church to teach others the Language of the World.",
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
    description: "Your path is complete. The choices you've made have woven a unique tapestry of fate. It is time to uncover your Personal Legend Summary.",
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
    summary: "You followed the Omens meticulously, never straying from the Soul of the World. Like Santiago, you learned the Language of the World, understood the desert, and turned yourself into the wind. In the end, you realized the treasure was exactly where you started, but it was the journey that gave you the eyes to see it."
  },
  "Ambition_Ambition": {
    title: "The Merchant King",
    summary: "Your thirst for greatness overshadowed the Omens. You amassed wealth, fleets, and power, dominating trade routes across the Mediterranean. While the Pyramids remain a distant dream, you built an empire of your own. Yet, on quiet nights, the desert wind still whispers of a destiny left unfulfilled."
  },
  "Love_Love": {
    title: "The Oasis Heart",
    summary: "You chose matters of the heart over the pursuit of the unknown. You found comfort in the arms of the one you loved, becoming a respected pillar of your community. Your Personal Legend shifted from finding a buried treasure to nurturing a life built on love. You are happy, though the Omens have long since gone silent."
  },
  "Fear_Fear": {
    title: "The Cautious Wanderer",
    summary: "The vastness of the world and the danger of the desert paralyzed your journey. You sought safety in the familiar, refusing to take the leaps of faith required by the Soul of the World. You survived, but you lived a life of 'what ifs', never discovering the magic that lay just beyond your comfort zone."
  },
  "Wisdom_Wisdom": {
    title: "The Desert Scholar",
    summary: "You treated the journey as a puzzle to be solved rather than a path to be walked. You accumulated immense knowledge, studying ancient texts and mastering the strategies of the desert. You became a revered scholar and counselor. You learned everything about the Pyramids, except what it felt like to touch their stones."
  },
  // Ambition primary
  "Ambition_Love": {
    title: "The Wealthy Suitor",
    summary: "Driven by a desire for both power and affection, you built a fortune to secure the love you found along the way. Your wealth protects your heart, but you often wonder if love alone would have been enough without the gold to shield it."
  },
  "Ambition_Wisdom": {
    title: "The Master of Coin",
    summary: "Your sharp intellect served your endless ambition. You studied the markets, the wars, and the people, using every piece of knowledge to expand your influence. You became impossibly rich, trading the mysteries of the universe for the tangible weight of gold."
  },
  "Ambition_Fear": {
    title: "The Hoarder",
    summary: "Your ambition was driven not by a desire to grow, but by a profound terror of losing what you had. You amassed wealth and immediately locked it away, building walls around yourself. You are safe and rich, but entirely trapped in a prison of your own making."
  },
  "Ambition_Destiny": {
    title: "The Powerful Visionary",
    summary: "You heard the call of the Omens, but you bent them to serve your own rise to power. You achieved your Personal Legend, but you did so as a conqueror rather than a humble traveler. The universe yielded to you, recognizing your unrelenting will."
  },
  // Love primary
  "Love_Ambition": {
    title: "The Oasis Sovereign",
    summary: "Love anchored you, but your ambition could not be completely silenced. You stayed for the heart, but quickly rose to lead your new community, turning a simple life into a local dynasty. You found a kingdom in the sand, built entirely around the one you love."
  },
  "Love_Wisdom": {
    title: "The Sage of Hearts",
    summary: "You prioritized connection, but approached it with deep understanding and empathy. You became a legendary counselor, healing the emotional wounds of travelers who crossed the desert. You never reached the Pyramids, but you helped hundreds of others find their way."
  },
  "Love_Fear": {
    title: "The Sheltered Lover",
    summary: "You clung to love tightly, terrified of the dangers that lay beyond the dunes. Your affection became a shield against the frightening unknown. You lived a peaceful, quiet life, though you never let your partner look too long at the horizon."
  },
  "Love_Destiny": {
    title: "The Devoted Pilgrim",
    summary: "You followed the Omens, but your journey was entirely fueled by the connections you made. You recognized that the true Soul of the World is love itself. You reached your destination, not as a solitary seeker, but carrying the hearts of those you met along the way."
  },
  // Wisdom Primary
  "Wisdom_Ambition": {
    title: "The Strategic Architect",
    summary: "You viewed the world as a chessboard. Your deep understanding of ancient texts and human nature allowed you to maneuver yourself into positions of incredible influence. You never found the treasure, but you wrote the maps that future kings would use."
  },
  "Wisdom_Love": {
    title: "The Compassionate Guide",
    summary: "Your pursuit of knowledge was softened by a deep love for humanity. You abandoned the solitary quest for the Pyramids to stay and teach, becoming a beacon of light in the desert. The treasure you found was the legacy of wisdom you left behind."
  },
  "Wisdom_Fear": {
    title: "The Paralyzed Thinker",
    summary: "You learned so much about the world that you became terrified of its complexities. Knowing every possible danger, you calculated that the safest move was not to move at all. You died a genius, but a genius who never truly lived."
  },
  "Wisdom_Destiny": {
    title: "The Enlightened Seeker",
    summary: "You did not just follow the Omens blindly; you studied them, decoding the very Language of the World. Your journey to the Pyramids was slow and deliberate. When you finally arrived, you understood not just where the treasure was, but exactly why the universe put it there."
  },
  // Fear Primary
  "Fear_Ambition": {
    title: "The Paranoid Ruler",
    summary: "Terrified of being a victim, you aggressively seized power to protect yourself. You strike before you can be struck, hoarding influence out of sheer terror. You are the most powerful person in the oasis, and the most miserable."
  },
  "Fear_Love": {
    title: "The Clinging Soul",
    summary: "Fear of the journey drove you into the arms of the first person who offered safety. You mistook sanctuary for love, clinging to them to avoid facing the desert. It is a quiet life, but one shadowed by the constant dread of the unknown."
  },
  "Fear_Wisdom": {
    title: "The Anxious Scholar",
    summary: "You used studying as an excuse to avoid acting. You read every book about the Pyramids, mapping routes and analyzing tribal wars, constantly claiming you needed 'just a bit more preparation'. The years slipped by while you hid behind your scrolls."
  },
  "Fear_Destiny": {
    title: "The Reluctant Hero",
    summary: "You were terrified every single step of the way, constantly doubting the Omens and wanting to turn back. Yet, somehow, the universe dragged you kicking and screaming to your Personal Legend. You found the treasure, trembling as you dug it out of the sand."
  },
  // Destiny Primary
  "Destiny_Ambition": {
    title: "The Driven Chosen",
    summary: "You followed the Omens, but with a fierce, competitive fire. You saw your Personal Legend not just as a spiritual journey, but as a prize to be won. You claimed the treasure of the Pyramids with a conqueror's pride, proving your greatness to the world."
  },
  "Destiny_Love": {
    title: "The Romantic Traveler",
    summary: "You pursued your destiny, but you let love be your compass. Every step toward the Pyramids was guided by the heart. When you finally found the treasure, your first thought was not of the gold, but of returning to the oasis to share it."
  },
  "Destiny_Fear": {
    title: "The Hesitant Prophet",
    summary: "You stayed on the path of your Personal Legend, but you walked it with immense caution. You second-guessed every Omen, tiptoeing through the desert. You achieved your destiny, proving that courage isn't the absence of fear, but walking forward despite it."
  },
  "Destiny_Wisdom": {
    title: "The Wise Wanderer",
    summary: "You walked the path of the Omens with the eyes of a philosopher. You didn't just experience the journey; you sought to understand the mechanics of fate itself. You found the physical treasure, but the spiritual enlightenment you gained was far more valuable."
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
  "TangierFear": {
    title: "The Tower (Stagnation)",
    summary: "Africa broke your spirit. Having gained back your wealth, the fear of the unknown kept you anchored in Tangier. You became a rich crystal merchant, but your heart grew as brittle as the glass you sold, knowing you abandoned your Personal Legend.",
    image: "/tarot/tarot_tower.png"
  },
  "TangierLove": {
    title: "The Lovers (Tangier)",
    summary: "The vibrant streets of Tangier offered you a different kind of treasure: love. You built a crystal empire alongside your partner. You found happiness, but the distant sands of the Sahara still occasionally call to a destiny left unfulfilled.",
    image: "/tarot/tarot_lovers.png"
  },
  "OasisFlee": {
    title: "The Hanged Man (Cowardice)",
    summary: "When the tribal wars threatened the oasis, panic consumed you. Fleeing alone into the deep desert at night, you quickly lost your way. The harsh elements claimed you before morning, your journey ending in fear and isolation.",
    image: "/tarot/tarot_death.png"
  },
  "OasisFatima": {
    title: "The Lovers (Al-Fayoum)",
    summary: "The pull of the heart was stronger than the call of the Pyramids. You abandoned your grand destiny to marry Fatima. It is a beautiful and peaceful life in the oasis, yet the Alchemist's words linger: love should never keep a man from his Personal Legend.",
    image: "/tarot/tarot_lovers.png"
  },
  "AlchemistBeg": {
    title: "The Hanged Man (Doubt)",
    summary: "Faced with the impossible task of turning yourself into the wind, your faith shattered. You begged for your life, proving you had not learned the Language of the World. The tribal chief showed no mercy to a false sorcerer.",
    image: "/tarot/tarot_death.png"
  },
  "AlchemistDeath": {
    title: "The Hanged Man (Surrender)",
    summary: "Instead of communing with the desert, you surrendered to despair. You died with the memory of Fatima's smile, finding peace in defeat, but failing the ultimate test of the Soul of the World.",
    image: "/tarot/tarot_death.png"
  },
  "PyramidDeath": {
    title: "The Hanged Man (Despair)",
    summary: "You made it to the Pyramids, only to be beaten and robbed. In that crucial moment, you gave up. You died in the shadow of your greatest dream, missing the vital revelation that the treasure was back where you started.",
    image: "/tarot/tarot_death.png"
  },
  "PyramidGiveUp": {
    title: "The Lovers (Resignation)",
    summary: "Robbed and broken at the Pyramids, you ignored the leader's dream. You chose to walk away from the treasure entirely, returning to Fatima. You found love, but you will never know the complete triumph of realizing your Personal Legend.",
    image: "/tarot/tarot_lovers.png"
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

  let finalImage = `/tarot/tarot_${primary.toLowerCase()}.png`;
  if (combinationKey === "Destiny_Destiny" && dev.length === 0) {
    finalImage = `/tarot/tarot_alchemist.png`;
  }

  return {
    ...legend,
    summary: `${legend.summary}\n\n${journeyDetails}`,
    image: finalImage
  };
};
