import Instagram_Icon from '../../Images/Instagram_Icon.svg';
import LinkedIn_Icon from '../../Images/LinkedIn_Icon.svg';
import './Footer.css';

const Footer = () => <footer key='Footer_Key'><p><strong>Follow us on:</strong></p><div className='Social_Media_Icons'><a href='https://www.instagram.com/alwaseet.me/' rel="noreferrer" target='_blank'><img className='Social_Media_Icon' src={Instagram_Icon}></img></a><a href='https://www.linkedin.com/company/alwaseetme/' rel="noreferrer" target='_blank'><img className='Social_Media_Icon' src={LinkedIn_Icon}></img></a></div><p>© {new Date ().getFullYear ()} al waseet. All rights reserved.</p></footer>;

export default Footer;