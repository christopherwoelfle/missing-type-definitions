/**
 * Represents a property of a `DateTime`.
 */
interface DateTimeProperty {
    /**
     * Gets the value of this property from the specified `DateTime`.
     *
     * @param dateTime - The `DateTime` to get the value from.
     * @returns The value of this property.
     */
    get(dateTime: DateTime): number;

    /**
     * Returns a new `DateTime` with this field set to the maximum value for this field.
     *
     * @returns The new `DateTime`
     */
    withMaximumValue(): DateTime;

    /**
     * Returns a new `DateTime` with this field set to the minimum value for this field.
     *
     * @returns The new `DateTime`
     */
    withMinimumValue(): DateTime;
}

/**
 * Typings for Joda DateTime class
 */
declare class DateTime {
    /**
     * Creates a new instance of `DateTime` with the current date and time.
     */
    constructor();

    /**
     * Constructs a `DateTime` with the specified millis of instant.
     * @param millis The number of milliseconds since the epoch (1970-01-01T00:00:00Z).
     */
    constructor(millis: number);

    /**
     * Constructs a `DateTime` from another `DateTime`.
     * @param dateTime A DateTime object.
     */
    constructor(dateTime: DateTime);

    /**
     * Creates a new instance of `DateTime` with the specified date and time.
     *
     * @param year - The year.
     * @param monthOfYear - The month of the year (1-12).
     * @param dayOfMonth - The day of the month (1-31).
     */
    constructor(year: number, monthOfYear: number, dayOfMonth: number);

    /**
     * Creates a new instance of `DateTime` with the specified date and time.
     *
     * @param year - The year.
     * @param monthOfYear - The month of the year (1-12).
     * @param dayOfMonth - The day of the month (1-31).
     * @param hourOfDay - The hour of the day (0-23).
     * @param minuteOfHour - The minute of the hour (0-59).
     */
    constructor(year: number, monthOfYear: number, dayOfMonth: number, hourOfDay: number, minuteOfHour: number);

    /**
     * Creates a new instance of `DateTime` with the specified date and time.
     *
     * @param year - The year.
     * @param monthOfYear - The month of the year (1-12).
     * @param dayOfMonth - The day of the month (1-31).
     * @param hourOfDay - The hour of the day (0-23).
     * @param minuteOfHour - The minute of the hour (0-59).
     * @param secondOfMinute - The second of the minute (0-59).
     */
    constructor(
        year: number,
        monthOfYear: number,
        dayOfMonth: number,
        hourOfDay: number,
        minuteOfHour: number,
        secondOfMinute: number
    );

    /**
     * Creates a new instance of `DateTime` with the specified date and time.
     *
     * @param year - The year.
     * @param monthOfYear - The month of the year (1-12).
     * @param dayOfMonth - The day of the month (1-31).
     * @param hourOfDay - The hour of the day (0-23).
     * @param minuteOfHour - The minute of the hour (0-59).
     * @param secondOfMinute - The second of the minute (0-59).
     * @param millisOfSecond - The millisecond of the second (0-999).
     */
    constructor(
        year: number,
        monthOfYear: number,
        dayOfMonth: number,
        hourOfDay: number,
        minuteOfHour: number,
        secondOfMinute: number,
        millisOfSecond: number
    );

    /**
     * Gets the day of the month represented by this `DateTime`.
     *
     * @returns The day of the month (1-31).
     */
    getDayOfMonth(): number;

    /**
     * Is this `DateTime` after the `DateTime` passed in comparing solely by millisecond.
     * 
     * @param dateTime `DateTime` to be compared to.
     * @returns True if this `DateTime` is after the passed in `DateTime`, otherwise false.
     */
    isAfter(dateTime: DateTime): boolean


    /**
     * Is this `DateTime` before the `DateTime` passed in comparing solely by millisecond.
     * 
     * @param dateTime `DateTime` to be compared to.
     * @returns True if this `DateTime` is before the passed in `DateTime`, otherwise false.
     */
    isBefore(dateTime: DateTime): boolean

    /**
     * Is this `DateTime` equal to the `DateTime` passed in comparing solely by millisecond.
     * 
     * @param dateTime `DateTime` to be compared to.
     * @returns True if this `DateTime` is equal to the passed in `DateTime`, otherwise false.
     */
    isEqual(dateTime: DateTime): boolean

    /**
     * Gets the day of the month property represented by this `DateTime`.
     *
     * @returns The day of the month property.
     */
    dayOfMonth(): DateTimeProperty;

    /**
     * Gets the day of the week represented by this `DateTime`.
     *
     * @returns The day of the week (1-7, where 1 represents Monday and 7 represents Sunday).
     */
    getDayOfWeek(): number;

    /**
     * Gets the day of the week property represented by this `DateTime`.
     *
     * @returns The day of the week property.
     */
    dayOfWeek(): DateTimeProperty;

