const validateInputMoney = {
    isEmpty: (input) => {
        return input === '';
    },
    isNotNumber: (input) => {
        return !/^\d+$/.test(input);
    },
    isMinusNumber: (input) => {
        return Number(input) < 0;
    },
    isEndWith1000: (input) => {
        return Number(input) % 1000 === 0;
    }
}

export const { isEmpty, isEndWith1000, isMinusNumber, isNotNumber } = validateInputMoney;