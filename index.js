const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const monthsAbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const daysAbrv = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

class Dately {
	constructor(...args) {
		this._date = new Date(...args);
	}

    // Getters
    get year() {
        return this._date.getFullYear();
    }

    get yr() {
        return this._date.getFullYear() % 100;
    }

    get date() {
        return this._date.getDate();
    }

    get hours() {
        return this._date.getHours();
    }

    get mins() {
        return this._date.getMinutes();
    }

    get secs() {
        return this._date.getSeconds();
    }

    get day() {
        return days[this._date.getDay()];
    }

    get dy() {
        return daysAbrv[this._date.getDay()];
    }

    get month() {
        return months[this._date.getMonth()];
    }

    get mon() {
        return monthsAbrv[this._date.getMonth()];
    }

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

const now = new Dately();
const bday = new Dately(2023, 9, 30);
const epoch = new Dately(1970, 1, 1, 0, 0, 0);

console.log(now._date.getDate());
console.log(now.year);
console.log(bday.yr);
console.log(now.date);
console.log(now.mins);
console.log(now.hours);
console.log(now.day);
console.log(bday.month);
console.log(bday.mon);
console.log(bday.ordinal);

console.log(now.format())
console.log(bday.format('L m-d-y # H:I:S'))
console.log(bday.when())