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
    }
}

export const { isEmpty, isMinusNumber, isNotNumber, isWinOutOfRange } = validateInputBonusNumber;