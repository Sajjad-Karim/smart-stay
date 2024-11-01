import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ReduxProvider } from "./store/Provider";
function App() {
  return (
    <>
      <ReduxProvider>
        <RouterProvider router={routes} />
      </ReduxProvider>
    </>
  );
}

export default App;
