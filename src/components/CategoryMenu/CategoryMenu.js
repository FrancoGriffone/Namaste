import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const CategoryMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		ul: {
			padding: 0,
		},
		popUpBtn: {
			cursor: "pointer",
		},
		link: {
			color: 'black',
			fontSize: 16,
			textDecoration: 'none',
		},
	};

	return (
		<div>
			<ul style={styles.ul}>
				<li
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				onClick={handleClick}
				>
				Productos
				</li>
			</ul>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<Link to='/products' style={styles.link}>
						Todos los cursos
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/fisicos' style={styles.link}>
						Cursos físicos
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/espirituales' style={styles.link}>
						Cursos espirituales
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/otros' style={styles.link}>
						Otros cursos
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default CategoryMenu;
