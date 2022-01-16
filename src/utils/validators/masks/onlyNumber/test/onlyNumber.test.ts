//#region Imports

import onlyNumber from '../';

//#endregion

const unformatted = 'A1B2C3D4E5';

describe('onlyNumber Test', () => {
    it('should only keep the numbers', () => {
        const result = '12345';

        const formatted = onlyNumber(unformatted);
        expect(formatted).toBe(result);
    });
});
