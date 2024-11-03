import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import WoowahanInput from "./woowahanInput.js";
import { buyMoneyValidator } from "./utils/validators.js";
import LottoStore from "./LottoStore.js";
import { GameOutput } from "./woowahanOutput.js";

class App {
  async run() {
    let input = 'start';
    const lottoStore = new LottoStore();
    const gameOutput = new GameOutput();

    while (!buyMoneyValidator(input)) {
      input = await WoowahanInput.getBuyMoney();
    }

    const countLotto = lottoStore.getLottoTicketCount(input);
    gameOutput.printLottoTicketCount(countLotto);

    const lottos = [];

    for (let i = 0; i < countLotto; i++) {
      const random = Random.pickUniqueNumbersInRange(1, 45, 6);
      random.sort((a, b) => a - b);
      const lotto = new Lotto(random);
      lottos.push(lotto);
      Console.print(`[${random.join(', ')}]`);
    }

    const winInput = await WoowahanInput.getWinNumber();
    const winNumber = winInput.split(',').map(Number);
    winNumber.forEach((number) => {
      if (number === isNaN) {
        Console.print('[ERROR] 당첨 번호는 유효한 숫자여야 합니다.');
      }
      if (!Number.isInteger(number)) {
        Console.print('[ERROR] 당첨 번호는 정수만 가능합니다.');
      }
      if (number < 0 || number > 45) {
        Console.print('[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자만 가능합니다.');
      }
    })

    const inputBonus = await WoowahanInput.getBonusNumber();
    const bonusNumber = Number(inputBonus);
    if (bonusNumber === isNaN) {
      Console.print('[ERROR] 당첨 번호는 유효한 숫자여야 합니다.');
    }
    if (!Number.isInteger(bonusNumber)) {
      Console.print('[ERROR] 당첨 번호는 정수만 가능합니다.');
    }
    if (bonusNumber < 0 || bonusNumber > 45) {
      Console.print('[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자만 가능합니다.');
    }

    Console.print('당첨통계\n---');
    const winRanking = Array(4).fill(0);
    let fiveEqualWithBonusCount = 0;

    function lottoCriteria(winNumber, bonusNumber, lottoNumber) {
      const matchCount = lottoNumber.filter(num => winNumber.includes(num)).length;
      const hasBonus = lottoNumber.includes(bonusNumber);

      if (matchCount === 6) {
        winRanking[3]++;
        return
      }
      if (matchCount === 5 && hasBonus) {
        fiveEqualWithBonusCount++;
        return
      }
      if (matchCount >= 3) {
        winRanking[matchCount - 3]++;
        return
      }
    }

    lottos.forEach((lotto) => {
      lottoCriteria(winNumber, bonusNumber, lotto.getNumbers());
    });

    const winPrize = [5000, 50000, 1500000, 2000000000];
    const bonusPrize = 30000000;
    let earn = 0;

    for (let n = 0; n < 4; n++) {
      Console.print(`${n + 3}개 일치 (${winPrize[n].toLocaleString()}원) - ${winRanking[n]}개`);
      earn += winRanking[n] * winPrize[n];
      if (n === 2) {
        Console.print(`5개 일치, 보너스 볼 일치 (${bonusPrize.toLocaleString()}원) - ${fiveEqualWithBonusCount}개`);
        earn += fiveEqualWithBonusCount * bonusPrize;
      }
    }

    Console.print(`총 수익률은 ${(earn / Number(input) * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
