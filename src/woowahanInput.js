import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./utils/constants.js";
import { bonusNumberValidator, buyMoneyValidator, winInputValidator, winNumberValidator } from "./utils/validators.js";

export default class WoowahanInput {

    static async getBuyMoney() {
        let buyMoney = 0;

        while (true) {
            try {
                buyMoney = await Console.readLineAsync(`${MESSAGES.BUY_MONEY_INPUT}`);
                if (!buyMoneyValidator(buyMoney)) {
                    throw new Error('[ERROR] ');
                }   
                break;
            } catch (error) {}
        }

        return buyMoney;
    }

    static async getWinNumber() {
        let winNumber = [];

        while (true) {
            try {
                const winInput = await Console.readLineAsync(`${MESSAGES.WIN_NUMBER_INPUT}`);
                winNumber = winInput.split(',').map(Number);
                if (!winInputValidator(winNumber)) {
                    throw new Error('[ERROR] ');
                };

                if (winNumber.some((number) => !winNumberValidator(number))){
                    throw new Error('[ERROR] ');
                };

                break;
                    
            } catch (error) {}
            
        }

        return winNumber;
    }
    
    static async getBonusNumber() {
        let bonusNumber = 0;

        while (true) {
            try {
                const inputBonus = await Console.readLineAsync(`${MESSAGES.BONUS_NUMBER_INPUT}`);
                bonusNumber = Number(inputBonus);   
                if (!bonusNumberValidator(bonusNumber)) {
                    throw new Error('[ERROR] ');
                }
                break;
            } catch (error) {}
        }

        return bonusNumber;
    }
}