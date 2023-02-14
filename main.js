// 타이핑 영역
const typing_view = document.querySelector(".typing");
const typing_area = document.querySelector(".area");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const startEl = document.querySelector(".start");
const btnsEl = document.querySelector(".btns");
// level 선택
const levelEl = document.querySelector(".level");
const levelShow = document.querySelector(".level-show");
const choiceEl = document.querySelectorAll(".choice");
const text_Content = [
  "숭례문은 국보 1호 문화재이다.",
  "우리나라 최초의 한글 소설은 홍길동전이다.",
  "학교폭력 상담 전화는 117이다.",
  "이탈리아의 수도는 로마이다.",
  "돼지는 하늘을 볼 수 없다.",
  "계란을 서로 부딪치면 하나만 깨진다.",
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

levelEl.addEventListener("click", () => {
  levelEl.classList.toggle("spread");
});

choiceEl.forEach((el) => {
  el.addEventListener("click", () => {
    levelShow.textContent = el.textContent;
  });
});

startEl.addEventListener("click", () => {
  gameStart();
  btnsEl.classList.add("ing");
  startTimer();
});

let score = 0;
typing_area.addEventListener("keyup", () => {
  if (typing_view.textContent.length <= event.target.value.length) {
    if (event.code === "Enter" || event.code == "Space") {
      if (typing_area.value == typing_view.textContent) {
        score += 1;
        scoreEl.textContent = `${score} 점`;
        plusTime();
        gameStart();
      }
    }
  }
});

function gameStart() {
  randomNumber = Math.floor(Math.random(1) * text_Content.length);
  typing_view.textContent = text_Content[randomNumber];
  typing_area.setAttribute("maxlength", typing_view.textContent.length);
  typing_area.value = "";
  typing_area.focus();
  defaultTime();
}

function gameReset() {
  typing_view.textContent = "";
  typing_area.value = "";
  scoreEl.textContent = "SCORE";
  score = 0;
}
let interval;
function startTimer() {
  interval = setInterval(timer, 100);
}
let time;

function timer() {
  time -= 0.1;
  timeEl.textContent = time.toFixed(1);
  if (time <= 0) {
    clearInterval(interval);
    timeEl.textContent = "TIME OUT!";
    btnsEl.classList.remove("ing");
    gameReset();
  }
}

function plusTime() {
  switch (levelShow.textContent) {
    case "EASY":
      time += 13;
      break;
    case "NOMAL":
      time += 10;
      break;
    case "HARD":
      time += 7;
      break;
  }
}

function defaultTime() {
  switch (levelShow.textContent) {
    case "EASY":
      time = 20;
      break;
    case "NOMAL":
      time = 16;
      break;
    case "HARD":
      time = 12;
      break;
  }
}
