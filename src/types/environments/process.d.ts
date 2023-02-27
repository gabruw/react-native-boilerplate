import { Environment } from "@app/constants/environment";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TZ?: string;
            NODE_ENV: Environment;
        }
    }
}
