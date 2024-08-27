import chalk from 'chalk';
import readlineSync from 'readline-sync';

class Player {
  constructor() {
    this.hp = 100;
    this.maxHp = 100;
    this.atk = 10;
  }

  attack(m) {
    let dmg = Math.floor(Math.random() * this.atk) + 1;
    m.Damage(dmg);
    return dmg;
  }

  heal() {
    let h = Math.floor(this.maxHp * 0.2);
    this.hp += h;
    if (this.hp > this.maxHp) this.hp = this.maxHp;
  }

  upgrade() {
    this.maxHp += 10;
    this.atk += 2;
    this.hp = this.maxHp;
  }

  Damage(dmg) {
    this.hp -= dmg;
  }

  moreHP() {
    return this.hp;
  }

  moreMaxHP() {
    return this.maxHp;
  }

  moreATK() {
    return this.atk;
  }
}

function Monster(s) {
  let hp = 50 + s * 10; // 스테이지에 따른 체력증가
  let atk = 5 + s * 2;  // 스테이지에 따른 뎀 증가

  // 스테이지 별 몬스터의 이름변경
  let name;
  if (s === 6) {
    name = '일본 군인';
  } else if (s === 7) {
    name = '프랑스 군인';
  } else if (s === 8) {
    name = '미국 군인';
  } else if (s === 9) {
    name = '영국 군인';
  } else if (s === 10) {
    name = '당신의 동생';
  } else {
    name = '몬스터';
  }

  let serve; // 스테이지에 따라 이름에 붙는 조사 바꾸기
  if (s > 5) {
    serve = '이';
  } else {
    serve = '가';
  }

  function moreplayfruit(s) { // 몬스터가 피해를 입힐 때 출력할 난수
    let Monsterfruit = Math.floor(Math.random() * 4);
    if (s < 6) {
      switch (Monsterfruit) {
        case 1:
          return "으아아아아악!";
        default:
          return "으아아아아아아아아악!";
      }
    } else {
      switch (Monsterfruit) {
        case 1:
          return "살려줘!!";
        default:
          return "도망쳐!!!";
      }
    }
  }

  function moreserve() { //조사를 반환하는 메서드
    return serve;
  }
  // 플레이어를 공격하는 메서드
  function attack(p) {
    let dmg = Math.floor(Math.random() * atk) + 1; // 무작위 공격 피해 계산
    p.Damage(dmg); // 플레이어에게 피해를 입힘
    return dmg;    // 가한 피해를 리턴.
  }

  // 몬스터가 피해를 입을 때 체력을 감소시키는 메서드
  function Damage(dmg) {
    hp -= dmg;
  }

  // 현재 몬스터의 체력을 반환하는 메서드
  function moreHP() {
    return hp;
  }

  // 몬스터의 이름을 반환하는 메서드
  function moreName() {
    return name;
  }

  // 몬스터 객체에서 사용할 메서드들을 반환
  return {
    attack,
    Damage,
    moreHP,
    moreName,
    moreserve,
    moreplayfruit,
  };
}

// 전투 상태를 표시하는 함수
function Status(s, p, m) {
  console.log(chalk.magentaBright(`\n=== Status ===`));
  console.log(`Stage: ${s}`);

  // 스테이지에 따른 스토리 출력
  if (s === 1) {
    console.log(chalk.yellowBright.bold("6월 14일 일본 타마모노마에를 모시는 사당에 있던 타마모 제사용 방울 도난"));
  } else if (s === 2) {
    console.log(chalk.yellowBright.bold("7월 3일 프랑스에서 바위에 박혀있던 뒤란달 도난"));
  } else if (s === 3) {
    console.log(chalk.yellowBright.bold("7월 10일 미국 마들렌 대성당 마리아 막달레나 성녀의 유물 도난"));
  } else if (s === 4) {
    console.log(chalk.yellowBright.bold("7월 14일 영국에서 엑스칼리번 도난"));
  } else if (s === 5) {
    console.log(chalk.yellowBright.bold("도난당한 물건들의 역사에 비해 짧은 기간동안 사건이 연속적으로 발생."));
  } else if (s === 6) {
    console.log(chalk.yellowBright.bold("일본에서 두개골이 함몰된 다수의 시체 발견."));
    console.log(chalk.yellowBright.bold(`"방울로 치면 이쁜소리가 날 줄 알았어요."`));
  } else if (s === 7) {
    console.log(chalk.yellowBright.bold("대한민국 서울에 있는 베를린 장벽에서 뒤란달 발견."));
    console.log(chalk.yellowBright.bold(`"벽이 허전해 보였는데 장식해줬어요."`));
  } else if (s === 8) {
    console.log(chalk.yellowBright.bold("범인의 집 창가에 있는 방울토마토 화분에서 마리아 막달레나 성녀의 유물(뼈가루) 발견."));
    console.log(chalk.yellowBright.bold(`"방울토마토가 더 잘 자랄 것 같아서 뿌려봤어요."`));
  } else if (s === 9) {
    console.log(chalk.yellowBright.bold("이순신장군상의 오른손에서 엑스칼리버 발견."));
    console.log(chalk.yellowBright.bold(`"쌍검도 잃어버리셨는데 이거라도 들고 계셔야죠."`));
  } else if (s === 10) {
    console.log(chalk.red.bold("당신은 잔인한 사람이야."));
  }

  // 플레이어와 몬스터의 현재 체력 및 몬스터 이름 상태 출력
  console.log(`Player HP: ${p.moreHP()}/${p.moreMaxHP()}`);
  console.log(`${m.moreName()} HP: ${m.moreHP()}`);
  console.log(chalk.magentaBright(`===============\n`));
}

