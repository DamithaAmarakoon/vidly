import React from 'react';

const ListGroup = ({ items, onItemSelect, selectedItem }) => {
	return (
		<ul className='list-group'>
			<li
				className={selectedItem ? 'list-group-item' : 'list-group-item active'}
				style={{ cursor: 'pointer' }}
				onClick={() => onItemSelect()}>
				All Genres
			</li>
			{items.map(i => (
				<li
					key={i._id}
					style={{ cursor: 'pointer' }}
					onClick={() => onItemSelect(i)}
					className={
						i === selectedItem ? 'list-group-item active' : 'list-group-item'
					}>
					{i.name}
				</li>
			))}
		</ul>
	);
};

export default ListGroup;
