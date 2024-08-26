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
주석을 줄마다 달아두기.

6스테이지부터 플레이어 -> 당신. 가-> 이.
몬스터가 -> 군인   가 -> 이

2024/08/23
피해- 를 구체적인 문장으로 다양하게 작성.
난수로 설정하여 피해를 입히는 상황마다 난수로 console.log

당신을 막으러 온 친구 -> 당신의 동생 으로 변경
