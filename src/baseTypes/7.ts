/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
    THURSDAY = 'thursday',
    FRIDAY = 'friday',
    SATURDAY = 'saturday',
    SUNDAY = 'sunday'
}

function isWeekend(weekDay: WeekDays): boolean {
    return weekDay === WeekDays.SUNDAY || weekDay === WeekDays.SATURDAY;
}

console.log(isWeekend(WeekDays.SUNDAY));