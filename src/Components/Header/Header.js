import al_waseet_Banner from '../../Images/al_waseet_Banner.svg';
import Button from '../Button/Button';
import {ReactComponent as Hamburger_Icon} from '../../Images/Hamburger_Icon.svg';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = ({Language, Language_Setting_Function, References}) =>
{
	const [Hamburger_Menu_Display_Status, Set_Hamburger_Menu_Display_Status] = useState (false);
	const Navigate = useNavigate(); 
	const Scroll_to_the_Section = Index => window.scrollTo ({top: References [Index].current.offsetTop, behavior: "smooth"});

	return (
		<>
			<header key='Header_Key'>
				<img alt='al waseet Banner' className='Banner' src={al_waseet_Banner}></img>
				<Hamburger_Icon className='Hamburger_Menu_Button' fill='#4D4D4D' onClick={() => Set_Hamburger_Menu_Display_Status (!Hamburger_Menu_Display_Status)}></Hamburger_Icon>
				<nav className='Navigation_Bar'>
					<div className='Section_Link' onClick={() => Scroll_to_the_Section (0)}>Vision</div>
					<div className='Section_Link' onClick={() => Scroll_to_the_Section (1)}>Product</div>
					{/*<div className='Section_Link' onClick={() => Scroll_to_the_Section (2)}>Pricing</div>*/}
					<div className='Section_Link' onClick={() => Scroll_to_the_Section (2)}>Team</div>
					<div className='Section_Link' onClick={() => Scroll_to_the_Section (3)}>Contact Us</div>
				</nav>
				<div className='Standalone_Section'>
					{/*<div className='Language_Selectors'>
						<span className={'Language_Selector' + (Language === 'en-US' ? ' Active_Language' : '')} onClick={() => Language_Setting_Function ('en-US')}>English</span> | <span className={'Language_Selector' + (Language === 'ru' ? ' Active_Language' : '')} onClick={() => Language_Setting_Function ('ru')}>عربي</span>
                    </div>*/}
					<Button Function={() => Navigate ('/announcement')} Text='Dashboard'></Button>
				</div>
			</header>
			{Hamburger_Menu_Display_Status && <nav className='Hamburger_Menu'>
				<div className='Section_Link' onClick={() => Scroll_to_the_Section (0)}>Vision</div>
				<div className='Section_Link' onClick={() => Scroll_to_the_Section (1)}>Product</div>
				{/*<div className='Section_Link' onClick={() => Scroll_to_the_Section (2)}>Pricing</div>*/}
				<div className='Section_Link' onClick={() => Scroll_to_the_Section (2)}>Team</div>
				<div className='Section_Link' onClick={() => Scroll_to_the_Section (3)}>Contact Us</div>
				{/*<div className='Language_Selectors'>
					<span className={'Language_Selector' + (Language === 'en-US' ? ' Active_Language' : '')} onClick={() => Language_Setting_Function ('en-US')}>English</span> | <span className={'Language_Selector' + (Language === 'ru' ? ' Active_Language' : '')} onClick={() => Language_Setting_Function ('ru')}>عربي</span>
				</div>*/}
				<Button Function={() => Navigate ('/announcement')} Text='Dashboard'></Button>
			</nav>}
		</>
	);
}

export default Header;