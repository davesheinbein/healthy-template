import React from 'react';
// Components
import Card from '../Card/Card';
import ContactForm from '../Form/ContactForm';
import CarouselSection from '../CarouselSection/CarouselSection';
// Images defined in constants
import { images } from '../Constants/Constants';
import { items } from '../Constants/Constants';
import './style/Content.css';

function Content({
	id,
	title,
	subTitle,
	description,
	className,
	img,
}) {
	return (
		<div className={className} id={id}>
			<div className='content__title'>{title}</div>
			<div className='content__subtitle'>{subTitle} </div>
			<div className='content__description'>
				<div className='content__descriptionText'>
					{description}
				</div>
				<div className='content__descriptionImg'>
					<img src={img} alt={id} />
				</div>
				<div className='content__descriptionCard'>
					{images.map((i) => (
						<Card
							id={i.id}
							image={i.img}
							name={i.name}
							description={i.description}
						/>
					))}
				</div>
			</div>
			<div className='content__form'>
				<ContactForm />
			</div>
			<div className='content__carousel'>
				<CarouselSection items={items} />
			</div>
		</div>
	);
}

export default Content;
