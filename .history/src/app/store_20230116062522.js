import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import usersReducer from "../features/user/userSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: usersReducer,
  },
  // middleware: (getDefauktMiddleware) => getDefauktMiddleware().concat(logger),
});

export default store;
