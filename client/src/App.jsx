import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/store-context';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Auth from './utils/auth'

import { useStoreContext } from "./utils/store-context";
// import { THEME_TOGGLE } from "./utils/actions";
// import darkToggle from "./assets/images/dark-toggle.svg";


import './app.scss';

const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();
  
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const theme = useStoreContext("theme");
  // <div className={`body-theme__${theme.dark ? "dark" : "light"}`}>
  return (
    
    <ApolloProvider client={client}>
      <StoreProvider>
        <div id="app-shell">
          <Nav />
          {Auth.loggedIn() ? <Outlet /> : <Signup />}
        </div>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default App
