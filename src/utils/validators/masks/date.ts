//#region Imports

import maxLength from './maxLength';
import onlyNumber from './onlyNumber';

//#endregion

const date = (value: string): string => {
    value = onlyNumber(value);
    value = maxLength(value, 8);

    if (value.length >= 5) {
        return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length >= 3) {
        return `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    return value;
};

export default date;
