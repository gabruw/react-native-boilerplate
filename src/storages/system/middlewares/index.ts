import { Middleware } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";

import { reduxLogger } from "@app/storages/system/middlewares/reduxLogger";

const reduxMiddlewares: Middleware[] = [reduxThunk];
reduxLogger && reduxMiddlewares.push(reduxLogger);

export { reduxMiddlewares };
