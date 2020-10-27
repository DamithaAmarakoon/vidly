import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		sortColumn: { path: 'title', order: 'asc' }
	};

	componentDidMount() {
		this.setState({ movies: getMovies(), genres: getGenres() });
	}

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies });
	};

	handleLike = movie => {
		const movies = this.state.movies.map(m => {
			if (m._id === movie._id) m.liked = !m.liked;
			return m;
		});
		this.setState({ movies });
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = genre => {
		this.setState({ selectedGenre: genre });
	};

	handleSort = sortColumn => {
		this.setState({ sortColumn });
	};

	getPageData = () => {
		const {
			pageSize,
			currentPage,
			selectedGenre,
			sortColumn,
			movies: allMovies
		} = this.state;

		const filtered = selectedGenre
			? allMovies.filter(m => m.genre._id === selectedGenre._id)
			: allMovies;

		const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);

		const movies = paginate(sorted, currentPage, pageSize);

		return { filteredCount: filtered.length, movies };
	};

	componentDidUpdate() {
		const { movies } = this.getPageData();
		const { currentPage } = this.state;

		if (movies.length === 0 && currentPage > 1)
			this.handlePageChange(currentPage - 1);
	}

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;

		const { filteredCount, movies } = this.getPageData();

		if (count === 0)
			return (
				<p className='alert alert-danger'>
					There are no movies in the database!
				</p>
			);

		return (
			<React.Fragment>
				<div className='row'>
					<div className='col-3'>
						<ListGroup
							items={this.state.genres}
							onItemSelect={this.handleGenreSelect}
							selectedItem={selectedGenre}
						/>
					</div>

					<div className='col'>
						{filteredCount === 0 ? (
							<p className='alert alert-danger'>
								There are no {selectedGenre ? selectedGenre.name : ''} movies in
								the database!
							</p>
						) : (
							<React.Fragment>
								<p className='alert alert-success'>
									Showing {filteredCount}{' '}
									{selectedGenre ? selectedGenre.name : ''} movie(s) in the
									database.
								</p>
								<MoviesTable
									movies={movies}
									sortColumn={sortColumn}
									onLike={this.handleLike}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
								/>
								<Pagination
									itemsCount={filteredCount}
									pageSize={pageSize}
									currentPage={currentPage}
									onPageChange={this.handlePageChange}
								/>
							</React.Fragment>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Movies;
