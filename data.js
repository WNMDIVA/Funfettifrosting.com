// =========================================================
// CHARACTER DATA — single source of truth
//
// Loaded by index.html (for the card grid) and by every
// character page (for the full sheet). Add a character here
// and it appears on the grid automatically; you only need to
// create a matching <id>.html shell to give it a page.
//
// Anything marked REPLACE is a placeholder waiting for text.
// =========================================================

window.CHARACTERS = [
  {
    id: "janus",
    cssClass: "Janus",
    name: "Janus Picca",
    frontTag: "THE MAGICIAN",
    frontTitle: "JANUS PICA",
    frontText: "His parents didn't call him Heinous Janus for no reason! Janus is one rambunctiously playful man, prone to playing silly pranks and sneaking around. But don't be fooled, he isn't simple-minded. In fact, he's rather intelligent behind his lively facade. He knows how to use his charisma, and isn't shy about it. He always wants to know… everything. And his eyepatch? What could he be hiding? He really is a mystery of a man. A shame he turned out so callous.",
    backTag: "THE MAGICIAN REVERSED",
    backTitle: "THE BLEEDING BROKER",
    backText: ["This little trickster went AWOL after Valoria, never to be seen again. You won't find him if you search, unless you get yourself in hot water with some no-good folks who want you gone. Or you know something you really, really, really shouldn't. Congratulations! You've scored yourself an exclusive visit with your old friend! Too bad it'll be your last."],
    frontImage: "images/Janus-front.png",
    backImage: "images/Janus-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as him",

      young: {
        sideLabel: "Younger",
        voice: "audio/janus-voice.mp3",
        stats: [
          { label: "Age", value: "21" },
          { label: "Height", value: "6'4 | 193 cm" },
          { label: "Species", value: "?" },
          { label: "Pronouns", value: "He/Him | They/Them" },
          { label: "Role", value: "Hawthorne Student" },
          { label: "Arcana", value: "The Magician" }
        ],
        bio: [
          "REPLACE — biography paragraph one. Where he came from, who raised him, what he wanted.",
          "REPLACE — biography paragraph two. The turn: what cracked, and when."
        ],
        traits: ["Playful", "Perceptive", "Powerful"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/janus-older-voice.mp3",
        stats: [
          { label: "Age", value: "27" },
          { label: "Height", value: "6'4 | 193 cm" },
          { label: "Species", value: "???" },
          { label: "Pronouns", value: "He/Him | They/Them" },
          { label: "Role", value: "Mercenary Information Broker" },
          { label: "Arcana", value: "The Magician Reversed" }
        ],
        bio: [
          "REPLACE — what he became, and what it cost."
        ],
        traits: ["Pernicious", "Prickly", "Puzzling"],
        quotes: [
          "REPLACE with their first line.",
          "REPLACE with their second line.",
          "REPLACE with their third line."
        ]
      }
    }
  },

  {
    id: "hezekial",
    cssClass: "Hezekial",
    name: "Hezekial Adams",
    frontTag: "THE HIEROPHANT",
    frontTitle: "HEZEKIAL ADAMS",
    frontText: "Self-imposed structure and tireless amounts of studying defined the Adams family's sole heir. He despised laziness and detested obstreperous people, focused solely on achieving his unattainable standard of perfection. With his brilliant mind made for engineering and tinkering, he might've succeeded the best of the best. Still, despite his seemingly prejudiced exterior, he wouldn't hesitate to help anyone in their time of need—it's a shame that sympathy didn't last.",
    backTag: "THE HIEROPHANT REVERSED",
    backTitle: "THE PROPHETIC JUDGE",
    backText: ["The Prophetic Judge is the sole evangelist of the people's dogma. His every word is taken as truth, his adjudications blindly passed without a second inspection. His reputation proceeds him in every way. One tip of his scale of \"justice\" and he controls wealth and poverty, the innocent and guilty, life or death. The once promising engineer turned into a revered holy idol...no one could've guessed it. Not even him."],
    frontImage: "images/Hezekial-front.png",
    backImage: "images/Hezekial-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as him",

      young: {
        sideLabel: "Younger",
        voice: "audio/hezekial-voice.mp3",
        stats: [
          { label: "Age", value: "20" },
          { label: "Height", value: "6'6 | 198 cm" },
          { label: "Species", value: "Human" },
          { label: "Pronouns", value: "He/Him" },
          { label: "Role", value: "Ironspire Captain" },
          { label: "Arcana", value: "The Hierophant" }
        ],
        bio: [
          "REPLACE — biography paragraph one. The Adams household, the standard he was held to.",
          "REPLACE — biography paragraph two. The turn: where the sympathy went."
        ],
        traits: ["Dilligent", "Dutiful", "Decent"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/hezekial-older-voice.mp3",
        stats: [
          { label: "Age", value: "26" },
          { label: "Height", value: "6'8 | 207 cm" },
          { label: "Species", value: "Human" },
          { label: "Pronouns", value: "He/Him" },
          { label: "Role", value: "Holy Judge" },
          { label: "Arcana", value: "The Hierophant Reversed" }
        ],
        bio: [
          "In the grand hall of adjudication, silence is not merely a courtesy—it is a law enforced by the sheer presence of the Prophetic Judge. Towering over the dais, draped in immaculate white and gold vestments, Hezekial commands the reverent adoration of the masses. Every word he speaks is embraced as absolute dogma, passed into decree without a murmur of dissent. To the public, he is an untouchable paragon who balances the weight of lives with divine wisdom, so gentle and composed that none could ever conceive of malice beneath his serene visage.",

          "Yet, this immaculate façade conceals a mind obsessed with total, rigid subjugation. In Hezekial’s eyes, the world is not a sacred garden to be nurtured, but an unruly mechanism in desperate need of a master craftsman. He harbors a deep-seated revulsion toward the crude, loud, and aggressive-viewing the chaotic clamor of the lower classes as a foul stain upon the order of civilization. Believing that true elegance and stability lie solely in the hands of the nobility. With his reputation exponentially blooming, he shields patrician interests while systematically disenfranchising those he finds repulsive.",

          "To maintain this pristine illusion, Hezekial bends the machinery of justice without a trace of remorse. Those who dare disturb the quiet—be they impassioned reformers, loud dissenters, or rowdy commoners, find themselves swiftly snuffed out under the guise of \"divine retribution.\" Evidence is quietly rearranged, verdicts are bought with subtle smiles, and the scales are tipped with meticulous precision. Hezekial does not merely enforce the law; he rewrites it in secret, ruthlessly sanitizing society until the world operates precisely as he wills: obedient, refined, and above all, dead silent"
        ],
        traits: ["Defective", "Deceitful", "Detached"],
        quotes: [
          "Mortals speak of 'truth' as if it were an unyielding law, yet the reality is far more pliable. The verity of truth is simple: humanity will always strain their ears for the echoes of what they desire, and ignore the unflattering wails of the real world. I do not deceive the flock; I simply provide the sanctuary they truly need. After all, heaven whispers to me precisely what they wish to hear.",
          "I traded my drafting table for an altar years ago, yet my hands have never quite forgotten the craft... They (nobility) would laugh if they knew their judge spends his private evenings carving wind-up dancers and puzzle boxes out of scrap wood and clockwork. But seeing my little ones marvel at something crafted purely from patience and precision... it reminds me of my own childhood-- the passion for a project i had long buried under ecclesiastical paperwork. The only thing you can ever prove real is...the things you create with your own hands.",
          "Softly now, little sparrows. The world outside may be loud, but here, we keep the peace. Come—let me give you a blessing before you run along.."
        ]
      }
    }
  },

  {
    id: "juliet",
    cssClass: "Juliet",
    name: "Juliet Dreymos",
    frontTag: "THE EMPRESS",
    frontTitle: "JULIET DREYMOS",
    frontText: "This doe halfling is as sweet as a dried jujube! Standing at only 135 cm tall at her full height, she's as intimidating as a fluffy lapdog. A childhood being a frequent victim of teasing has made Juliet a bit skittish and timid, so she is quick to get dependant on those she lets into her tender heart. A daddy's girl through and through, she relishes in the privileges of Lord Dreymos's coddling. Destined to power through favouritism, it's safe to assume she'd make a kind marchioness. It's a shame her vulnerability consumed her.",
    backTag: "THE EMPRESS REVERSED",
    backTitle: "EKLEKTOS PRINKIPESSA",
    backText: ["As her Greek title suggests, she really is the chosen princess! Well, marchioness-- but with the way the people adore her? She might as well be queen. She exudes an aura of confidence and sureness in her choices, but one small criticism will quietly land you right at the chopping block, alongside the rest of your family. All hail her ladyship!"],
    frontImage: "images/Juliet-front.png",
    backImage: "images/Juliet-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as her",

      young: {
        sideLabel: "Younger",
        voice: "audio/juliet-voice.mp3",
        stats: [
          { label: "Age", value: "18" },
          { label: "Height", value: "4'5 135 cm" },
          { label: "Species", value: "Halfling" },
          { label: "Pronouns", value: "She/Her" },
          { label: "Role", value: "Aurelion Student" },
          { label: "Arcana", value: "The Empress" }
        ],
        bio: [
          "REPLACE — biography paragraph one. The Dreymos estate, the coddling, the teasing.",
          "REPLACE — biography paragraph two. The turn: what the vulnerability opened the door to."
        ],
        traits: ["Shy", "Shaky", "Sensitive"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/juliet-older-voice.mp3",
        stats: [
          { label: "Age", value: "24" },
          { label: "Height", value: "4'5 | 135 cm" },
          { label: "Species", value: "Halfling" },
          { label: "Pronouns", value: "She/Her" },
          { label: "Role", value: "Marchioness Dreymos" },
          { label: "Arcana", value: "The Empress Reversed" }
        ],
        bio: [
          "REPLACE — what she became, and what it cost."
        ],
        traits: ["Scornful", "Sanctimonious", "Self-conscious"],
        quotes: [
          "REPLACE with their first line.",
          "REPLACE with their second line.",
          "REPLACE with their third line."
        ]
      }
    }
  }
];
