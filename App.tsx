import { AuthProvider } from './src/routes/context/AuthContext';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Routes from './src/routes/Routes'


export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}
