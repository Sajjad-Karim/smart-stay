import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { ReduxProvider } from './store/Provider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SessionWrapper from './hooks/sessionWrapper';
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="318159427844-gjjv9jo5g0908eagsvlrnpgc8m2nm91i.apps.googleusercontent.com">
        <ReduxProvider>
          <SessionWrapper>
            <RouterProvider router={routes} />
          </SessionWrapper>
        </ReduxProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
