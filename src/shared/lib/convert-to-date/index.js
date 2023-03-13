import dayjs from "dayjs";
export function date(date) {
    return dayjs(date).locale('ru').format('D MMMM  YYYY')
}