const messages = [ //클리어시 스토리 출력(개연성)
  "",
  `"나는 사이코패스라고 한다."`,
  `"그게 무엇인지는 잘 모르겠지만"`,
  `"사람들은 날 그렇게 불렀다."`,
  `"어떠한 행동을 하든 세상은 나를 이해해주지 않았다."`,
  `"그러던 어느 날 가장 친하고 의지하던 친구에게 "`,
  `"[너는 잘 이해가 안되네.] 라는 말을 들었다."`,
  `"어짜피 이해받지 못할 삶이라면,"`,
  `"이해할 수 없는 것."`,
  `"공포가 되리라."`,
  "",
  `"나처럼 이해할 수 없는 사람이 나오면,"`,
  `"나를 통해 이해할 수 있도록."`
];

async function fight(s, p, m) {
  let log = []; // 전투 로그를 기록하기 위한 배열

  // 전투 루프 - 플레이어와 몬스터가 서로 공격하며 싸움
  while (p.moreHP() > 0 && m.moreHP() > 0) {
    console.clear(); // 화면을 지우고 상태를 새로 표시
    Status(s, p, m); // 현재 상태 출력

    // 이전의 전투 로그 출력
    for (let l of log) console.log(l);

    // 플레이어의 행동 선택
    console.log('1. 공격 2. 도망');
    let c = readlineSync.question('선택? ');

    if (c == '1') {
      let pd = p.attack(m); // 플레이어가 몬스터를 공격
      log.push(`플레이어가 ${p.moreplayfruit(s)} ${pd} 피해를 입힘`);

      if (m.moreHP() > 0) {
        let md = m.attack(p); // 몬스터가 살아있다면 플레이어를 공격
        log.push(`${m.moreName()}${m.moreserve()} ${md} 피해를 입힘`);
      }
    } else if (c == '2') {
      if (s === 10) { // 10 스테이지 도망 불가
        log.push('당신의 광기가 싸움을 원하고 있습니다.');
        log.push('도망 실패, 몬스터가 공격!');
        let md = m.attack(p); // 도망 실패 시 몬스터가 공격
        log.push(`${m.moreName()}${m.moreserve()} ${md} 피해를 입힘`);
      } else {
        if (Math.random() < 0.8) { // 80% 확률로 도망 성공
          log.push('도망 성공!');
          return true;
        } else {
          log.push('도망 실패, 몬스터가 공격!');
          let md = m.attack(p);
          log.push(`${m.moreName()}가 ${md} 피해를 입힘`);
        }
      }
    } else if (c.toLowerCase() === 'run') { //toLowerCase는 대소문자 구분없이 소문자로 바꿔준다.
      console.log(chalk.red('당신은 광기로부터 도망쳤습니다.'));
      process.exit(0); // 게임 종료
    } else {
      log.push('잘못된 선택');
    }
  }

  return p.moreHP() > 0; // 플레이어의 체력이 0보다 크다면 승리
}

export async function startGame() {
  console.clear(); // 게임 시작 시 화면을 초기화
  let p = new Player(); // 플레이어 객체 생성
  let s = 1; // 첫 스테이지 시작

  while (s <= 10) {
    let m = new Monster(s); // 현재 스테이지에 맞는 몬스터 생성
    let sc = await fight(s, p, m); // 전투 진행, 도망치는 코드에서 true를 반환하면 다음스테이지로.
    if (sc) {
      s++; // 스테이지 클리어 시 다음 스테이지로 진행
      p.upgrade(); // 플레이어 업그레이드
      console.log(chalk.greenBright.bold('10스테이지 클리어!'));
      
    } else {
      console.log(chalk.redBright.bold('게임 오버')); // 플레이어 사망 시 게임 종료
      break;
    }
    if (s >= 10) {
      console.log(chalk.redBright.bold('당신은 알 수 없는 광기에 잡아먹혔습니다!')); // 스테이지 10 완료 시 출력
    }
  }
  if ('10스테이지 클리어!') {
    messages.forEach((message, index) => {
      setTimeout(() => {
        // 특정 메시지에 대해 색상 변경 by server.js
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
}