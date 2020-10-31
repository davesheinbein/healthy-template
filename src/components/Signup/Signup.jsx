import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './style/Signup.css';

function Signup() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState(
		''
	);

	const register = (e) => {
		e.preventDefault();
		// Pulls auth from local firebase storage and then
		// push to ('/') the Email, and Password that have been locally
		// stored if the auth.
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='signup'>
			<div className='signup__container'>
				<h1>Sign-Up</h1>

				<form>
					<h5>Email</h5>
					<input
						type='text'
						// value is connected to state defined at the top
						value={email}
						// event is targeted using the setState prop
						// e.target value is what a user types in
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						// value is connected to state defined at the top
						value={password}
						// event is targeted using the setState prop
						// e.target value is what a user types in
						onChange={(e) => setPassword(e.target.value)}
					/>
					<h5>Confirm Password</h5>
					<input
						type='password'
						// value is connected to state defined at the top
						value={confirmPassword}
						// event is targeted using the setState prop
						// e.target value is what a user types in
						onChange={(e) =>
							setConfirmPassword(e.target.value)
						}
					/>

					<button
						className='signup__registerButton'
						// fumctionality defined at the top
						onClick={register}
						disabled={
							password === confirmPassword ? null : true
						}
						// type button to click to submit
						type='button'>
						Create your Account
					</button>
					{password === confirmPassword ? null : (
						<small className='signup__subText'>
							Password doesn't match up. Please try again...
						</small>
					)}
				</form>

				<p>
					By signing-up you agree to the Frushley Conditions
					of Use & Sale. Please see our Privacy Notice, our
					Cookies Notice and our Interest-Based Ads Notice.
				</p>

				<Link className='signup__link' to='/login'>
					<button
						className='signup__loginBtn'
						// fumctionality defined at the top
						// type button to click to submit
						type='button'>
						Back To Login
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Signup;
