# Threads Of Fate - Story And Tarot Documentation

## Overview
Threads Of Fate is a choice-driven narrative inspired by The Alchemist. The story is built from seven stages, each offering five choices tied to one of five traits: Destiny, Ambition, Love, Fear, and Wisdom. The final legend is computed from the dominant trait pair, with special handling for fatal choices that end the story early.

Primary data source: src/data/storyData.js

## Story Stages
1. The Shepherd's Dream (Exposition)
   - Sets the dream and the call to adventure in Andalusia.
   - Choice types: Destiny, Ambition, Love, Fear, Wisdom

2. The Crystal Merchant (Rising Action)
   - Tangier hardships and the crystal shop revival.
   - Choice types: Destiny, Ambition, Wisdom, Fear, Love

3. The Al-Fayoum Oasis (Climax)
   - Fatima, the war, and a vision of an attack.
   - Choice types: Destiny, Fear, Love, Ambition, Wisdom

4. The Alchemist & The Desert (Falling Action)
   - The test of turning into the wind.
   - Choice types: Destiny, Fear, Ambition, Love, Wisdom

5. The Pyramids (Resolution)
   - The revelation and the return to the origin.
   - Choice types: Destiny, Fear, Ambition, Love, Wisdom

6. The Return to the Sycamore (Denouement)
   - Treasure unearthed and the final life choice.
   - Choice types: Destiny, Ambition, Love, Fear, Wisdom

7. The Journey's End (Epilogue)
   - The legend is revealed.
   - Choice type: Reveal

## Outcomes
- Total non-fatal outcomes: 25 (all pairings of the 5 traits)
- Total fatal outcomes: 4 (triggered by specific choices)

### Legend Selection Logic
- The dominant trait becomes the primary.
- The runner-up becomes the secondary.
- If one trait dominates or only one trait appears, the secondary is set to the primary.
- The legend key is Primary_Secondary, mapped in endingsMap.
- If a fatal choice is taken, a fatal ending is returned immediately.

## Tarot Cards
Tarot art is stored in public/tarot. The default image for a legend is based on the primary trait:
- Destiny -> tarot_destiny.png
- Ambition -> tarot_ambition.png
- Love -> tarot_love.png
- Fear -> tarot_fear.png
- Wisdom -> tarot_wisdom.png

### Special Tarot Assignments
Some endings use custom tarot artwork to deepen the narrative association.

New unique tarot cards added:
- tarot_hanged.png
- tarot_star.png
- tarot_moon.png
- tarot_sun.png
- tarot_hermit.png

Outcomes using new tarot art:
- Love_Love -> tarot_sun.png
- Fear_Fear -> tarot_moon.png
- Wisdom_Wisdom -> tarot_hermit.png
- Wisdom_Destiny -> tarot_star.png
- Fatal ending: AlchemistBeg -> tarot_hanged.png
- Fatal ending: AlchemistDeath -> tarot_death.png

### Special Case: The True Alchemist
If the player mirrors the original path (pure Destiny with no deviations), the image is overridden with:
- tarot_alchemist.png

## Fatal Endings
Fatal endings are tied to specific choices. Each fatal outcome carries its own title, summary, and tarot image.

Fatal IDs:
- MerchantDaughter
- FearChurch
- AlchemistBeg
- AlchemistDeath

## Editing Notes
- Story text and choices are defined in storyStages.
- Outcome summaries are in endingsMap and fatalEndingsMap.
- getLegendData assembles the final legend summary and image.
