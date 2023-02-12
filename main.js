const typing_view = document.querySelector(".typing");
const typing_area = document.querySelector(".area");

const text_Content = [
  "삶이 있는 한 희망은 있다.",
  "산다는 것 그것은 치열한 전투이다.",
  "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
  "언제나 현재에 집중할 수 있다면 행복할 것이다.",
  "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.",
  "신은 용기있는 자를 절대 버리지 않는다.",
  "피할 수 없으면 즐겨라.",
  "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
  "행복한 삶을 살기 위해 필요한 것은 거의 없다.",
  "한 번의 실패와 영원한 실패를 혼동하지 마라.",
  "계단을 밟아야 계단 위에 올라설 수 있다.",
  "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
  "만약 우리가 할 수 있는 일을 모두 한다면 우리는 우리 자신에 깜짝 놀랄 것이다.",
  "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될 것이다.",
  "세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.",
  "겨울이 오면 봄이 멀지 않으리.",
  "문제점을 찾지 말고 해결책을 찾으라.",
  "이미 끝나버린 일을 후회하기보다는 하고 싶었던 일들을 하지 못한 것을 후회하라.",
  "길을 잃는다는 것은 곧 길을 알게 된다는 것이다.",
  "사람이 여행하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
  "사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
  "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
  "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
  "자신감 있는 표정을 지으면 자신감이 생긴다.",
];

typing_view.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random(1) * text_Content.length);
  console.log(randomNumber);
  typing_view.textContent = text_Content[randomNumber];
});

typing_area.addEventListener("keyup", () => {
  if (typing_view.textContent.length <= event.target.value.length) {
    if (typing_view.textContent == event.target.value) {
      console.log(100);
    } else {
      console.log(0);
    }
  }
});
