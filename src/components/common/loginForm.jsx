import React from 'react';
import Joi from 'joi-browser';
import Form from './form';

class LoginForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = () => {
		console.log('submitted');
	};

	render() {
		return (
			<React.Fragment>
				<h1 className='display-4 text-center mb-4'>Login</h1>
				<form
					onSubmit={this.handleSubmit}
					className='container w-50 border border-dark rounded p-4'>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('submit', 'Submit')}
				</form>
			</React.Fragment>
		);
	}
}

export default LoginForm;
