const CONSTANT = Object.freeze({
    WINNING_STATISTICS: '당첨통계\n---',
})

const SUBJECT = Object.freeze({
    BUY_MONEY: '구입 금액은 ',
    WIN_NUMBER: '당첨 번호는 ',
    BONUS_NUMBER: '보너스 번호는 ',
})

const MESSAGES = Object.freeze({
    BUY_MONEY_INPUT: '구입금액을 입력해 주세요\n',
    WIN_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
})

const ERROR = Object.freeze({
    IS_NULL: '빈 값은 입력될 수 없습니다.',
    NOT_NUMBER: '숫자만 입력해주세요.',
    INVALID: '유효한 숫자여야 합니다.',
    MINUS: '양수만 입력해주세요.',
    END_WITH_1000: '1000원 단위입니다.',
    OUT_OF_RANGE: '1 ~ 45 사이의 숫자만 가능합니다.',
    IS_NOT_SIX: '개수가 6개입니다.',
    IS_DUPLICATED: '중복된 숫자가 없습니다.',
    IS_IN_WIN_NUMBER: '당첨번호에 있으면 안됩니다.',
})

export { CONSTANT, MESSAGES, ERROR, SUBJECT };