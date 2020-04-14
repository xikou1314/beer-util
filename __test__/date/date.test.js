const DATE = require('../../src/date/index');

describe('date', () => {
    test('dayOfYear', () => {
        let now = new Date('2019/01/14');
        expect(DATE.dayOfYear(now)).toEqual(14);
    });
    test('formatDurationGreater0', () => {
        let ms = 10;
        expect(DATE.formatDuration(ms)).toEqual('10 milliseconds');
    });
    test('formatDurationless0', () => {
        let ms = -10;
        expect(DATE.formatDuration(ms)).toEqual('10 milliseconds');
    });
    test('dateFormat YY-mm-dd', () => {
        let date = new Date('2019/12/12');
        let fmt = 'YY-mm-dd';
        expect(DATE.dateFormat(fmt,date)).toEqual('2019-12-12');
    });

    test('dateFormat Y-m-d', () => {
        let date = new Date('2019/12/12');
        let fmt = 'Y-m-d';
        expect(DATE.dateFormat(fmt,date)).toEqual('2019-12-12');
    });

    test('dateFormat Y-m-d : H-M-S', () => {
        let date = new Date('2019/12/12');
        let fmt = 'Y-m-d : H-M-S';
        expect(DATE.dateFormat(fmt,date)).toEqual('2019-12-12 : 0-0-0');
    });
});