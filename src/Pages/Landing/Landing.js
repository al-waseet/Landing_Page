import API from '../../API';
import Biography from '../../Components/Biography/Biography';
import Button from '../../Components/Button/Button';
//import Card from '../../Components/Card/Card';
import {ReactComponent as Checkmark} from '../../Images/Checkmark.svg';
import Content from './Landing.json';
import Dashboard_Mockup from '../../Images/Dashboard_Mockup.png';
import Dropdown_Menu from '../../Components/Dropdown_Menu/Dropdown_Menu';
import Floating_Action_Button from '../../Components/Floating_Action_Button/Floating_Action_Button';
import Footer from '../../Components/Footer/Footer';
import Grid from '../../Components/Grid/Grid';
import Header from '../../Components/Header/Header';
import './Landing.css';
import Menu_Mockup from '../../Images/Menu_Mockup.png';
import Phone_Number_Input_Field from '../../Components/Phone_Number_Input_Field/Phone_Number_Input_Field';
import Photo_of_Hashim_Noor from '../../Images/Hashim_Noor.jpg';
import Photo_of_Lev_Rassudov from '../../Images/Lev_Rassudov.jpg';
import Photo_of_German_Shein from '../../Images/German_Shein.jpg';
import QR_Code from '../../Components/QR_Code/QR_Code';
import Text_Area from '../../Components/Text_Area/Text_Area';
import Text_Input_Field from '../../Components/Text_Input_Field/Text_Input_Field'
import { useRef, useState } from 'react';

