// =========================================================
// 1. PREVENT JUMP ON REFRESH & STRIP HASH
// =========================================================

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname);
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});


// =========================================================
// 2. SMOOTH SCROLL & PREVENT # FROM APPEARING IN URL
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // Intercept ALL links that start with '#' (nav, buttons, logo)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // <-- THIS STOPS THE URL FROM CHANGING

      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // =========================================================
  // 3. TAROT CARD FLIP
  // =========================================================

  const cardData = [
    {
      cssClass: "Janus",
      name: "Janus Picca",
      frontTag: "THE MAGICIAN",
      frontTitle: "JANUS PICA",
      frontText: "His parents didn't call him Heinous Janus for no reason! Janus is one rambunctiously playful man, prone to playing silly pranks and sneaking around. But don't be fooled, he isn't simple-minded. In fact, he's rather intelligent, a fact that's he's hidden by his lively facade. He knows how to use his charisma, and isn't shy about it. He always wants to know… everything. And his eye? What could he be hiding? He really is a mystery of a man. A shame he turned out so callous.",
      backTag: "THE MAGICIAN REVERSED",
      backTitle: "THE BLEEDING BROKER",
      backText: ["replace", "replace"],
      frontImage: "images/Janus-front.png",
      backImage: "images/Janus-back.png"
    },
    {
      cssClass: "Hezekial",
      name: "Hezekial Adams",
      frontTag: "THE HIEROPHANT",
      frontTitle: "HEZEKIAL ADAMS",
      frontText: "His early life was constrained by self imposed structured schedules and a dilligent education. He despised laziness and detested obstreperous people, focused solely on achieving his unattainable standard of perfection. A brilliant mind made for engineering and tinkering, he might've succeeded the best of the best. Still, despite his seemingly prejudiced exterior, he wouldn't hesitate to help anyone in their time of need—it's just a shame it didn't last.",
      backTag: "THE HIEROPHANT REVERSED",
      backTitle: "THE PROPHETIC JUDGE",
      backText: ["Replace this text", "Replace"],
      frontImage: "images/Hezekial-front.png",
      backImage: "images/Hezekial-back.png"
    },
    {
      cssClass: "Juliet",
      name: "Juliet Dreymos",
      frontTag: "THE EMPRESS",
      frontTitle: "JULIET DREYMOS",
      frontText: "This doe halfling is as sweet as a dried jujube! Standing at only 135 cm tall at her full height, she's as intimidating as a fluffy lapdog. A childhood being a frequent victim of teasing has made Juliet a bit skittish and timid, so she is quick to get dependant on those she lets into her tender heart. A daddy's girl through and through, she relishes in the privileges of Lord Dreymos's coddling. Destined to power through favouritism, it's safe to assume she'd make a kind marchioness. It was a shame her vulnerability consumed her.",
      backTag: "THE EMPRESS REVERSED",
      backTitle: "EKLEKTOS PRINKIPESSA",
      backText: ["Replace", "Perhaps the archive knows more than it is willing to reveal."],
      frontImage: "images/Juliet-front.png",
      backImage: "images/Juliet-back.png"
    }
  ];

  const grid = document.getElementById("oc-grid");

  if (grid) {
    grid.innerHTML = cardData.map((card) => `
      <article class="oc-card" tabindex="0" role="button" aria-label="Card for ${card.name}">
        <div class="oc-card-inner">
          <div class="oc-card-front">
            <div class="${card.cssClass}-image">
              <img src="${card.frontImage}" alt="${card.name}">
            </div>
            <div class="${card.cssClass}-info">
              <span class="tag">${card.frontTag}</span>
              <h3>${card.frontTitle}</h3>
              <div class="expandable-text-wrap">
                <p class="expandable-text collapsed">${card.frontText}</p>
              </div>
            </div>
          </div>

          <div class="oc-card-back">
            <div class="${card.cssClass}-image">
              <img src="${card.backImage}" alt="${card.name} alternate artwork">
            </div>
            <div class="${card.cssClass}-back-text">
              <span class="tag">${card.backTag}</span>
              <h3>${card.backTitle}</h3>
              ${card.backText.map((line) => `
                <div class="expandable-text-wrap">
                  <p class="expandable-text collapsed">${line}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </article>
    `).join("");
  }

  const cards = document.querySelectorAll(".oc-card");

  cards.forEach(card => {
    let touchStartY = 0;
    let touchStartX = 0;

    card.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      touchStartY = touch.clientY;
      touchStartX = touch.clientX;
    }, { passive: true });

    card.addEventListener("touchend", (e) => {
      const touch = e.changedTouches[0];
      const deltaY = Math.abs(touch.clientY - touchStartY);
      const deltaX = Math.abs(touch.clientX - touchStartX);

      if (deltaY < 10 && deltaX < 10) {
        card.classList.toggle("flipped");
      }
    }, { passive: true });

    card.addEventListener("click", (e) => {
      if (e.target.closest(".Janus-info, .Hezekial-info, .Juliet-info, .Janus-back-text, .Hezekial-back-text, .Juliet-back-text")) {
        return;
      }

      e.stopPropagation();
      card.classList.toggle("flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });

  // =========================================================
  // 4. BACKGROUND MUSIC CONTROLS
  // =========================================================

  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const musicStatus = document.getElementById("music-status");
  const archiveEntry = document.getElementById("archive-entry");
  const enterArchiveBtn = document.getElementById("enter-archive");

  if (music && musicBtn) {
    music.volume = 0.35;

    let isPlaying = false;

    function setMusicState(playing) {
      if (playing) {
        musicIcon.textContent = "🔊";
        musicStatus.textContent = "MUSIC: ON";
        musicBtn.classList.add("playing");
      } else {
        musicIcon.textContent = "🔇";
        musicStatus.textContent = "MUSIC: OFF";
        musicBtn.classList.remove("playing");
      }
    }

    function toggleMusic() {
      if (isPlaying) {
        music.pause();
        setMusicState(false);
        isPlaying = false;
      } else {
        music.play().then(() => {
          setMusicState(true);
          isPlaying = true;
        }).catch(err => {
          console.log("Audio play blocked by browser:", err);
        });
      }
    }

    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  if (archiveEntry && enterArchiveBtn) {
    enterArchiveBtn.addEventListener("click", () => {
      archiveEntry.classList.add("hidden");

      if (music) {
        music.play().then(() => {
          if (musicIcon && musicStatus && musicBtn) {
            musicIcon.textContent = "🔊";
            musicStatus.textContent = "MUSIC: ON";
            musicBtn.classList.add("playing");
          }
        }).catch(err => {
          console.log("Entry music play blocked by browser:", err);
        });
      }
    });
  }

  document.addEventListener("pointerdown", (event) => {
    const burst = document.createElement("span");
    burst.className = "starburst";

    const x = event.clientX;
    const y = event.clientY;
    const dx = (Math.random() * 80 - 40) + "px";
    const dy = (Math.random() * 80 - 40) + "px";

    burst.style.left = x + "px";
    burst.style.top = y + "px";
    burst.style.setProperty("--dx", dx);
    burst.style.setProperty("--dy", dy);

    document.body.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, 700);
  });

});