    /**
     * Gets the day of the year represented by this `DateTime`.
     *
     * @returns The day of the year (1-365 or 1-366 for leap years).
     */
    getDayOfYear(): number;

    /**
     * Gets the day of the year property represented by this `DateTime`.
     *
     * @returns The day of the year property.
     */
    dayOfYear(): DateTimeProperty;

    /**
     * Gets the hour of the day represented by this `DateTime`.
     *
     * @returns The hour of the day (0-23).
     */
    getHourOfDay(): number;

    /**
     * Gets the hour of the day property represented by this `DateTime`.
     *
     * @returns The hour of the day property.
     */
    hourOfDay(): DateTimeProperty;

    /**
     * Gets the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z) represented by this `DateTime`.
     *
     * @returns The number of milliseconds since the Unix epoch.
     */
    getMillis(): number;

    /**
     * Gets the minute of the hour represented by this `DateTime`.
     *
     * @returns The minute of the hour (0-59).
     */
    getMinuteOfHour(): number;

    /**
     * Gets the minute of the hour property represented by this `DateTime`.
     *
     * @returns The minute of the hour property.
     */
    minuteOfHour(): DateTimeProperty;

    /**
     * Gets the month of the year represented by this `DateTime`.
     *
     * @returns The month of the year (1-12).
     */
    getMonthOfYear(): number;

    /**
     * Gets the month of the year property represented by this `DateTime`.
     *
     * @returns The month of the year property.
     */
    monthOfYear(): DateTimeProperty;

    /**
     * Gets the second of the minute represented by this `DateTime`.
     *
     * @returns The second of the minute (0-59).
     */
    getSecondOfMinute(): number;

    /**
     * Gets the second of the minute property represented by this `DateTime`.
     *
     * @returns The second of the minute property.
     */
    secondOfMinute(): DateTimeProperty;

    /**
     * Gets the year represented by this `DateTime`.
     *
     * @returns The year.
     */
    getYear(): number;

    /**
     * Gets the year property represented by this `DateTime`.
     *
     * @returns The year property.
     */
    year(): DateTimeProperty;

    /**
     * Returns a new `DateTime` that is `days` days earlier than this `DateTime`.
     *
     * @param days - The number of days to subtract.
     * @returns A new `DateTime` that is `days` days earlier than this `DateTime`.
     */
    minusDays(days: number): DateTime;

    /**
     * Returns a new `DateTime` that is `hours` hours earlier than this `DateTime`.
     *
     * @param hours - The number of hours to subtract.
     * @returns A new `DateTime` that is `hours` hours earlier than this `DateTime`.
     */
    minusHours(hours: number): DateTime;

    /**
     * Returns a new `DateTime` that is `millis` milliseconds earlier than this `DateTime`.
     *
     * @param millis - The number of milliseconds to subtract.
     * @returns A new `DateTime` that is `millis` milliseconds earlier than this `DateTime`.
     */
    minusMillis(millis: number): DateTime;

    /**
     * Returns a new `DateTime` that is `minutes` minutes earlier than this `DateTime`.
     *
     * @param minutes - The number of minutes to subtract.
     * @returns A new `DateTime` that is `minutes` minutes earlier than this `DateTime`.
     */
    minusMinutes(minutes: number): DateTime;

    /**
     * Returns a new `DateTime` that is `months` months earlier than this `DateTime`.
     *
     * @param months - The number of months to subtract.
     * @returns A new `DateTime` that is `months` months earlier than this `DateTime`.
     */
    minusMonths(months: number): DateTime;

    /**
     * Returns a new `DateTime` that is `seconds` seconds earlier than this `DateTime`.
     *
     * @param seconds - The number of seconds to subtract.
     * @returns A new `DateTime` that is `seconds` seconds earlier than this `DateTime`.
     */
    minusSeconds(seconds: number): DateTime;

    /**
     * Returns a new `DateTime` that is `weeks` weeks earlier than this `DateTime`.
     *
     * @param weeks - The number of weeks to subtract.
     * @returns A new `DateTime` that is `weeks` weeks earlier than this `DateTime`.
     */
    minusWeeks(weeks: number): DateTime;

    /**
     * Returns a new `DateTime` that is `years` years earlier than this `DateTime`.
     *
     * @param years - The number of years to subtract.
     * @returns A new `DateTime` that is `years` years earlier than this `DateTime`.
     */
    minusYears(years: number): DateTime;

    /**
     * Returns a new `DateTime` that is `days` days later than this `DateTime`.
     *
     * @param days - The number of days to add.
     * @returns A new `DateTime` that is `days` days later than this `DateTime`.
     */
    plusDays(days: number): DateTime;

