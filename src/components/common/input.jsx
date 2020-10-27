import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className='form-group mt-3'>
			<label htmlFor={name}>{label}</label>
			<input
				autoFocus={name === 'username'}
				name={name}
				id={name}
				{...rest}
				className={error ? 'form-control is-invalid' : 'form-control'}
			/>
			{error && <small className='invalid-feedback'>{error}</small>}
		</div>
	);
};

export default Input;
