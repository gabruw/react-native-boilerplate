//#region Imports

import maxLength from '../maxLength';
import onlyNumber from '../onlyNumber';

//#endregion

const phone = (value: string): string => {
    value = onlyNumber(value);
    value = maxLength(value, 10);

    value = value.replace(/^(\d{2})(\d{1})/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
};

export default phone;
