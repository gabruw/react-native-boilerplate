//#region Imports

import cep from '../';

//#endregion

const unformatted = '55184639';

describe('cep Test', () => {
    it('should format cep number', () => {
        const result = '55184-639';

        const formatted = cep(unformatted);
        expect(formatted).toBe(result);
    });
});
