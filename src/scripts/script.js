const showWidth = () => {
  const displayElement = document.querySelector("#browser-width");
  let browserWidth = window.innerWidth;

  if (browserWidth && displayElement) {
    displayElement.innerHTML = `<code>Browser width: ${browserWidth}</code>`;
  }
};

const showColumns = (e, combo = "3g1c") => {
  const elementsToHide = document.querySelectorAll(".column");
  for (let elem of elementsToHide) {
    elem.classList.add("hidden");
  }
  if (combo === "4g0c") {
    document.querySelector("#combo-wrapper").className = "";
    document
      .querySelector("#combo-wrapper")
      .classList.add("four-groups-no-cards");
    const elementsToShow = document.querySelectorAll(
      ".group-1, .group-2, .group-3, .group-4"
    );
    for (let elem of elementsToShow) {
      elem.classList.toggle("hidden");
    }
    document.querySelector("#comment").innerHTML =
      "<h3>4 groups</h3><p>works in narrow and wide screens</p>";
  }
  if (combo === "3g1c") {
    document.querySelector("#combo-wrapper").className = "";
    document
      .querySelector("#combo-wrapper")
      .classList.add("three-groups-one-card");
    const elementsToShow = document.querySelectorAll(
      ".group-1, .group-2, .group-3, .promo-1"
    );
    for (let elem of elementsToShow) {
      elem.classList.toggle("hidden");
    }
    document.querySelector("#comment").innerHTML =
      "<h3>3 groups, 1 card</h3><p>Card is omitted in in narrow desktop</p>";
  }
  if (combo === "2g2c") {
    document.querySelector("#combo-wrapper").className = "";
    document
      .querySelector("#combo-wrapper")
      .classList.add("two-groups-two-cards");
    const elementsToShow = document.querySelectorAll(
      ".group-1, .group-2, .promo-1, .promo-2"
    );
    for (let elem of elementsToShow) {
      elem.classList.toggle("hidden");
    }
    document.querySelector("#comment").innerHTML =
      "<h3>2 groups, 2 cards</h3><p>Second card is omitted in narrow.</p>";
  }
  if (combo === "1g3c") {
    document.querySelector("#combo-wrapper").className = "";
    document
      .querySelector("#combo-wrapper")
      .classList.add("one-group-three-cards");
    const elementsToShow = document.querySelectorAll(
      ".group-1, .promo-1, .promo-2, .promo-3"
    );
    for (let elem of elementsToShow) {
      elem.classList.toggle("hidden");
    }
    document.querySelector("#comment").innerHTML =
      "<h3>1 group, 3 cards</h3><p>Third card is omitted in narrow.</p>";
  }
  if (combo === "0g3c") {
    document.querySelector("#combo-wrapper").className = "";
    document
      .querySelector("#combo-wrapper")
      .classList.add("no-groups-three-cards");
    const elementsToShow = document.querySelectorAll(
      ".promo-1, .promo-2, .promo-3"
    );
    for (let elem of elementsToShow) {
      elem.classList.toggle("hidden");
    }
    document.querySelector("#comment").innerHTML =
      '<h3>No groups, 3 cards</h3><p>Four cards doesn\'t look good and would nedd to "shrink" the hotspot links.</p>';
  }
  // if (combo === "0g4c") {
  //   document.querySelector("#combo-wrapper").className = "";
  //   document
  //     .querySelector("#combo-wrapper")
  //     .classList.add("no-groups-four-cards");
  //   const elementsToShow = document.querySelectorAll(
  //     ".promo-1, .promo-2, .promo-3, .promo-4"
  //   );
  //   for (let elem of elementsToShow) {
  //     elem.classList.toggle("hidden");
  //   }
  //   document.querySelector("#comment").innerHTML =
  //     "<h3>0 groups, 4 cards</h3><p>...</p>";
  // }
  // if (combo === "0g3c") {
  //   document.querySelector("#combo-wrapper").className = "";
  //   document.querySelector("#combo-wrapper").classList.add("0g3c");
  //   const elementsToShow = document.querySelectorAll(
  //     ".promo-1, .promo-2, .promo-3"
  //   );
  //   for (let elem of elementsToShow) {
  //     elem.classList.toggle("hidden");
  //   }
  // }
  // if (combo === "1g2c") {
  //   document.querySelector("#combo-wrapper").className = "";
  //   document.querySelector("#combo-wrapper").classList.add("1g2c");
  //   const elementsToShow = document.querySelectorAll(
  //     ".group-1, .promo-1, .promo-2"
  //   );
  //   for (let elem of elementsToShow) {
  //     elem.classList.toggle("hidden");
  //   }
  // }
};

document.addEventListener("DOMContentLoaded", showWidth);
document.addEventListener("DOMContentLoaded", showColumns);
window.onresize = showWidth;
