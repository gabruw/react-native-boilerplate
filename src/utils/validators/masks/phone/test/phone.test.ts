//#region Imports

import phone from '../';

//#endregion

const unformatted = '3241154256';

describe('phone Test', () => {
    it('should format phone number', () => {
        const result = '(32) 4115-4256';

        const formatted = phone(unformatted);
        expect(formatted).toBe(result);
    });
});
