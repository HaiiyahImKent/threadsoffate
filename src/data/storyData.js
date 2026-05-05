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
        points: 1
      },
      {
        id: "exp_4",
        text: "Fear the vast unknown and decide never to sleep in the ruined church again.",
        isOriginal: false,
        type: "Fear",
        points: 1
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
        points: 1
      },
      {
        id: "ris_5",
        text: "Fall in love with a local artisan and build a crystal empire together.",
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
        points: 1
      },
      {
        id: "cli_3",
        text: "Abandon your Personal Legend to marry Fatima and become an oasis counselor.",
        isOriginal: false,
        type: "Love",
        points: 1
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
        points: 1
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
        points: 1
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
        points: 1
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
        points: 1
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
    title: "The Journey's End",
    description: "Your journey comes to a close. The choices you've made have woven a unique tapestry of fate. It is time to uncover your Personal Legend Summary.",
    choices: [
      {
        id: "den_1",
        text: "Reveal my destiny.",
        isOriginal: true,
        type: "Reveal",
        points: 0
      }
    ]
  }
];

export const getLegendTitle = (divergence, history) => {
  if (divergence === 0) return "The True Alchemist";
  
  const typeCounts = history.reduce((acc, choice) => {
    acc[choice.type] = (acc[choice.type] || 0) + 1;
    return acc;
  }, {});

  let maxType = "";
  let maxCount = 0;
  
  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount && type !== "Destiny" && type !== "Reveal") {
      maxCount = count;
      maxType = type;
    }
  }

  switch(maxType) {
    case "Ambition": return "The Merchant King";
    case "Love": return "The Oasis Heart";
    case "Fear": return "The Cautious Wanderer";
    case "Wisdom": return "The Desert Scholar";
    default: return "The Divergent Traveler";
  }
};

export const getLegendSummary = (divergence, history) => {
  if (divergence === 0) {
    return "You followed the Omens meticulously, never straying from the Soul of the World. Like Santiago, you learned the Language of the World, understood the desert, and turned yourself into the wind. In the end, you realized the treasure was exactly where you started, but it was the journey that gave you the eyes to see it.";
  }

  const typeCounts = history.reduce((acc, choice) => {
    acc[choice.type] = (acc[choice.type] || 0) + 1;
    return acc;
  }, {});

  let maxType = "";
  let maxCount = 0;
  
  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount && type !== "Destiny" && type !== "Reveal") {
      maxCount = count;
      maxType = type;
    }
  }

  switch(maxType) {
    case "Ambition": 
      return "Your thirst for greatness overshadowed the Omens. You amassed wealth, fleets, and power, dominating trade routes across the Mediterranean. While the Pyramids remain a distant dream, you built an empire of your own. Yet, on quiet nights, the desert wind still whispers of a destiny left unfulfilled.";
    case "Love": 
      return "You chose matters of the heart over the pursuit of the unknown. You found comfort in the arms of the one you loved, becoming a respected pillar of your community. Your Personal Legend shifted from finding a buried treasure to nurturing a life built on love. You are happy, though the Omens have long since gone silent.";
    case "Fear": 
      return "The vastness of the world and the danger of the desert paralyzed your journey. You sought safety in the familiar, refusing to take the leaps of faith required by the Soul of the World. You survived, but you lived a life of 'what ifs', never discovering the magic that lay just beyond your comfort zone.";
    case "Wisdom": 
      return "You treated the journey as a puzzle to be solved rather than a path to be walked. You accumulated immense knowledge, studying ancient texts and mastering the strategies of the desert. You became a revered scholar and counselor. You learned everything about the Pyramids, except what it felt like to touch their stones.";
    default: 
      return "Your path was scattered, pulled in different directions by fleeting desires, fears, and moments of bravery. You neither fully committed to the Omens nor completely abandoned them. Your journey was uniquely chaotic, leaving you with a patchwork of wild memories and half-finished dreams.";
  }
};
