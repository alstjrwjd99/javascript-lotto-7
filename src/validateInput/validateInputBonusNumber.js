const validateInputBonusNumber = {
    isEmpty: (input) => {
        return input === '';
    },
    isNotNumber: (input) => {
        return !/^\d+$/.test(input);
    },
    isMinusNumber: (input) => {
        return Number(input) < 0;
    },
    isWinOutOfRange: (input) => {
        return Number(input) < 1 || Number(input) > 45;
    },
    isBonusNumberInWinNumber: (input, winNumber) => {
        return winNumber.includes(Number(input));
    }
}

export const { isEmpty, isMinusNumber, isNotNumber, isWinOutOfRange, isBonusNumberInWinNumber } = validateInputBonusNumber;