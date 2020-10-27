import React, { Component } from 'react';

class TableHeader extends Component {
	raiseSort = path => {
		if (path) {
			const { sortColumn } = this.props;
			if (sortColumn.path === path)
				sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
			else {
				sortColumn.path = path;
				sortColumn.order = 'asc';
			}
			this.props.onSort(sortColumn);
		}
	};

	renderSortIcon = column => {
		const { sortColumn } = this.props;
		if (column.path && column.path === sortColumn.path) {
			if (sortColumn.order === 'asc')
				return <i className='fa fa-sort-asc align-bottom'></i>;
			return <i className='fa fa-sort-desc align-top'></i>;
		}
	};

	render() {
		const { columns } = this.props;

		return (
			<thead>
				<tr>
					{columns.map(c => (
						<th
							style={{ cursor: 'pointer' }}
							key={c.path || c.key}
							onClick={() => this.raiseSort(c.path)}>
							{c.title} {this.renderSortIcon(c)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
