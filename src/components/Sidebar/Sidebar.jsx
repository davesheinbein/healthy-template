import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';
// icons
import { ShoppingBasket } from '@material-ui/icons';
import logo from '../../images/flowerLogoWhite.png';
import './style/Sidebar.css';

const Sidebar = (props) => {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	let sidebarClasses = ['sidebar'];
	if (props.show) {
		sidebarClasses = ['sidebar open'];
	}
	return (
		<nav className={sidebarClasses}>
			<div className='sidebar__logo'>
				<Link to='/'>
					<img src={logo} alt='logo' />
					<div className='sidebar__logoText'>FRUSHLEY</div>
				</Link>
			</div>
			<ul>
				<li style={{ display: props.display }}>
					<a href='#about'>ABOUT</a>
				</li>
				<li style={{ display: props.display }}>
					<a href='#product'>PRODUCT</a>
				</li>
				<li style={{ display: props.display }}>
					<a href='#team'>TEAM</a>
				</li>
				<li style={{ display: props.display }}>
					<a href='#contact'>CONTACT</a>
				</li>
				<li>
					<Link
						to={!user && '/login'}
						style={{ textDecoration: 'none' }}>
						<div
							className='sidebar__option'
							onClick={handleAuthentication}>
							<span className='sidebar__optionLineOne'>
								Hello {!user ? 'Guest,' : user.email}
							</span>
							<span className='sidebar__optionLineTwo'>
								{user ? 'Sign Out' : 'Sign In'}
							</span>
						</div>
					</Link>
				</li>
				<li>
					<Link
						to='/orders'
						style={{ textDecoration: 'none' }}>
						<div className='sidebar__option'>
							<span className='sidebar__optionLineOne'>
								Returns
							</span>
							<span className='sidebar__optionLineTwo'>
								Orders
							</span>
						</div>
					</Link>
				</li>
				<li>
					<Link to='/checkout'>
						<div className='sidebar__optionBasket'>
							<ShoppingBasket />
							<span className='sidebar__optionLineTwo sidebar__basketCount'>
								{basket?.length}
							</span>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
