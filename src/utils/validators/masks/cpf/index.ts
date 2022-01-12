//#region Imports

import maxLength from '../maxLength';
import onlyNumber from '../onlyNumber';

//#endregion

const cpf = (value: string): string => {
    value = onlyNumber(value);
    value = maxLength(value, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return value;
};

export default cpf;
