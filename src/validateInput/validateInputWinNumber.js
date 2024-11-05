const validateInputWinNumber = {
    isWinEmpty: (input) => {
        return input === '';
    },
    isWinNotNumber: (input) => {
        return !/^\d+$/.test(input);
    },
    isWinMinusNumber: (input) => {
        return Number(input) < 0;
    },
    isWinOutOfRange: (input) => {
        return Number(input) < 1 || Number(input) > 45;
    }
}

export const { isWinEmpty, isWinMinusNumber, isWinNotNumber, isWinOutOfRange } = validateInputWinNumber;