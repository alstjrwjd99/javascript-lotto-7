import LottoStore from "../LottoStore.js";
import { isBonusNumberInWinNumber } from "../validateInput/validateInputBonusNumber.js";
import { isEmpty, isMinusNumber, isNotNumber, isEndWith1000 } from "../validateInput/validateInputMoney.js";
import { isWinEmpty, isWinMinusNumber, isWinNotNumber, isWinOutOfRange } from "../validateInput/validateInputWinNumber.js";
import { BonusNumberOutput, BuyMoneyOutput, WinInputOutput, WinNumberOutput } from "../woowahanOutput.js";

function checkCondition(conditions) {
    for (const condition of conditions) {
        if (condition.check()) {
            condition.action();
            return false;
        }
    }
    return true;
}

const buyMoneyValidator = (input) => {
    const output = new BuyMoneyOutput();

    const conditions = [
        { check: () => isEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => !isEndWith1000(input), action: () => output.printEndWith1000() }
    ];

    return checkCondition(conditions);
};

const winInputValidator = (input) => {
    const output = new WinInputOutput();
    const lottoStore = LottoStore.getInstance();
    lottoStore.setWinNumber(input);

    const conditions = [
        { check: () => input.length !== 6, action: () => output.printCountNotSix() },
        { check: () => new Set(input).size !== 6, action: () => output.printDuplicatedNumber() },
    ];

    return checkCondition(conditions);
};

const winNumberValidator = (input) => {
    const output = new WinNumberOutput();

    const conditions = [
        { check: () => isWinEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isWinNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isWinMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => isWinOutOfRange(input), action: () => output.printOutOfRange() }
    ];

    return checkCondition(conditions);
};

const bonusNumberValidator = (input) => {
    const output = new BonusNumberOutput();
    const winNumber = LottoStore.getInstance().getWinNumber();

    const conditions = [
        { check: () => isWinEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isWinNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isWinMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => isWinOutOfRange(input), action: () => output.printOutOfRange() },
        { check: () => isBonusNumberInWinNumber(input, winNumber), action: () => output.printNotInWinNumber() }
    ];

    return checkCondition(conditions);
};

export { buyMoneyValidator, winNumberValidator, winInputValidator, bonusNumberValidator };