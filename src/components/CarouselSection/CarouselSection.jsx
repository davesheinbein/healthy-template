import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
// Context API
import { useStateValue } from '../StateProvider/StateProvider';
// Constants
import './style/CarouselSection.css';

function CarouselSection({ items }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = (item) => {
		// this is where dispatch is called
		dispatch({
			// this is were the action type is connected to the reducer
			type: 'ADD_TO_BASKET',
			// here is where the action.item is defined
			// the id, title, image, price, rating are being passed down through props
			item: {
				id: item.id,
				title: item.title,
				image: item.src,
				price: item.price,
			},
		});
		console.log(items, '<< items - Here');
	};

	return (
		<div className='CarouselSection'>
			<Carousel
				itemsToScroll={4}
				itemsToShow={4}
				showArrows={false}>
				{items.map((item) => (
					<>
						<Product
							item={item}
							classNm='CarouselSection__product'
						/>
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
