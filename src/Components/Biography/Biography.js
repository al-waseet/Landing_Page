import './Biography.css';

const Biography = ({Name, Photo, Photo_Alternative, Position, Text}) => (
	<div className='Biography_Card'>
		<div className='Photo_of_the_Person_Container'>
			<img alt={Photo_Alternative} className='Photo_of_the_Person' src={Photo}></img>
		</div>
		<div className='Biography_Text_Container'>
			<h2 className='Name_of_the_Person'>{Name}</h2>
			<h3 className='Position'>{Position}</h3>
			<p className='Biography_Text'>{Text}</p>
		</div>
		
	</div>
)

export default Biography;