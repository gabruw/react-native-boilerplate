//#region Imports

import { useCallback } from 'react';
import ENDPOINTS from 'services/axios/endpoints';
import useAxios from 'services/axios/useAxios';

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
