//#region Imports

import cpf from '../';

//#endregion

const unformatted = '61661605001';

describe('cpf Test', () => {
    it('should format cpf number', () => {
        const result = '616.616.050-01';

        const formatted = cpf(unformatted);
        expect(formatted).toBe(result);
    });
});
