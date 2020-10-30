import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';
// icons
import { ShoppingBasket } from '@material-ui/icons';
// Component
import SidebarButton from '../SidebarButton/SidebarButton';
// Images
import logo from '../../images/flowerLogo.png';
// Style
import './style/Header.css';

function Header(props) {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	// console.log(props, '<<< props - basket');

	return (
		<header className='header'>
			<nav className='header__navigation'>
				<div className='header__logo'>
					<Link to={'/'}>
						<img src={logo} alt='logo' />
						<div className='header__logoText'>FRUSHLEY</div>
					</Link>
				</div>
				<div className='header__navigationItems'>
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
									className='header__option'
									onClick={handleAuthentication}>
									<span className='header__optionLineOne'>
										Hello {!user ? 'Guest,' : user.email}
									</span>
									<span className='header__optionLineTwo'>
										{user ? 'Sign Out' : 'Sign In'}
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link
								to='/orders'
								style={{ textDecoration: 'none' }}>
								<div className='header__option'>
									<span className='header__optionLineOne'>
										Returns
									</span>
									<span className='header__optionLineTwo'>
										Orders
									</span>
								</div>
							</Link>
						</li>
						<li>
							<Link to='/checkout'>
								<div className='header__optionBasket'>
									<ShoppingBasket />
									<span className='header__optionLineTwo header__basketCount'>
										{basket?.length}
									</span>
								</div>
							</Link>
						</li>
					</ul>
				</div>

				<div className='header__toggleButton'>
					<SidebarButton
						sidebarClickHandler={props.sidebarClickHandler}
					/>
				</div>
			</nav>
		</header>
	);
}

export default Header;
