//#region Imports

import { useCallback } from 'react';
import ENDPOINTS from 'services/endpoints';
import useAxios from 'services/useAxios';

//#endregion

const useFamilyService = () => {
    const { axios, requestState } = useAxios();

    const fetchNisCpf = useCallback(() => axios.get(ENDPOINTS.FAMILY.NIS_CPF), [axios]);

    return {
        fetchNisCpf,
        requestState
    };
};

export default useFamilyService;
