
import chalk from 'chalk';

const messages = [
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

messages.forEach((message, index) => {
    setTimeout(() => {
        // 특정 메시지에 대해 색상 변경
        if (message === `"나는 사이코패스라고 한다."`) {
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