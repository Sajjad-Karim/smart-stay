import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: rootReducers,
});
export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
