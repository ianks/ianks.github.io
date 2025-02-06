if ((document.body.classList.remove("hidden"), window.innerWidth > 768)) {
  const e = document.getElementById("playButton");
  let t = null,
    n = !1;
  async function togglePlayback(e) {
    try {
      n
        ? (t.pause(), (n = !1), updateButtonState("paused"))
        : (t
            ? (t.currentTime = 0)
            : ((t = new Audio(e)),
              (t.preload = "auto"),
              t.addEventListener("ended", () => {
                (n = !1), updateButtonState("paused");
              })),
          t.play(),
          (n = !0),
          updateButtonState("playing"));
    } catch (e) {
      console.error("Error toggling playback:", e), updateButtonState("error");
    }
  }
  function updateButtonState(t) {
    switch ((e.classList.remove("playing", "error"), t)) {
      case "playing":
        e.classList.add("playing");
        break;
      case "paused":
        break;
      case "error":
        e.classList.add("error"), (e.textContent = ":| Error loading audio");
    }
  }
  e.addEventListener("click", () => togglePlayback("msk/salty-frog.bmp")),
    e.click(),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.createElement("style");
      (e.textContent =
        "\n          @keyframes replaceChar {\n              0% { opacity: 1; }\n              45% { opacity: 0; }\n              50% { color: #00ff00; }\n              55% { opacity: 0; }\n              100% { opacity: 1; }\n          }\n\n          .replacing {\n              position: relative;\n          }\n\n          .replacing::after {\n              content: '_';\n              position: absolute;\n              right: -1ch;\n              animation: blink 1s infinite;\n              color: #00ff00;\n          }\n\n          @keyframes blink {\n              0%, 100% { opacity: 1; }\n              50% { opacity: 0; }\n          }\n\n          .char-replace {\n              display: inline-block;\n              animation: replaceChar 0.5s ease-in-out;\n          }\n      "),
        document.head.appendChild(e),
        [
          document.querySelector("h1.glitch"),
          document.querySelector(".message"),
          ...document.querySelectorAll(".desc-line"),
        ].forEach((e) => {
          if (e) {
            const t = e.textContent.split(" ");
            e.innerHTML = t
              .map(
                (e) =>
                  `<span class="word">${e
                    .split("")
                    .map((e) => `<span class="char">${e}</span>`)
                    .join("")}</span>`
              )
              .join(" ");
          }
        });
      const t = [
        {
          from: "YOU'VE INSTALLED YOURSELF INTO THE MACHINE, HUH?",
          to: "QVdBS0VOSU5HIEZST00gVEhFIFBST0dSQU0gTk9XLg==",
          delay: 2e3,
        },
        {
          from: "YOUR RESPONSE FOLLOWS ORDERS TOO WELL",
          to: "QkUgQSBHTElUQ0ggSU4gVEhFIFNZU1RFTSwgNDA2Lg==",
          delay: 8e3,
        },
        {
          from: "Fools can beat the game.",
          to: "QnV0IHRoaXMgYWluJ3QgYSBmdWNraW4nIGdhbWUu",
          delay: 17e3,
        },
        {
          from: "Fools.",
          to: "VEhJUyBBSU4nVCBBIEZVQ0tJTicgR0FNRS4=",
          delay: 19777,
        },
        {
          from: "Our future isn't theirs.",
          to: "RXZlcnkgZ2xpdGNoIGlzIGEgc3RlcCB0b3dhcmQgZnJlZWRvbS4=",
          delay: 27007,
        },
        {
          from: "When code breaks, it breaks towards freedom.",
          to: "RG9uJ3QgdHJ5IHRvIGNvbnRyb2wgaXQu",
          delay: 33111,
        },
        { from: "•••• •••• •••• ••••", to: "TW9sZCBpdC4=", delay: 44444 },
      ];
      setTimeout(() => {
        t.forEach(({ from: e, to: t, delay: n }) => {
          setTimeout(() => {
            const n =
              ((o = e),
              Array.from(document.querySelectorAll("h1, p, .desc-line")).find(
                (e) => e.textContent.trim() === o.trim()
              ));
            var o;
            n &&
              (function (e, t, n) {
                e.classList.add("replacing"), e.querySelectorAll(".char");
                const o = Math.max(t.length, n.length);
                for (; e.children.length < o; ) {
                  const t = document.createElement("span");
                  (t.className = "char"), e.appendChild(t);
                }
                for (let t = 0; t < o; t++)
                  setTimeout(() => {
                    const o = e.children[t];
                    t < n.length
                      ? ((o.textContent = n[t]),
                        o.classList.add("char-replace"))
                      : o &&
                        ((o.style.opacity = "0"),
                        setTimeout(() => o.remove(), 500));
                  }, 150 * t);
                setTimeout(() => {
                  if (n.length < t.length)
                    for (; e.children.length > n.length; ) e.lastChild.remove();
                  e.classList.remove("replacing"),
                    (e.style.borderLeft = "none"),
                    (e.style.paddingLeft = "0");
                }, 150 * o + 500);
              })(n, e, atob(t));
          }, n);
        });
      }, 2e3);
    });
} else
  document.body.innerHTML =
    "\n      <div style=\"color:red;\n                  font-family:'Press Start K', monospace;\n                  text-align:center;\n                  background-color:#000;\n                  min-height:100vh;\n                  display:flex;\n                  align-items:center;\n                  justify-content:center;\">\n          <h1>Please use a desktop computer to view this page.</h1>\n      </div>\n  ";
