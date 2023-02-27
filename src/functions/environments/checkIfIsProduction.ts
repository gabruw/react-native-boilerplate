import { Environment } from "@app/constants/environment";

const checkIfIsProduction = () => process.env.NODE_ENV === Environment.PRODUCTION;

export { checkIfIsProduction };
