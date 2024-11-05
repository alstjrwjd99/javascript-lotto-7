import WoowahanInput from "./woowahanInput.js";
import LottoStore from "./LottoStore.js";
import { GameOutput } from "./woowahanOutput.js";

class App {
  async run() {
    const lottoStore = new LottoStore();
    const buyMoney = await WoowahanInput.getBuyMoney();
    const lottoTicketCount = lottoStore.getLottoTicketCount(buyMoney);

    GameOutput.printLottoTicketCount(lottoTicketCount);

    const lottos = lottoStore.generateLottos();
    const winNumber = await WoowahanInput.getWinNumber();
    const bonusNumber = await WoowahanInput.getBonusNumber();

    GameOutput.printWinningStatistics();

    lottoStore.checkLotto(lottos, winNumber, bonusNumber);
    const earn = lottoStore.resultRankingAnnounce();

    GameOutput.printTotalReturn(earn, buyMoney);
  }
}

export default App;
