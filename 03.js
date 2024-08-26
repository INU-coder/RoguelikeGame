import chalk from 'chalk';
import readlineSync from 'readline-sync';

function Player() {
  let hp = 100;
  let maxHp = 100;
  let atk = 10;

  // 플레이어가 피해를 입힐 때 출력할 난수
  function moreplayfruit(s) {
    let playfruit = Math.floor(Math.random() * 2);
    if (s < 2) {
      switch (playfruit) {
        case 1:
          return "뒤란달로 찔렀다.";
        default:
          return "뒤란달로 찔렀다.";
      }
    } else {
      switch (playfruit) {
        case 1:
          return "뒤란달로 찔렀다.";
        default:
          return "엑스칼리버로 베었다.";
      }
    }
  }

  function attack(m) {
    let dmg = Math.floor(Math.random() * atk) + 1;
    m.Damage(dmg);
    return dmg;
  }

  function heal() {
    let h = Math.floor(maxHp * 0.2);
    hp += h;
    if (hp > maxHp) hp = maxHp;
  }

  function upgrade() {
    maxHp += 10;
    atk += 2;
    hp = maxHp;
  }

  function Damage(dmg) {
    hp -= dmg;
  }

  function moreHP() {
    return hp;
  }

  function moreMaxHP() {
    return maxHp;
  }

  function moreATK() {
    return atk;
  }

  return {
    attack,
    heal,
    upgrade,
    Damage,
    moreHP,
    moreMaxHP,
    moreATK,
    moreplayfruit,
  };
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

  // 몬스터가 피해를 입힐 때 출력할 난수
  let Monsterfruit = Math.floor(Math.random() * 4);

  switch (Monsterfruit) {
    case 1:
      console.log("사과입니다.");
      break;
    case 2:
      console.log("바나나입니다.");
      break;
    case 3:
      console.log("키위입니다.");
      break;
    default:
      console.log("아무것도 아닙니다.");
      break;
  }

  let serve; // 스테이지에 따라 이름에 붙는 조사 바꾸기
  if (s > 5) {
    serve = '이';
  } else {
    serve = '가';
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
  };
}

// 전투 상태를 표시하는 함수
function Status(s, p, m) {
  console.log(chalk.magentaBright(`\n=== Status ===`));
  console.log(`Stage: ${s}`);

  // 스테이지에 따른 스토리 출력
  if (s === 1) {
    console.log("6월 14일 일본 타마모노마에를 모시는 사당에 있던 타마모 제사용 방울 도난");
  } else if (s === 2) {
    console.log("7월 3일 프랑스에서 바위에 박혀있던 뒤란달 도난");
  } else if (s === 3) {
    console.log("7월 10일 미국 마들렌 대성당 마리아 막달레나 성녀의 유물 도난");
  } else if (s === 4) {
    console.log("7월 14일 영국에서 엑스칼리번 도난");
  } else if (s === 5) {
    console.log("도난당한 물건들의 역사에 비해 짧은 시간 사이에 사건이 연속적으로 발생.");
  } else if (s === 6) {
    console.log("방울로 종을 치면 이쁜소리가 날 줄 알았어요.");
  } else if (s === 7) {
    console.log("벽이 허전해 보였는데 장식해줬어요.");
  } else if (s === 8) {
    console.log("방울토마토에게 주고 남은거 뿌린거에요.");
  } else if (s === 9) {
    console.log("쌍검도 잃으셨는데 엑스칼리버라도 들고계셔야죠.");
  } else if (s === 10) {
    console.log("당신은 잔인한 사람이야.");
  }

  // 플레이어와 몬스터의 현재 체력 및 몬스터 이름 상태 출력
  console.log(`Player HP: ${p.moreHP()}/${p.moreMaxHP()}`);
  console.log(`${m.moreName()} HP: ${m.moreHP()}`);
  console.log(chalk.magentaBright(`===============\n`));
}

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
      console.log(chalk.red('게임을 종료합니다.'));
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
    let sc = await fight(s, p, m); // 전투 진행
    if (sc) {
      s++; // 스테이지 클리어 시 다음 스테이지로 진행
      p.upgrade(); // 플레이어 업그레이드
      console.log('10 스테이지 클리어');
    } else {
      console.log('게임 오버'); // 플레이어 사망 시 게임 종료
      break;
    }
    if (s >= 10) {
      console.log('당신은 알 수 없는 광기에 잡아먹혔습니다!'); // 스테이지 10 완료 시 출력
    }
  }
}