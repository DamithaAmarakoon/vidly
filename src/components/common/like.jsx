import React from 'react';

const Like = ({ liked, onClick }) => {
	let likeClass = 'fa fa-heart';
	if (!liked) likeClass += '-o';

	return (
		<i
			onClick={onClick}
			style={{ cursor: 'pointer' }}
			className={likeClass}></i>
	);
};

export default Like;
