const loadEl = document.querySelector(".loading-area");
const bgEl = document.querySelector(".bg-area");
const mainEl = document.querySelector("main");
const typing_view = mainEl.querySelector(".typing-show");
const typing_area = mainEl.querySelector(".typing-area");
const btnsEl = mainEl.querySelector(".btns");
const timeEl = mainEl.querySelector(".time");
const scoreEl = mainEl.querySelector(".score");
const startEl = mainEl.querySelector(".start");
const resetEl = mainEl.querySelector(".reset");
const timeLine = mainEl.querySelector(".line");

const levelEl = document.querySelector(".level");
const levelShow = document.querySelector(".level-show");
const choiceEl = [...document.querySelectorAll(".choice")];

const langEn = document.querySelector(".langen");
const LangKo = document.querySelector(".langko");

const headerEl = document.querySelector("header");
langEn.addEventListener("click", () => {
  sessionStorage.setItem("language", JSON.stringify("english"));
});
LangKo.addEventListener("click", () => {
  sessionStorage.removeItem("language");
});

const en_Content = [
  "Hello World!",
  "Don't dwell on the past",
  "Believe in yourself",
  "Follow your heart",
  "Seize the day",
  "You only live once",
  "Past is just past",
  "Love yourself",
  "No pain, No gain",
  "Be brave",
  "Hang in there",
  "Live positive",
  "if not now, then when?",
  "Time is gold",
  "Love what you do",
  "Life is unfair, get used to it",
  "Time waits for no one",
  "Don't waste your youth",
  "Age is no guarantee of maturity",
  "Youth isn't always all it's touted to be",
  "This too shall pass",
  "The die is cast",
  "Despite the forecast, live like it's spring",
  "Turn your wounds into wisdom",
  "All we have is now",
  "A day without laughter is a day wasted",
  "Rome is not built in a day",
  "It ain't over till it's over",
  "No sweat, no sweet",
  "Let bygones be bygones",
  "Life is venture or nothing",
  "Pain past is pleasure",
  "Step by step goes a long way",
];
const ko_Content = [
  "숭례문은 국보 1호 문화재이다.",
  "우리나라 최초의 한글 소설은 홍길동전이다.",
  "학교폭력 상담 전화는 117이다.",
  "이탈리아의 수도는 로마이다.",
  "돼지는 하늘을 볼 수 없다.",
  "달걀을 서로 부딪치면 하나만 깨진다.",
  "땅콩은 견과류가 아니다.",
  "쥐는 치즈를 선호하지 않는다.",
  "지구에서 가장 큰 사막은 남극이다.",
  "꿀벌은 에베레스트보다 높게 날 수 있다.",
  "돌고래는 바닷물을 마시지 않는다.",
  "황소는 빨간색을 보고 흥분하지 않는다.",
  "형광등은 계속 깜빡인다.",
  "10년 뒤면 모든 뼈가 새것이 된다.",
  "모기는 암컷만 문다.",
  "피는 물보다 진하다.",
  "한국은 세계에서 가장 많은 섬을 가지고 있다.",
  "세 가지의 색을 가진 고양이는 거의 암컷이다.",
  "한국어는 전 세계에서 12번째로 많이 쓰인다.",
  "피라미드가 제일 많은 나라는 이집트가 아니다.",
  "남극, 북극에선 감기에 걸리지 않는다.",
  "뜨거운 물이 차가운 물보다 더 빨리 언다.",
  "벼룩은 자기 몸길이의 350배 길이를 점프한다.",
  "나비는 발로 맛을 본다.",
  "인간 신체의 가장 힘이 센 근육은 혀이다.",
  "타조는 눈이 뇌보다 크다.",
  "오렌지는 원래 녹색이다.",
  "브로콜리는 인공식품이다.",
  "천연 바나나에는 씨앗이 있다.",
  "개미는 절대 추락사하지 않는다.",
  "꿀벌은 사람의 얼굴을 인식한다.",
  "소리는 공기보다 물속에서 4배 빠르다.",
  "스페인 국가에는 가사가 없다.",
  "눈물은 색깔 빼고는 혈액과 성분이 동일하다.",
  "오목을 한 판 할 때마다 뇌세포 200개가 죽는다.",
  "낙타는 혹이 있지만 척추는 곧바르다.",
  "고양이는 성경에 유일하게 기록되지 않는 가축이다.",
  "트럼프 속의 킹, 퀸은 실존 인물이다.",
  "우리가 꾸는 꿈은 잠에서 깨기 30초 전에 꾼다.",
  "인류는 침팬지보다 늦게 우주에 갔다.",
];

