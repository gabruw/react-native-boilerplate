import { Environment } from "@app/constants/environment";

const checkIfIsDevelopment = () => process.env.NODE_ENV === Environment.DEVELOPMENT;

export { checkIfIsDevelopment };
