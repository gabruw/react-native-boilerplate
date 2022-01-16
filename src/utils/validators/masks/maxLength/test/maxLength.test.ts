//#region Imports

import maxLength from '../';

//#endregion

const unformatted = '0123456789';

describe('maxLength Test', () => {
    it('should format max length', () => {
        const result = '012';

        const formatted = maxLength(unformatted, 3);
        expect(formatted).toBe(result);
    });
});
