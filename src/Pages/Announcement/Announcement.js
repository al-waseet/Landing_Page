import al_waseet_White_Banner from '../../Images/al_waseet_White_Banner.svg'
import './Announcement.css';

const Announcement = () => (
	<div className='Announcement_Page'>
		<img alt='al waseet Banner' className='Announcement_Banner' src={al_waseet_White_Banner}></img>
        <h2>Coming soon to <strong>your</strong> restaurant!</h2>
        <h2>15/12/2022</h2>
	</div>
);

export default Announcement;