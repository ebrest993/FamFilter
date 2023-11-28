import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SIGNIN_MUTATION } from '../../utils/mutations';
import Auth from '../../utils/auth';

import './style.scss';

export default function Nav() {
    const [signin, { loading }] = useMutation(SIGNIN_MUTATION);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinHandler = async (evt) => {
        evt.preventDefault();

        try {
            const { data } = await signin({
                variables: {
                    firstName,
                    lastName,
                    email,
                    password
                }
            });

            Auth.login(data.signin.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form id="signin-form" onSubmit={signinHandler}>
            <div>
                <label htmlFor="signin-form-first-name">first name</label>
                <input id="signin-form-first-name" type="text" onChange={(evt) => setFirstName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-last-name">last name</label>
                <input id="signin-form-last-name" type="text" onChange={(evt) => setLastName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-email">email</label>
                <input id="signin-form-email" type="text" onChange={(evt) => setEmail(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-password">password</label>
                <input id="signin-form-password" type="password" onChange={(evt) => setPassword(evt.target.value)} />
            </div>
            <div>
                <button type="submit" disabled={loading}>sign up</button>
            </div>
        </form>
    );
}