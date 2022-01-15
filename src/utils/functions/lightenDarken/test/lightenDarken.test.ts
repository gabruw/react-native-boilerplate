//#region Imports

import lightenDarken from '../';

//#endregion

const color = '#176444';

describe('lightenDarken Test', () => {
    it('should lighten the color', () => {
        const result = '#658775';
        const lighten = lightenDarken(0.15, color);

        expect(lighten).toBe(result);
    });

    it('should darken the color', () => {
        const result = '#155c3f';
        const darken = lightenDarken(-0.15, color);

        expect(darken).toBe(result);
    });
});
