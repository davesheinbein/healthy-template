// Bar Icons
import foodPyramidIcon from '../../images/foodPyramidIcon.svg';
import appleIcon from '../../images/appleIcon.svg';
import berriesIcon from '../../images/berriesIcon.svg';
import fruitsIcon from '../../images/fruitsIcon.svg';
// Content imgInserts
import herbs from '../../images/contentImg01.jpg';
import smoothie from '../../images/contentImg02.png';
// Users
import userA from '../../images/user01.png';
import userB from '../../images/user02.png';
import userC from '../../images/user03.png';
import userD from '../../images/user04.png';
// Items
import carouselA from '../../images/food00.svg';
import carouselB from '../../images/food01.svg';
import carouselC from '../../images/food02.svg';
import carouselD from '../../images/food03.svg';
import carouselE from '../../images/food04.svg';
import carouselF from '../../images/food05.svg';
import carouselG from '../../images/food06.svg';
import carouselH from '../../images/food07.svg';
import carouselI from '../../images/food08.svg';
import carouselJ from '../../images/food09.svg';
import carouselK from '../../images/food10.svg';
import carouselL from '../../images/food11.svg';

const icons = [
	foodPyramidIcon,
	appleIcon,
	berriesIcon,
	fruitsIcon,
];

const imgInserts = [herbs, smoothie];

const users = [userA, userB, userC, userD];

export const items = [
	{
		id: 1,
		title: 'Strawberry',
		src: carouselA,
		price: '3.99',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 2,
		title: 'Hamburger',
		src: carouselB,
		price: '10.99',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 3,
		title: 'Pizza',
		src: carouselC,
		price: '2.99',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 4,
		title: 'Whole Pizza',
		src: carouselF,
		price: '14.99',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 5,
		title: 'Hotdog',
		src: carouselE,
		price: '2.50',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 6,
		title: 'Grapes',
		src: carouselD,
		price: '1.98',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 7,
		title: 'Mushrooms',
		src: carouselG,
		price: '1.97',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 8,
		title: 'Cheese',
		src: carouselH,
		price: '4.98',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 9,
		title: 'Bananas',
		src: carouselI,
		price: '3.45',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 10,
		title: 'Tomatoes',
		src: carouselJ,
		price: '2.95',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 11,
		title: 'Pear',
		src: carouselK,
		price: '2.95',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 12,
		title: 'Blueberries',
		src: carouselL,
		price: '1.99',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
];

export const images = [
	{
		id: 1,
		img: users[0],
		name: 'John Doe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 2,
		img: users[1],
		name: 'Mariyam Mayo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 3,
		img: users[2],
		name: 'Leja Cherry',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
	{
		id: 4,
		img: users[3],
		name: 'Lex Mccormick',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, orci ut porta porta, eros felis cursus felis, ut placerat.',
	},
];

const Constants = [
	{
		id: 'home',
		title: 'Frushley',
		subTitle: 'Fizzy refreshing aqua',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'content 0',
	},
	{
		id: 'about',
		title: 'About',
		subTitle: 'Check Us Out',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecA 1',
		img: imgInserts[1],
	},
	{
		id: 'product',
		title: 'Product',
		subTitle: 'Healthy Living',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecB 2',
		img: imgInserts[0],
	},
	{
		id: 'team',
		title: 'Team',
		subTitle: 'Making the dream come true',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium sapien quam, nec pharetra nunc sollicitudin non. Sed volutpat posuere sem, eget eleifend purus dapibus vel. Curabitur et posuere nunc. Proin id nibh at est maximus lacinia. Nullam molestie lectus at orci molestie luctus. Cras sodales interdum diam in ullamcorper. Duis lacinia diam luctus, tempor arcu at, commodo erat. Quisque.',
		className: 'contentSecC 3',
	},
	{
		id: 'contact',
		title: 'Contact Us',
		subTitle: 'Get in Touch...',
		description:
			'How do you like to mix your fruity Frushley fizz. Send us your thoughts...',
		className: 'contentSecD 4',
	},
	{
		id: 'bar',
		title: 'Food Pyramid',
		subTitle: 'Analysis',
		description:
			'Remember to follow your personalized reommened diet and get healthier today!',
		className: 'bar 5',
		img: icons[0],
	},
	{
		id: 'barB',
		title: 'Fruit Fuel',
		subTitle: 'Empower yourself',
		description: `Eat Healthy, Drink a lot of water, and Live life to it's fullest with no regrets!`,
		className: 'bar 6',
		img: icons[1],
	},
	{
		id: 'barC',
		title: 'Health Food',
		subTitle: 'Analysis',
		description:
			'Avocados have twice the amount of potassium as bananas and are rich in monounsaturated fat that is burned easily as energy.',
		className: 'bar 7',
		img: icons[2],
	},
	{
		id: 'barD',
		title: 'Health Food',
		subTitle: 'Analysis',
		description: 'Get Healthier today...',
		className: 'bar 8',
		img: icons[3],
	},
];

export default Constants;
