import React from 'react';
import { getMovie } from '../services/fakeMovieService';

const MovieForm = ({ match, history }) => {
	const { title } = getMovie(match.params.id);

	return (
		<React.Fragment>
			<h1>
				Movie {title} {match.params.id}
			</h1>
			<button className='btn btn-dark' onClick={() => history.push('/movies')}>
				Save
			</button>
		</React.Fragment>
	);
};

export default MovieForm;