    /**
     * Returns a new `DateTime` that is `hours` hours later than this `DateTime`.
     *
     * @param hours - The number of hours to add.
     * @returns A new `DateTime` that is `hours` hours later than this `DateTime`.
     */
    plusHours(hours: number): DateTime;

    /**
     * Returns a new `DateTime` that is `millis` milliseconds later than this `DateTime`.
     *
     * @param millis - The number of milliseconds to add.
     * @returns A new `DateTime` that is `millis` milliseconds later than this `DateTime`.
     */
    plusMillis(millis: number): DateTime;

    /**
     * Returns a new `DateTime` that is `minutes` minutes later than this `DateTime`.
     *
     * @param minutes - The number of minutes to add.
     * @returns A new `DateTime` that is `minutes` minutes later than this `DateTime`.
     */
    plusMinutes(minutes: number): DateTime;

    /**
     * Returns a new `DateTime` that is `months` months later than this `DateTime`.
     *
     * @param months - The number of months to add.
     * @returns A new `DateTime` that is `months` months later than this `DateTime`.
     */
    plusMonths(months: number): DateTime;

    /**
     * Returns a new `DateTime` that is `seconds` seconds later than this `DateTime`.
     *
     * @param seconds - The number of seconds to add.
     * @returns A new `DateTime` that is `seconds` seconds later than this `DateTime`.
     */
    plusSeconds(seconds: number): DateTime;

    /**
     * Returns a new `DateTime` that is `weeks` weeks later than this `DateTime`.
     *
     * @param weeks - The number of weeks to add.
     * @returns A new `DateTime` that is `weeks` weeks later than this `DateTime`.
     */
    plusWeeks(weeks: number): DateTime;

    /**
     * Returns a new `DateTime` that is `years` years later than this `DateTime`.
     *
     * @param years - The number of years to add.
     * @returns A new `DateTime` that is `years` years later than this `DateTime`.
     */
    plusYears(years: number): DateTime;

    /**
     * Returns a new `DateTime` with the day of the month set to the specified value.
     *
     * @param dayOfMonth - The new day of the month (1-31).
     * @returns A new `DateTime` with the day of the month set to the specified value.
     */
    withDayOfMonth(dayOfMonth: number): DateTime;

    /**
     * Returns a new `DateTime` with the day of the week set to the specified value.
     *
     * @param dayOfWeek - The new day of the week (1-7, where 1 represents Monday and 7 represents Sunday).
     * @returns A new `DateTime` with the day of the week set to the specified value.
     */
    withDayOfWeek(dayOfWeek: number): DateTime;

    /**
     * Returns a new `DateTime` with the day of the year set to the specified value.
     *
     * @param dayOfYear - The new day of the year (1-365 or 1-366 for leap years).
     * @returns A new `DateTime` with the day of the year set to the specified value.
     */
    withDayOfYear(dayOfYear: number): DateTime;

    /**
     * Returns a new `DateTime` with the hour of the day set to the specified value.
     *
     * @param hourOfDay - The new hour of the day (0-23).
     * @returns A new `DateTime` with the hour of the day set to the specified value.
     */
    withHourOfDay(hourOfDay: number): DateTime;

    /**
     * Returns a new `DateTime` with the millisecond of the second set to the specified value.
     *
     * @param millisOfSecond - The new millisecond of the second (0-999).
     * @returns A new `DateTime` with the millisecond of the second set to the specified value.
     */
    withMillisOfSecond(millisOfSecond: number): DateTime;

    /**
     * Returns a new `DateTime` with the minute of the hour set to the specified value.
     *
     * @param minuteOfHour - The new minute of the hour (0-59).
     * @returns A new `DateTime` with the minute of the hour set to the specified value.
     */
    withMinuteOfHour(minuteOfHour: number): DateTime;

    /**
     * Returns a new `DateTime` with the month of the year set to the specified value.
     *
     * @param monthOfYear - The new month of the year (1-12).
     * @returns A new `DateTime` with the month of the year set to the specified value.
     */
    withMonthOfYear(monthOfYear: number): DateTime;

    /**
     * Returns a new `DateTime` with the second of the minute set to the specified value.
     *
     * @param secondOfMinute - The new second of the minute (0-59).
     * @returns A new `DateTime` with the second of the minute set to the specified value.
     */
    withSecondOfMinute(secondOfMinute: number): DateTime;

    /**
     * Returns a new `DateTime` with the time set to the start of the day.
     * @return A new `DateTime` with the time set to the start of the day.
     */
    withTimeAtStartOfDay(): DateTime;

    /**
     * Returns a new `DateTime` with the year set to the specified value.
     *
     * @param year - The new year.
     * @returns A new `DateTime` with the year set to the specified value.
     */
    withYear(year: number): DateTime;

    /**
     * Output the `DateTime` as string using the specified format pattern.
     * @param format
     */
    toString(format: string): string;
}
