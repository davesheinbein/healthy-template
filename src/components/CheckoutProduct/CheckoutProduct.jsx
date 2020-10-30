import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './style/CheckoutProduct.css';

function CheckoutProduct({
	id,
	image,
	title,
	price,
	hideButton,
}) {
	const [{}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img
				src={image}
				alt={title}
				className='checkoutProduct__image'
			/>
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				{!hideButton && (
					<button onClick={removeFromBasket}>
						Remove from Cart
					</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
