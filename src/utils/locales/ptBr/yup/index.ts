//#region Imports

import array from './array.json';
import date from './date.json';
import mixed from './mixed.json';
import number from './number.json';
import string from './string.json';

//#endregion

const YupLocales = {
    ...date,
    ...array,
    ...mixed,
    ...string,
    ...number
};

export default YupLocales;
