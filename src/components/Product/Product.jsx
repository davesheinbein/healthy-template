import React from 'react';
// Context API
import { useStateValue } from '../StateProvider/StateProvider';
// Constants
import './style/Product.css';

function Product({ item }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
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
	};

	return (
		<div className='product'>
			<>
				<div className='product__title'>{item.title}</div>
				<img
					key={item.id}
					src={item.src}
					alt={item.title}
				/>
				<div className='product__price'>
					<small>$</small> {item.price}
				</div>
				<div className='product__description'>
					{item.description}
				</div>
				<button onClick={addToBasket}>Add to Cart</button>
			</>
		</div>
	);
}

export default Product;