window.onload = languageCheck();
window.onload = levelCheck();
headerEl.addEventListener("click", languageCheck);

imagesLoaded(bgEl, { background: true }, function () {
  loadEl.classList.remove("loading");
});

export const setScreenSize = () => {
  if (typeof window === "undefined") return;
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
setScreenSize();

function levelCheck() {
  sessionStorage.getItem("level") ? sessionStorage.getItem("level") : sessionStorage.setItem("level", "NOMAL");
  levelShow.textContent = sessionStorage.getItem("level");
}

choiceEl.forEach((el) => {
  el.addEventListener("click", (event) => {
    levelShow.textContent = el.textContent;
    levelEl.dispatchEvent(new Event("mouseleave"));
    sessionStorage.setItem("level", `${event.target.textContent}`);
  });
});

function languageCheck() {
  if (JSON.parse(sessionStorage.getItem("language")) === "english") {
    langEn.classList.add("language");
    LangKo.classList.remove("language");
  } else {
    LangKo.classList.add("language");
    langEn.classList.remove("language");
  }
}

levelShow.addEventListener("mouseenter", () => {
  levelEl.classList.add("spread");
  choiceEl.forEach((el, index) => {
    el.style.transitionDelay = (index * 0.3) / choiceEl.length + "s";
  });
});

levelEl.addEventListener("mouseleave", () => {
  levelEl.classList.remove("spread");
  choiceEl.forEach((el) => {
    el.style.transitionDelay = "0s";
  });
});

document.body.addEventListener("keyup", (event) => {
  if (!btnsEl.classList.contains("ing")) {
    if (event.key == "Enter") startEl.dispatchEvent(new Event("click"));
  } else {
    if (event.key == "Escape") resetEl.dispatchEvent(new Event("click"));
  }
});

document.body.addEventListener("keyup", (event) => {
  if (!btnsEl.classList.contains("ing")) {
    if (event.key == "Enter") startEl.dispatchEvent(new Event("click"));
  } else {
    if (event.key == "Escape") resetEl.dispatchEvent(new Event("click"));
  }
});

startEl.addEventListener("click", () => {
  gameStart();
  btnsEl.classList.add("ing");
  headerEl.classList.add("ing");
  startTimer();
  focusScroll();
});

function focusScroll() {
  if (typing_area === document.activeElement) {
    mainEl.classList.add("focus");
  } else {
    mainEl.classList.remove("focus");
  }
}

resetEl.addEventListener("click", () => {
  btnsEl.classList.remove("ing");
  headerEl.classList.remove("ing");
  gameReset();
  clearInterval(interval);
  timeEl.textContent = "RESET!";
  timeLine.style.width = 0;
  focusScroll();
});

function gameStart() {
  if (JSON.parse(sessionStorage.getItem("language")) === "english") {
    enSet();
    defaultTime();
    scoreReset();
    if (matchMedia("(min-width: 650px)").matches) {
      typing_area.setAttribute("placeholder", "Esc를 눌러 리셋");
    } else {
      typing_area.setAttribute("placeholder", "");
    }
  } else {
    koSet();
    defaultTime();
    scoreReset();
    if (matchMedia("(min-width: 650px)").matches) {
      typing_area.setAttribute("placeholder", "Esc를 눌러 리셋");
    } else {
      typing_area.setAttribute("placeholder", "");
    }
  }
}

let score = 0;
typing_area.addEventListener("keyup", () => {
  if (typing_view.textContent.length <= event.target.value.length) {
    if (event.code === "Enter" || event.code == "Space") {
      if (typing_area.value == typing_view.textContent && typing_area.value.length > 0) {
        score += 1;
        scoreEl.textContent = `${score} 점`;
        gameReStart();
      }
    }
  }
});

function gameReStart() {
  if (JSON.parse(sessionStorage.getItem("language")) === "english") {
    enSet();
    plusTime();
  } else {
    koSet();
    plusTime();
  }
}

function gameReset() {
  typing_view.textContent = "";
  typing_area.value = "";
  scoreEl.textContent = `${score}`;
  typing_area.blur();
  focusScroll();
  typing_area.setAttribute("placeholder", "Enter를 눌러 시작");
}

let interval;
function startTimer() {
  interval = setInterval(timer, 10);
}

let time;

function timer() {
  focusScroll();
  if (matchMedia("(max-width: 650px)").matches) {
    mobileTimer();
  } else {
    time -= 0.01;
    timeEl.textContent = time.toFixed(1);
    switch (levelShow.textContent) {
      case "EASY":
        timeLine.style.width = (800 / 15) * time + "px";
        break;
      case "NOMAL":
        timeLine.style.width = (800 / 10) * time + "px";
        10;
        break;
      case "HARD":
        timeLine.style.width = (800 / 7) * time + "px";
        break;
    }
    if (time <= 0) {
      clearInterval(interval);
      timeEl.textContent = "TIME OUT!";
      btnsEl.classList.remove("ing");
      headerEl.classList.remove("ing");
      gameReset();
    }
  }
}

function mobileTimer() {
  time -= 0.01;
  timeEl.textContent = time.toFixed(1);
  switch (levelShow.textContent) {
    case "EASY":
      timeLine.style.width = (100 / 15) * time + "%";
      break;
    case "NOMAL":
      timeLine.style.width = (100 / 10) * time + "%";
      break;
    case "HARD":
      timeLine.style.width = (100 / 7) * time + "%";
      break;
  }
  if (time <= 0) {
    clearInterval(interval);
    timeEl.textContent = "TIME OUT!";
    btnsEl.classList.remove("ing");
    headerEl.classList.remove("ing");
    gameReset();
  }
}

function plusTime() {
  switch (levelShow.textContent) {
    case "EASY":
      time = 15;
      break;
    case "NOMAL":
      time += 6;
      if (time > 10) {
        time = 10;
      }
      break;
    case "HARD":
      time += 4;
      if (time > 7) {
        time = 7;
      }
      break;
  }
}

function defaultTime() {
  switch (levelShow.textContent) {
    case "EASY":
      time = 15;
      break;
    case "NOMAL":
      time = 10;
      break;
    case "HARD":
      time = 7;
      break;
  }
}

typing_area.addEventListener("input", initTyping);

function initTyping() {
  const checkIndex = [typing_area.value.length - 1];
  const showWord = typing_view.querySelectorAll("span");
  showWord.forEach((el, index) => {
    el.classList.remove("active");
    showWord[checkIndex]?.classList.add("active");
    if (matchMedia("(max-width: 650px)").matches) {
      if (el.innerText == typing_area.value[index]) {
        el.style.color = "rgb(172, 172, 172)";
        el.style.backgroundColor = "transparent";
      } else if (typing_area.value[index] == undefined) {
        el.style.color = "white";
        el.style.backgroundColor = "transparent";
      } else {
        el.style.color = "red";
      }
    } else {
      if (el.innerText == typing_area.value[index]) {
        el.style.color = "white";
        el.style.backgroundColor = "transparent";
      } else if (typing_area.value[index] == undefined) {
        el.style.color = "black";
        el.style.backgroundColor = "transparent";
      } else {
        el.style.color = "red";
      }
    }
  });
}

function koSet() {
  typing_view.innerHTML = "";
  let randomNumber = Math.floor(Math.random(1) * ko_Content.length);

  ko_Content[randomNumber].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typing_view.innerHTML += spanTag;
  });
  typing_area.setAttribute("maxlength", typing_view.textContent.length);
  typing_area.value = "";
  typing_area.focus();
}

function enSet() {
  typing_view.innerHTML = "";
  let randomNumber = Math.floor(Math.random(1) * en_Content.length);

  en_Content[randomNumber].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typing_view.innerHTML += spanTag;
  });
  typing_area.setAttribute("maxlength", typing_view.textContent.length);
  typing_area.value = "";
  typing_area.focus();
}

function scoreReset() {
  scoreEl.textContent = "SCORE";
  score = 0;
}
