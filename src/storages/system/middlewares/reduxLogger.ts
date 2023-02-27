import { Middleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { checkIfIsDevelopment } from "@app/functions/environments/checkIfIsDevelopment";

let reduxLogger: Middleware | undefined;

if (checkIfIsDevelopment()) {
    const logger = createLogger({
        level: "info",
    });

    reduxLogger = logger;
}

export { reduxLogger };
