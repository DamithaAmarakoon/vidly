import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	const pageCount = Math.ceil(itemsCount / pageSize);

	if (pageCount === 1) return null;

	const pages = _.range(1, pageCount + 1);

	return (
		<nav className='mb-5'>
			<ul className='pagination justify-content-center'>
				{pages.map(page => (
					<li
						key={page}
						className={page === currentPage ? 'page-item active' : 'page-item'}>
						<button
							onClick={() => onPageChange(page)}
							style={{ cursor: 'pointer' }}
							className='page-link'>
							{page}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	itemsCount: propTypes.number.isRequired,
	pageSize: propTypes.number.isRequired,
	onPageChange: propTypes.func.isRequired,
	currentPage: propTypes.number.isRequired
};

export default Pagination;
