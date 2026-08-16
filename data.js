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
    backText: ["replace", "replace"],
    frontImage: "images/Janus-front.png",
    backImage: "images/Janus-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as him",

      young: {
        sideLabel: "Younger",
        voice: "audio/janus-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "REPLACE" },
          { label: "Species", value: "REPLACE" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Magician" }
        ],
        bio: [
          "REPLACE — biography paragraph one. Where he came from, who raised him, what he wanted.",
          "REPLACE — biography paragraph two. The turn: what cracked, and when."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/janus-older-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "REPLACE" },
          { label: "Species", value: "REPLACE" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Magician Reversed" }
        ],
        bio: [
          "REPLACE — what he became, and what it cost."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
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
    backText: ["Replace this text", "Replace"],
    frontImage: "images/Hezekial-front.png",
    backImage: "images/Hezekial-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as him",

      young: {
        sideLabel: "Younger",
        voice: "audio/hezekial-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "REPLACE" },
          { label: "Species", value: "REPLACE" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Hierophant" }
        ],
        bio: [
          "REPLACE — biography paragraph one. The Adams household, the standard he was held to.",
          "REPLACE — biography paragraph two. The turn: where the sympathy went."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/hezekial-older-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "REPLACE" },
          { label: "Species", value: "REPLACE" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Hierophant Reversed" }
        ],
        bio: [
          "REPLACE — what he became, and what it cost."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
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
    backText: ["Replace", "Perhaps the archive knows more than it is willing to reveal."],
    frontImage: "images/Juliet-front.png",
    backImage: "images/Juliet-back.png",

    profile: {
      voiceClaim: "REPLACE — who you hear as her",

      young: {
        sideLabel: "Younger",
        voice: "audio/juliet-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "135 cm" },
          { label: "Species", value: "Halfling" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Empress" }
        ],
        bio: [
          "REPLACE — biography paragraph one. The Dreymos estate, the coddling, the teasing.",
          "REPLACE — biography paragraph two. The turn: what the vulnerability opened the door to."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
      },

      older: {
        sideLabel: "Older",
        voice: "audio/juliet-older-voice.mp3",
        stats: [
          { label: "Age", value: "REPLACE" },
          { label: "Height", value: "REPLACE" },
          { label: "Species", value: "Halfling" },
          { label: "Pronouns", value: "REPLACE" },
          { label: "Role", value: "REPLACE" },
          { label: "Arcana", value: "The Empress Reversed" }
        ],
        bio: [
          "REPLACE — what she became, and what it cost."
        ],
        traits: ["REPLACE", "REPLACE", "REPLACE"]
      }
    }
  }
];
