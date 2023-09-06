const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const monthsAbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const daysAbrv = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

/**
 * Represents a utility class for working with dates and formatting them.
 */

class Dately {
    /**
     * Creates a new Dately instance.
     * @param {...*} args - Arguments to initialize the date.
     */
	constructor(...args) {
		this._date = new Date(...args);
	}

    // Getters
    /**
     * Get the year of the date.
     * @returns {number} - The year.
     */
    get year() {
        return this._date.getFullYear();
    }

    /**
     * Get the last two digits of the year.
     * @returns {number} - The year in two digits.
     */
    get yr() {
        return this._date.getFullYear() % 100;
    }

    /**
     * Get the day of the month.
     * @returns {number} - The day of the month.
     */
    get date() {
        return this._date.getDate();
    }

    /**
     * Get the hours of the time.
     * @returns {number} - The hours.
     */
    get hours() {
        return this._date.getHours();
    }

    /**
     * Get the hours of the time.
     * @returns {number} - The hours.
     */
    get mins() {
        return this._date.getMinutes();
    }

    /**
    * Get the seconds of the time.
    * @returns {number} - The seconds.
    */
    get secs() {
        return this._date.getSeconds();
    }

    /**
     * Get the full name of the day of the week.
     * @returns {string} - The full day name.
     */
    get day() {
        return days[this._date.getDay()];
    }

    /**
     * Get the abbreviated name of the day of the week.
     * @returns {string} - The abbreviated day name.
     */
    get dy() {
        return daysAbrv[this._date.getDay()];
    }

    /**
     * Get the full name of the month.
     * @returns {string} - The full month name.
     */
    get month() {
        return months[this._date.getMonth()];
    }

    /**
     * Get the abbreviated name of the month.
     * @returns {string} - The abbreviated month name.
     */
    get mon() {
        return monthsAbrv[this._date.getMonth()];
    }

    /**
     * Get the ordinal representation of the day (e.g., "1st", "2nd", "3rd", "4th").
     * @returns {string} - The ordinal representation.
     */
    get ordinal() {
        const day = this._date.getDate();

        if (day === 11 || 12 || 13) {
            return day + 'th';
        }

        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
                return day + 'st';
            case 2:
                return day + 'nd';
            case 3:
                return day + 'rd';
            default:
                return day + 'th';
        }
    }

    // Format

    /**
     * Format the date using a mask.
     * @param {string} [mask='Y M D'] - The format mask.
     * @returns {string} - The formatted date string.
     */
    format(mask = 'Y M D') {
        const dateStr = mask.split('').map(char => {
            switch (char) {
                case 'Y':
                    return this.year
                case 'y':
                    return this.yr
                case 'M':
                    return this.month
                case 'm':
                    return this.mon
                case 'D':
                    return this.date.toString().padStart(2, '0')
                case 'd':
                    return this.date
                case '#':
                    return this.ordinal
                case 'L':
                    return this.day
                case 'l':
                    return this.dy
                case 'H':
                    return this.hours.toString().padStart(2, '0')
                case 'h':
                    return this.hours
                case 'I':
                    return this.mins.toString().padStart(2, '0')
                case 'i':
                    return this.mins
                case 'S':
                    return this.secs.toString().padStart(2, '0')
                case 's':
                    return this.secs
                default:
                    return char
            }
        }).join('')
        return dateStr
    }

    // When

    /**
     * Calculate the relative time difference from the current date.
     * @returns {string} - A string describing the time difference.
     */
    when() {
        const now = new Date();
        const diff = now - this._date;
        const seconds = diff / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const months = days / 30;
        const years = days / 365.25;

        if (Math.abs(years) > 1) {
            return `${Math.floor(years)} ${Math.floor(years) === 1 ? 'year' : 'years'} ${ years > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(months) > 1) {
            return `${Math.floor(months)} ${Math.floor(months) === 1 ? 'month' : 'months'} ${months > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(days) > 1) {
            return `${Math.floor(days)} ${Math.floor(days) === 1 ? 'day' : 'days'} ${days > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(hours) > 1) {
            return `${Math.floor(hours)} ${Math.floor(hours) === 1 ? 'hour' : 'hours'} ${hours > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(minutes) > 1) {
            return `${Math.floor(minutes)} ${Math.floor(minutes) === 1 ? 'minute' : 'minutes'} ${minutes > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(seconds) > 1) {
            return `${Math.floor(seconds)} ${Math.floor(seconds) === 1 ? 'seconds' : 'seconds'} ${seconds > 0 ? 'ago' : 'from now'}`;
        } else if (Math.abs(seconds) < 1) {
            return 'That is today!';
        }

    }
}
