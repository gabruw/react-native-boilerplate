//#region Imports

import Roles from './Roles';

//#endregion

interface User {
    name?: string;
    roles?: Roles;
    email?: string;
}

export default User;
