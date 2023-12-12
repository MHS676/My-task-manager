// _app.js or _app.tsx
import { Provider } from 'react-redux';
import { store } from '../path-to-your-store'; // Adjust the path accordingly
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <App />
    </Provider>
  );
}

export default MyApp;

