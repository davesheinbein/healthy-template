import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
// Context API
import { useStateValue } from '../StateProvider/StateProvider';
// Constants
import './style/CarouselSection.css';

function CarouselSection({ items }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		// this is where dispatch is called
		dispatch({
			// this is were the action type is connected to the reducer
			type: 'ADD_TO_BASKET',
			// here is where the action.item is defined
			// the id, title, image, price, rating are being passed down through props
			item: {
				id: items.id,
				title: items.title,
				image: items.src,
				price: items.price,
			},
		});
	};

	return (
		<div className='CarouselSection'>
			<Carousel
				itemsToScroll={4}
				itemsToShow={4}
				showArrows={false}>
				{items.map((item) => (
					<>
						<div className='CarouselSection__title'>
							{item.title}
						</div>
						<img
							key={item.id}
							src={item.src}
							alt={item.title}
						/>
						<div className='CarouselSection__price'>
							<small>$</small> {item.price}
						</div>
						<button onClick={addToBasket}>
							Add to Cart
						</button>
					</>
				))}
			</Carousel>
			<Link
				to={'/products'}
				className='CarouselSection__link'>
				<div className='CarouselSection__linkText'>
					See more Products
				</div>
			</Link>
		</div>
	);
}

export default CarouselSection;
