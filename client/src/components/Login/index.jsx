import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from '../../utils/mutations'
import Auth from '../../utils/auth';

import './style.scss';

export default function Login() {
    const [login, { loading }] = useMutation(LOGIN_MUTATION);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (evt) => {
        evt.preventDefault();

        try {
            const { data } = await login({
                variables: { email, password }
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form id="login-form" onSubmit={loginHandler}>
            <div>
                <label htmlFor="login-form-email">email</label>
                <input id="login-form-email" type="text" onChange={(evt) => setEmail(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="login-form-password">password</label>
                <input id="login-form-password" type="password" onChange={(evt) => setPassword(evt.target.value)} />
            </div>
            <div>
                <button type="submit" disabled={loading}>login</button>
            </div>
        </form>
    );
}