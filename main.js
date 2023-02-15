// 타이핑 영역
const typing_view = document.querySelector(".typing-show");
const typing_area = document.querySelector(".typing-area");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const startEl = document.querySelector(".start");
const btnsEl = document.querySelector(".btns");
const timeLine = document.querySelector(".line");
// level 선택
const levelEl = document.querySelector(".level");
const levelShow = document.querySelector(".level-show");
const choiceEl = [...document.querySelectorAll(".choice")];
// language 선택
const langEn = document.querySelector(".langen");
const LangKo = document.querySelector(".langko");
// header 선택
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
];
const ko_Content = [
  "숭례문은 국보 1호 문화재이다.",
  "우리나라 최초의 한글 소설은 홍길동전이다.",
  "학교폭력 상담 전화는 117이다.",
  "이탈리아의 수도는 로마이다.",
  "돼지는 하늘을 볼 수 없다.",
  "달걀을 서로 부딪치면 하나만 깨진다.",
  "땅콩은 견과류가 아니다.",
  "의사, 변호사, 검사의 '사'자는 다 다르다.",
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
  "러시아는 고드름으로 인해 매년 100명 이상이 사망한다.",
  "태양 안에는 96만 개의 지구가 들어갈 수 있다.",
  "한국어는 전 세계에서 12번째로 많이 쓰인다.",
];
// header
window.onload = enCheck();
headerEl.addEventListener("click", enCheck);

function enCheck() {
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

choiceEl.forEach((el) => {
  el.addEventListener("click", () => {
    levelShow.textContent = el.textContent;
    levelEl.dispatchEvent(new Event("mouseleave"));
  });
});

console.log(choiceEl);
//main
startEl.addEventListener("click", () => {
  gameStart();
  btnsEl.classList.add("ing");
  headerEl.classList.add("ing");
  startTimer();
});

function gameStart() {
  if (JSON.parse(sessionStorage.getItem("language")) === "english") {
    enSet();
    defaultTime();
    scoreReset();
  } else {
    koSet();
    defaultTime();
    scoreReset();
  }
}
console.log(JSON.parse(sessionStorage.getItem("language")));
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
}

let interval;
function startTimer() {
  interval = setInterval(timer, 10);
}

let time;
function timer() {
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
// mobile timeline
if (matchMedia("(max-width: 650px)").matches) {
  function timer() {
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
        time = 10;
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

function enSet() {
  randomNumber = Math.floor(Math.random(1) * en_Content.length);
  typing_view.textContent = en_Content[randomNumber];
  typing_area.setAttribute("maxlength", typing_view.textContent.length);
  typing_area.value = "";
  typing_area.focus();
}

function koSet() {
  randomNumber = Math.floor(Math.random(1) * ko_Content.length);
  typing_view.textContent = ko_Content[randomNumber];
  typing_area.setAttribute("maxlength", typing_view.textContent.length);
  typing_area.value = "";
  typing_area.focus();
}

function scoreReset() {
  scoreEl.textContent = "SCORE";
  score = 0;
}
