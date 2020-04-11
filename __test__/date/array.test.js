const DATE = require('../../src/date/index');

describe('date', () => {
    test('dayOfYear', () => {
        let now = new Date('2019/01/14');
        expect(DATE.dayOfYear(now)).toEqual(14);
    });
    test('formatDuration', () => {
        let ms = 10;
        expect(DATE.formatDuration(ms)).toEqual('10 milliseconds');
    });
    test('formatDuration', () => {
        let date = new Date('2019/12/12');
        let fmt = 'YY-mm-dd';
        expect(DATE.dateFormat(fmt,date)).toEqual('2019-12-12');
    });
});