import Button from '../Button/Button';
import './Card.css';

const Card = ({Button_Text, Classes, Description, Function, Name, Price}) => 
{
	return (
		<div className={'Card' + (Classes ? (' ' + Classes.join (' ')) : '')}>
			<div className='Card_Content'>
				<h1 className='Plan_Name'>{Name}</h1>
				<h3 className='Plan_Price'>{Price}</h3>
				<p className='Plan_Description'>{Description}</p>
			</div>
			<Button Color='#3A3A3A' Function={Function} Text={Button_Text} Text_Color='#FFFFFF'></Button>
		</div>
	)
}

export default Card;