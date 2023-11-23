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
                <label htmlFor="signin-form-first-name">First Name</label>
                <input id="signin-form-first-name" type="text" onChange={(evt) => setFirstName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-last-name">Last Name</label>
                <input id="signin-form-last-name" type="text" onChange={(evt) => setLastName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-email">Email</label>
                <input id="signin-form-email" type="text" onChange={(evt) => setEmail(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="signin-form-password">Password</label>
                <input id="signin-form-password" type="text" onChange={(evt) => setPassword(evt.target.value)} />
            </div>
            <div>
                <button type="submit" disabled={loading}>Sign Up</button>
            </div>
        </form>
    );
}