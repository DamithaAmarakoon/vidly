import React from 'react';
import Joi from 'joi-browser';
import Form from './form';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '', name: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().email().required().label('Username'),
		password: Joi.string().min(5).required().label('Password'),
		name: Joi.string().required().label('Name')
	};

	doSubmit = () => {
		console.log('submitted');
	};

	render() {
		return (
			<React.Fragment>
				<h1 className='display-4 text-center mb-4'>Register</h1>
				<form
					onSubmit={this.handleSubmit}
					className='container w-50 border border-dark rounded p-4'>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderInput('name', 'Name')}
					{this.renderButton('submit', 'Submit')}
				</form>
			</React.Fragment>
		);
	}
}

export default RegisterForm;
