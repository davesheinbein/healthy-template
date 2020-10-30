import React from 'react';
import Product from '../Product/Product';
import './style/Products.css';

function Products({ items }) {
	return (
		<div className='products'>
			<div className='products__title'>Products</div>
			<div className='products__container'>
				{items.map((item) => (
					<Product item={item} />
				))}
			</div>
		</div>
	);
}

export default Products;