const Landing = () =>
{
	const Vision_Reference = useRef ();
	const Services_Reference = useRef ();
	//const Plans_Reference = useRef ();
	const Team_Reference = useRef ();
	const Contact_Us_Reference = useRef ();

	//const [Active_Plan, Set_Active_Plan] = useState ('Monthly');
	//const [Enterprise_Plan_Calculation_Status, Set_Enterprise_Plan_Calculation_Status] = useState (false);
	const [Language, Set_Language] = useState ('en-US');

	const [Name, Set_Name] = useState ('');
	const [Email, Set_Email] = useState ('');
	const [Phone_Number_Code, Set_Phone_Number_Code] = useState ('+971');
	const [Phone_Number, Set_Phone_Number] = useState ('');
	const [Restaurant, Set_Restaurant] = useState ('');
	const [City, Set_City] = useState ('');
	const [Emirate, Set_Emirate] = useState ('');
	const [Message, Set_Message] = useState ('');

    const [Email_Sent_Status, Set_Email_Sent_Status] = useState (false); 

    const Send_an_Email = () =>
    {
        API.Send_an_Email ({Name, Email, Phone_Number: Phone_Number_Code + Phone_Number, Restaurant, City, Emirate, Message});
        Set_Email_Sent_Status (true);
        Set_Name ('');
        Set_Email ('');
        Set_Phone_Number_Code ('+971');
        Set_Phone_Number ('');
        Set_Restaurant ('');
        Set_City ('');
        Set_Emirate ('');
        Set_Message ('');
    }

	//const Toggle_Enterprise_Card = () => Set_Enterprise_Plan_Calculation_Status (!Enterprise_Plan_Calculation_Status);
	
	return (
		<>
			<Header Language={Language} Language_Setting_Function={Set_Language} References={[Vision_Reference, Services_Reference, Team_Reference, Contact_Us_Reference]}></Header>
			<div className='Hero_Banner' key='Hero_Banner_Key' ref={Vision_Reference}>
				<div className='Hero_Banner_Text'>
					<h1 className='Hero_Banner_Tagline'>{Content.Tagline [Language]}</h1>
					<p className='Hero_Banner_Description'>al waseet is a F&B and hospitality IT solution that provides seamless dine-in ordering experience for your guests. Focus on your operation, while we take care of your customers' orders.</p>
				</div>
				{/*<p className='Hero_Banner_Image_Credit'>Image taken by <a className='Image_Credit_URL' href='https://www.pexels.com/photo/assorted-pasta-meal-on-plates-3184180/' rel='noreferrer' target='_blank'>fauxels</a></p>*/}
			</div>
			<div className='Main_Section'>
				<div className='Services' ref={Services_Reference}>
					<div className='Services_Text_Container'>
						<h1>QR Ordering Solution</h1>
						<p>Your restaurant's operations can be improved with our solution that allows guests to make orders directly from the table. Scan the QR code with mobile device, select menu items, send the order directly to the POS system, and use multiple checkout options to pay for the bill. Our product can be easily integrated with most of the POS systems available in the UAE. This seamless ordering process allows for higher table turnover and increased revenues at your venue.</p>
						<p>It also enhances overall satisfaction rate of your guests, because they are more in control of what they want to order and when they want to order. By having a digital ordering solution,  clear communication is established between customers and kitchen, which minimizes the possibility of mistakes during the order and resulting in wrong dishes delivered at the table.</p>
						<h2>Our Benefits</h2>
						<div className='Benefits'>
							<div className='Benefit'>
								<Checkmark fill="#383838" height="2rem"></Checkmark>
								<p>Improved Operations Results</p>
							</div>
							<div className='Benefit'>
								<Checkmark fill="#383838" height="2rem"></Checkmark>
								<p>Enhanced Customer Experience</p>
							</div>
							<div className='Benefit'>
								<Checkmark fill="#383838" height="2rem"></Checkmark>
								<p>More Customers per Day</p>
							</div>
						</div>
					</div>
					<div className='Services_Applications'>
						<Grid Minimum_Column_Width='350px'>
							<div className='Dashboard_Section'>
								<h2>Customization Dashboard</h2>
								<p>Customize your restaurant through all-in-one user friendly dashboard. Create your restaurant, edit your menu categories & menu items, create and modify indigents and more.</p>
								<img className='Dashboard_Mockup' src={Dashboard_Mockup}></img>
							</div>
							<div className='Menu_Section'>
								<div className='Menu_Section_Column'>
									<h2>Mobile Menu & Ordering</h2>
									<p>Your customers can scan a QR code, like the one below, and order food straight to their table!</p>
									<QR_Code Restaurant={{Restaurant_ID: '638de2c86c763fe989266e84', Table_ID: 'b50af576-f239-11ec-b939-0242ac120002'}}></QR_Code>
									<p className='Invitation_to_Scan'>Scan to View the Demo</p>
								</div>
                                <div className='Menu_Mockup_Container'>
                                    <img className='Menu_Mockup' src={Menu_Mockup}></img>
                                </div>
							</div>
                            <div className='Mobile_Menu_Section'>
                                <h2>Mobile Menu & Ordering</h2>
                                <p>Your customers can scan a QR code, like the one below, and order food straight to their table!</p>
                                <img className='Menu_Mockup' src={Menu_Mockup}></img>
                                <QR_Code Restaurant={{Restaurant_ID: '638de2c86c763fe989266e84', Table_ID: 'b50af576-f239-11ec-b939-0242ac120002'}}></QR_Code>
                                <p className='Invitation_to_Scan'>Scan to View the Demo</p>
                            </div>
						</Grid>
					</div>
				</div>
				{/*<div className='Plans' ref={Plans_Reference}>
					<div className='Plans_Header'>
						<h1>Our Menu</h1>
						<div className='Time_Period_Selector'>
							<span className={'Monthly_Selector' + (Active_Plan === 'Monthly' ? ' Active_Monthly_Selector' : '')} onClick={() => Set_Active_Plan ('Monthly')}>Monthly</span>
							<span className={'Annual_Selector' + (Active_Plan === 'Annually' ? ' Active_Annual_Selector' : '')} onClick={() => Set_Active_Plan ('Annually')}>Annually</span>
						</div>
					</div>
					<div className='Plans_Grid'>
						<Grid>
							<Card Button_Text={Content.Purchase_Button_Text_1 [Language]} Description={Content.Card_1_Description [Language]} Name={Content.Card_1_Name [Language]} Price={Active_Plan === 'Monthly' ? Content.Card_1_Monthly_Price [Language] : Content.Card_1_Annual_Price [Language]}></Card>
							<Card Button_Text={Content.Purchase_Button_Text_1 [Language]} Description={Content.Card_2_Description [Language]} Name={Content.Card_2_Name [Language]} Price={Active_Plan === 'Monthly' ? Content.Card_2_Monthly_Price [Language] : Content.Card_2_Annual_Price [Language]}></Card>
							<Card Button_Text={Content.Purchase_Button_Text_1 [Language]} Description={Content.Card_3_Description [Language]} Name={Content.Card_3_Name [Language]} Price={Active_Plan === 'Monthly' ? Content.Card_3_Monthly_Price [Language] : Content.Card_3_Annual_Price [Language]}></Card>
							<div className={'Card_Flipping_Container' + (Enterprise_Plan_Calculation_Status ? ' Card_Flip' : '')}>
								<Card Button_Text={Content.Purchase_Button_Text_2 [Language]} Classes={Enterprise_Plan_Calculation_Status ? ['Hidden_Card'] : []} Description={Content.Card_4_Description [Language]} Function={Toggle_Enterprise_Card} Name={Content.Card_4_Name [Language]} Price='Calculate Cost'></Card>
								<div className={'Card Flipped_Card' + (Enterprise_Plan_Calculation_Status ? '' : ' Hidden_Card')}><Text_Input_Field Label='Small Restaurants'></Text_Input_Field><Text_Input_Field Label='Medium Restaurants'></Text_Input_Field><Text_Input_Field Label='Large Restaurants'></Text_Input_Field><Button Color='#3A3A3A' Function={Toggle_Enterprise_Card} Text='Calculate' Text_Color='#FFFFFF'></Button></div>
							</div>
							<Card Button_Text={Content.Purchase_Button_Text_3 [Language]} Description={Content.Card_5_Description [Language]} Name={Content.Card_5_Name [Language]}></Card>
						</Grid>
					</div>
				</div>*/}
				<div className='Team' ref={Team_Reference}>
					<h1>{Content.Team_Section_Header [Language]}</h1>
					<div className='Team_Grid'>
						<Grid>
							<Biography Name={Content.Founder_1_Name [Language]} Photo={Photo_of_Lev_Rassudov} Photo_Alternative={Content.Founder_1_Photo_Alternative [Language]} Position={Content.Founder_1_Position [Language]} Text={Content.Founder_1_Biography [Language]}></Biography>
							<Biography Name={Content.Founder_2_Name [Language]} Photo={Photo_of_German_Shein} Photo_Alternative={Content.Founder_2_Photo_Alternative [Language]} Position={Content.Founder_2_Position [Language]} Text={Content.Founder_2_Biography [Language]}></Biography>
							<Biography Name={Content.Founder_3_Name [Language]} Photo={Photo_of_Hashim_Noor} Photo_Alternative={Content.Founder_3_Photo_Alternative [Language]} Position={Content.Founder_3_Position [Language]} Text={Content.Founder_3_Biography [Language]}></Biography>
						</Grid>
					</div>
				</div>
				<div className='Contact_Us' ref={Contact_Us_Reference}>
					<h1>{Content.Contact_Us_Section_Header [Language]}</h1>
					<Grid Classes={['Component_Padding', 'Component_Fitness_to_Flexbox']} Minimum_Column_Width='600px'>
						<Text_Input_Field Function={(Event) => Set_Name (Event.target.value)} Label='Name' Value={Name}></Text_Input_Field>
						<Text_Input_Field Function={(Event) => Set_Email (Event.target.value)} Label='Email' Value={Email}></Text_Input_Field>
						<Phone_Number_Input_Field Phone_Number={Phone_Number} Phone_Number_Code={Phone_Number_Code} Set_Phone_Number={(Event) => Set_Phone_Number (Event.target.value)} Set_Phone_Number_Code={(Event) => Set_Phone_Number_Code (Event.target.value)}></Phone_Number_Input_Field>
						<Text_Input_Field Function={(Event) => Set_Restaurant (Event.target.value)} Label='Restaurant' Value={Restaurant}></Text_Input_Field>
					</Grid>
					<Text_Area Classes={['Component_Padding', 'Component_Fitness_to_Flexbox']} Function={(Event) => Set_Message (Event.target.value)} Label='Message' Value={Message}></Text_Area>
					<Button Color='#050505' Classes={['Component_Margin']} Function={Send_an_Email} Text='Send a Message' Text_Color='#FFFFFF'></Button>
                    {Email_Sent_Status && <p>We will get back to you shortly!</p>}
                </div>
			</div>
			<Footer></Footer>
			<Floating_Action_Button></Floating_Action_Button>
		</>
	);
}

export default Landing;