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

    get y() {
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
}

const now = new Dately();
const bday = new Dately('10/31/1995');
const epoch = new Dately(1970, 1, 1, 0, 0, 0);

console.log(now._date.getDate());
console.log(now.year);
console.log(bday.y);
console.log(now.date);
console.log(now.mins);
console.log(now.hours);
console.log(now.day);
console.log(bday.month);
console.log(bday.mon);