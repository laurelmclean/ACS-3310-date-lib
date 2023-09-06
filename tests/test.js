const Dately = require('../src/index.js');

describe('Dately', () => {
    it('should create a Dately instance with the current date if no arguments are provided', () => {
        const now = new Dately();
        const currentDate = new Date();
        expect(now.year).toBe(currentDate.getFullYear());
        expect(now.date).toBe(currentDate.getDate());
        expect(now.hours).toBe(currentDate.getHours());
    });

    it('should create a Dately instance with the specified date', () => {
        const customDate = new Dately(2023, 9, 30);
        expect(customDate.year).toBe(2023);
        expect(customDate.date).toBe(30);
        expect(customDate.month).toBe('October');
        expect(customDate.dy).toBe('Mon');
    });

    it('should correctly get the year', () => {
        const customDate = new Dately(2023, 9, 30);
        expect(customDate.year).toBe(2023);
    });

    it('should correctly get the last two digits of the year', () => {
        const customDate = new Dately(2023, 9, 30);
        expect(customDate.yr).toBe(23);
    });

    it('should format the date with the default mask', () => {
        const customDate = new Dately(2023, 9, 30);
        const formattedDate = customDate.format();
        expect(formattedDate).toBe('2023 October 30');
    });

    it('should format the date with a custom mask', () => {
        const customDate = new Dately(2023, 9, 30, 2, 20, 5);
        expect(customDate.format('y/m/d')).toBe('23/Oct/30');
        expect(customDate.format('H:I:S')).toBe('02:20:05');
        expect(customDate.format('Y-M-D h:I:S')).toBe('2023-October-30 2:20:05');
        expect(customDate.format('M #, Y')).toBe('October 30th, 2023');
        expect(customDate.format('L, M d, Y')).toBe('Monday, October 30, 2023');
    });

    it('should return "That is today!" if the date is the same as the current date', () => {
        const now = new Dately();
        const result = now.when();
        expect(result).toBe('That is today!');
    });

    test('should calculate the correct difference when given a past date', () => {
        const bday = new Dately('03/02/1990');
        expect(bday.when()).toContain('ago');
    });

    test('should calculate the correct difference when given a future date', () => {
        const futureDate = new Dately('03/02/2024');
        expect(futureDate.when()).toContain('from now');
    });
});
