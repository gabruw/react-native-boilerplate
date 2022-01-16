//#region Imports

import date from '../';

//#endregion

describe('date Test', () => {
    it('should format date', () => {
        const unformatted = '16012021';
        const result = '16/01/2021';

        const formatted = date(unformatted);
        expect(formatted).toBe(result);
    });

    it('should format part of the date', () => {
        const unformatted = '160';
        const result = '16/0';

        const formatted = date(unformatted);
        expect(formatted).toBe(result);
    });
});
