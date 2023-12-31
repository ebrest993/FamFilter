import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { StoreProvider } from './utils/store-context';
import About from './pages/About'
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from './utils/auth'

import { useStoreContext } from "./utils/store-context";

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
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <div>
          <Nav />
            {Auth.loggedIn() ? <Outlet /> : <Login />}
        </div>
        {!Auth.loggedIn() && (
          <div class="split-line">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
        </div>)}
        {Auth.loggedIn() ? <null /> : <Signup />}
      </StoreProvider>
    </ApolloProvider>
  )
}

export default App
