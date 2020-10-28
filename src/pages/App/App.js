import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarBackdrop from '../../components/SidebarBackdrop/SidebarBackdrop';
import Content from '../../components/Content/Content';
import Checkout from '../../components/Checkout/Checkout';
import Orders from '../../components/Orders/Orders';
import Payment from '../../components/Payment/Payment';
import Bar from '../../components/Bar/Bar';
import Footer from '../../components/Footer/Footer';
// All static props info
import Constants from '../../components/Constants/Constants';

// Routing
import { Switch, Route } from 'react-router-dom';
// User Auth
import { auth } from '../../firebase';
// Redux
// import { useStateValue } from '../../components/StateProvider/StateProvider';
// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// Style

import './stlye/App.css';
import Login from '../../components/Login/Login';

// Need Work... Help
// Stripe Publishable key https://dashboard.stripe.com/test/apikeys
// promise that compiles and load stripe based on Key
const promise = loadStripe(
	'pk_test_51HXuryAGYh1gFsygAcbMQ6nNumpmFOFhQIUvLsoqKk1Z30xYMV6DAiPtjekVGt8fOo92Iu8oP4E2fNRP21hfi0rm00KGWwWewI'
);

// Need Work... Help
// function mapDispatchToProps(dispatch) {
// 	return {
// 		SET_USER: (user) => dispatch(user(SET_USER)),
// 	};
// }

class App extends Component {
	/*--- State ---*/
	state = {
		sidebarOpen: false,
	};

	/*--- Handle Methods ---*/
	sidebarClickHandler = () => {
		this.setState((prevState) => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};

	sidebarBackdropClickHandler = () => {
		this.setState({ sidebarOpen: false });
	};
	/*--- Lifecycle Methods ---*/

	render() {
		let sidebarBackdrop;

		if (this.state.sidebarOpen) {
			sidebarBackdrop = (
				<SidebarBackdrop
					sidebarBackdropClickHandler={
						this.sidebarBackdropClickHandler
					}
				/>
			);
		}

		return (
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						<Header
							sidebarClickHandler={this.sidebarClickHandler}
						/>
						<Sidebar show={this.state.sidebarOpen} />
						{sidebarBackdrop}
						<Section>
							<Content
								id={Constants[0].id}
								title={Constants[0].title}
								subTitle={Constants[0].subTitle}
								description={Constants[0].description}
								className={Constants[0].className}
							/>
						</Section>
						<Bar
							id={Constants[5].id}
							title={Constants[5].title}
							subTitle={Constants[5].subTitle}
							description={Constants[5].description}
							className={Constants[5].className}
							img={Constants[5].img}
						/>
						<Section>
							<Content
								id={Constants[1].id}
								title={Constants[1].title}
								subTitle={Constants[1].subTitle}
								description={Constants[1].description}
								className={Constants[1].className}
								img={Constants[1].img}
							/>
						</Section>
						<Bar
							id={Constants[6].id}
							title={Constants[6].title}
							subTitle={Constants[6].subTitle}
							description={Constants[6].description}
							className={Constants[6].className}
							img={Constants[6].img}
						/>
						<Section>
							<Content
								id={Constants[2].id}
								title={Constants[2].title}
								subTitle={Constants[2].subTitle}
								description={Constants[2].description}
								className={Constants[2].className}
								img={Constants[2].img}
							/>
						</Section>
						<Bar
							id={Constants[7].id}
							title={Constants[7].title}
							subTitle={Constants[7].subTitle}
							description={Constants[7].description}
							className={Constants[7].className}
							img={Constants[7].img}
						/>
						<Section>
							<Content
								id={Constants[3].id}
								title={Constants[3].title}
								subTitle={Constants[3].subTitle}
								description={Constants[3].description}
								className={Constants[3].className}
							/>
						</Section>
						<Bar
							id={Constants[8].id}
							title={Constants[8].title}
							subTitle={Constants[8].subTitle}
							description={Constants[8].description}
							className={Constants[8].className}
							img={Constants[8].img}
						/>
						<Section>
							<Content
								id={Constants[4].id}
								title={Constants[4].title}
								subTitle={Constants[4].subTitle}
								description={Constants[4].description}
								className={Constants[4].className}
							/>
						</Section>
					</Route>
					<Route exact path='/login'>
						<Section>
							<Header
								display='none'
								sidebarClickHandler={
									this.sidebarClickHandler
								}
							/>
							<Login />
						</Section>
					</Route>
					<Route exact path='/orders'>
						<Section>
							<Header
								display='none'
								sidebarClickHandler={
									this.sidebarClickHandler
								}
							/>
							<Orders />
						</Section>
					</Route>
					<Route exact path='/checkout'>
						<Section>
							<Header
								display='none'
								sidebarClickHandler={
									this.sidebarClickHandler
								}
							/>
							<Checkout />
						</Section>
					</Route>
					<Route exact path='/payment'>
						{/* Payment component is nested within the Elements */}
						{/* imported from @stripe/react-stripe-js */}
						{/* promise is defined above with */}
						{/* loadStripe imported from @stripe/stripe-js*/}
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

// const _App = connect(null, mapDispatchToProps)(App);

// export default _App;
export default App;
