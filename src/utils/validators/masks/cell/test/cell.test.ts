//#region Imports

import cell from '../';

//#endregion

const unformatted = '32941154256';

describe('cell Test', () => {
    it('should format cell number', () => {
        const result = '(32) 9 4115-4256';

        const formatted = cell(unformatted);
        expect(formatted).toBe(result);
    });
});
