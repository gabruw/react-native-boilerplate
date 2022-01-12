//#region Imports

import maxLength from '../maxLength';
import onlyNumber from '../onlyNumber';

//#endregion

const cep = (value: string): string => {
    value = onlyNumber(value);
    value = maxLength(value, 8);
    value = value.replace(/^(\d{5})(\d)/g, '$1-$2');

    return value;
};

export default cep;
