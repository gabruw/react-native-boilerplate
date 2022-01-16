//#region Imports

import lightenDarken from '../';

//#endregion

const hexColor = '#176444';
const rgbColor = 'rgb(23, 100, 68)';

describe('lightenDarken Test', () => {
    it('should lighten a hex color', () => {
        const result = '#658775';
        const lighten = lightenDarken(0.15, hexColor);

        expect(lighten).toBe(result);
    });

    it('should darken a hex color', () => {
        const result = '#155c3f';
        const darken = lightenDarken(-0.15, hexColor);

        expect(darken).toBe(result);
    });

    it('should lighten a rgb color', () => {
        const result = 'rgb(101,135,117)';
        const lighten = lightenDarken(0.15, rgbColor);

        expect(lighten).toBe(result);
    });

    it('should darken a rgb color', () => {
        const result = 'rgb(21,92,63)';
        const darken = lightenDarken(-0.15, rgbColor);

        expect(darken).toBe(result);
    });

    it('should darken a rgb color and parse to hex color', () => {
        const result = '#155c3f';
        const darken = lightenDarken(-0.15, rgbColor, 'c');

        expect(darken).toBe(result);
    });

    it('should darken as a linear color', () => {
        const result = '#14553a';
        const darken = lightenDarken(-0.15, hexColor, false, true);

        expect(darken).toBe(result);
    });

    it('should not darken a color with percent bigger than 1', () => {
        const result = '#FFFFFF';
        const darken = lightenDarken(1.5, hexColor);

        expect(darken).toBe(result);
    });

    it('should not darken a color with percent smaller than 1', () => {
        const result = '#FFFFFF';
        const darken = lightenDarken(-1.5, hexColor);

        expect(darken).toBe(result);
    });

    it('should not darken a color with invalid hex format', () => {
        const result = '#FFFFFF';
        const darken = lightenDarken(0.15, 'FFFFFF');

        expect(darken).toBe(result);
    });

    it('should not darken a color with invalid rgb format', () => {
        const result = '#FFFFFF';
        const darken = lightenDarken(0.15, 'gb(255, 255, 255)');

        expect(darken).toBe(result);
    });
});
