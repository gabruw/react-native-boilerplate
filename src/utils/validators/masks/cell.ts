//#region Imports

import maxLength from './maxLength';
import onlyNumber from './onlyNumber';

//#endregion

const cell = (value: string): string => {
    value = onlyNumber(value);
    value = maxLength(value, 11);

    value = value.replace(/^(\d{2})(\d)(\d{1})/g, '($1) $2 $3');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
};

export default cell;
