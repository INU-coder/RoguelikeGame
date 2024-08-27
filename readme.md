@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# RoguelikeGame
RoguelikeGame

터미널에 npm init -y 실행 시.

{
  "name": "roguelikegame",
  "version": "1.0.0",
  "description": "RoguelikeGame",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

노션에 나온 npm init -y 실행 시 코드
// package.json
{
  "name": "rogue_like_javascript",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "type": "module" // 옵션 추가
}


몬스터 와 Monster가 $처리로 6스테이지부터 인간.으로 바뀌여야함.
즉 스테이지 숫자가 5보다 클때.
if (Stage number > 5) {
  $monster의 이름이 스테이지별 이름으로 바뀌여야함.
  6영국군.
  7프랑스군
  8미국군
  9뭐시기군
  10당신을 막으러 온 친구.
}

@@@@@@@@@@@@@@@@@@@
코드가 많아지니까 헷갈리기 시작.
-> 주석을 줄마다 달아두기.
-> 선언해둔 선언명 변경

6스테이지부터 플레이어 -> 당신. 가-> 이.
몬스터가 -> 군인   가 -> 이

2024/08/23
피해- 를 구체적인 문장으로 다양하게 작성.
난수로 설정하여 피해를 입히는 상황마다 난수로 console.log

당신을 막으러 온 친구 -> 당신의 동생 으로 변경

10스테이지는 도망이 불가능하게 변경.

길어지니까 끝내고 다시 시작하는게 귀찮아짐.
-> run 입력 시 탈출.

@@@@

08.26
엔딩에 스토리의 개연추가
시간 차 console.log 출력.
출력별 강조 색 변경.

`"나는 사이코패스라고 한다."`
`"그게 무엇인지는 잘 모르겠지만"`
`"사람들은 날 그렇게 불렀다."`
`"어떠한 행동을 하든 세상은 나를 이해해주지 않았다."`
`"그러던 어느 날 가장 친하고 의지하던 친구에게 "`
`"너는 잘 이해가 안되네. 라는 말을 들었다."`
`"어짜피 이해받지 못할 삶이라면."`
`"이해할 수 없는 것."`
`"공포가 되리라."`
`"나처럼 이해할 수 없는 사람이 나오면."`
`"나를 통해 이해할 수 있도록."`

while (s <= 10) {
    let m = new Monster(s); // 현재 스테이지에 맞는 몬스터 생성
    let sc = await fight(s, p, m); // 전투 진행, 도망치는 코드에서 true를 반환하면 다음스테이지로.
    if (sc) {
      s++; // 스테이지 클리어 시 다음 스테이지로 진행
      p.upgrade(); // 플레이어 업그레이드
      messages.forEach((message, index) => {
        setTimeout(() => {
          // 특정 메시지에 대해 색상 변경
          if (message === `"나는 사이코패스라고 한다."`) {
            console.log(chalk.yellowBright.bold(message));
          } else if (message === "10스테이지 클리어!") {
            console.log(chalk.green.bold(message));
          } else if (message === `"공포가 되리라."`) {
            console.log(chalk.red.bold(message));
          } else if (message === `"나를 통해 이해할 수 있도록."`) {
            console.log(chalk.magenta.bold(message));
          } else {
            console.log(chalk.yellow(message));
          }
        }, index * 1000); // 1초(1000ms) 간격으로 출력
      });

이 부분에서 원하지 않는 결과가 나왔다.
10스테이지 엔딩크레딧 (스토리개연)이 10번씩 반복되어 나오는 결과가 출력.
변정섭 튜터님께 문의 결과 
while (s <= 10) 때문에
스테이지 하나씩 출력을 모아놨다가 한꺼번에 출력된것이라는 피드백
->
if ('10스테이지 클리어!') {
    messages.forEach((message, index) => {
      setTimeout(() => {
        // 특정 메시지에 대해 색상 변경
        if (message === `"나는 사이코패스라고 한다."`) {
          console.log(chalk.magenta.bold(message));
        } else if (message === `"공포가 되리라."`) {
          console.log(chalk.red.bold(message));
        } else if (message === `"나를 통해 이해할 수 있도록."`) {
          console.log(chalk.magenta.bold(message));
        } else {
          console.log(chalk.yellow(message));
        }
      }, index * 1000); // 1초(1000ms) 간격으로 출력
    });
  }

이 코드를 와일문 밖에 둠으로 써 해결


// 엔딩크레딧을 10번출력
  // 10번 출력시간을 난수로 설정.

8/27
function player 를 class player로 바꿔야한다고한다.
그것이 체점 조건이기 떄문이다.
class문을 쓰려면 this를 같이 써야한다.
아직 2주차밖에 안배운걸로 만든건데 서운하다
당장 강의를 들으러 가야겠다.
