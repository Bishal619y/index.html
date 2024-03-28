const febHolidays = [
    "Dear Shima,",
    "First of all, I'm Sorry ❤️",
    "You're the cutiee pattotie",
    "You are the best thing that happened in my life",
    "And of course...",
    "A surprise for me in Future",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive.",
    "In one word, you're just perfect.😍",
    "I'llbe happiest if you're happy🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the bestttttttttttt🥰",
    "I don't want to see you sad",
    "And trust me I dont want anyone else",
    "There's no one better than you❤️",
    "You're the best cutieeeeee!!",
    "Or should I say, mo gro coco d'amour que j'adore a la folie XD",
    "Wow!! 3 months are left for the big surprise hehe",
    "There's some hardships,",
    "but we overcame most of them",
    "and it made me realised how to tackle your sadness❤️",
    "This for you,",
    "Mon amour",
    "ek mo l'amour",
    "Don't get mad on me🤣❤️",
    "But anyways,",
    "You're the bestestttttt and have a niceeeeee dayyyyyyy,",
    "Shimba Rai❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  