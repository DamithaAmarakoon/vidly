import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
	columns = [
		{
			path: 'title',
			title: 'Title',
			content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
		},
		{ path: 'genre.name', title: 'Genre' },
		{ path: 'numberInStock', title: 'Stock' },
		{ path: 'dailyRentalRate', title: 'Rate' },
		{
			key: 'like',
			content: movie => (
				<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
			)
		},
		{
			key: 'delete',
			content: movie => (
				<button
					onClick={() => this.props.onDelete(movie)}
					className='btn btn-danger btn-sm'>
					Delete
				</button>
			)
		}
	];

	render() {
		const { movies, onSort, sortColumn } = this.props;

		return (
			<Table
				data={movies}
				columns={this.columns}
				onSort={onSort}
				sortColumn={sortColumn}
			/>
		);
	}
}

export default MoviesTable;
