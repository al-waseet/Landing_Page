import {ReactComponent as Back_Icon} from '../../Images/Back_Icon.svg';
import './Floating_Action_Button.css';

const Floating_Action_Button = () => 
{
	const Scroll_to_the_Top = () => window.scrollTo ({top: 0, behavior: "smooth"});

	return <div className='Floating_Action_Button_Container' onClick={Scroll_to_the_Top}><Back_Icon className='Floating_Action_Button' fill="#4D4D4D"></Back_Icon></div>;
};

export default Floating_Action_Button;