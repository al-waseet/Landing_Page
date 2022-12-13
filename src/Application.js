import './Application.css';
import Announcement from './Pages/Announcement/Announcement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Not_Found from './Pages/Not_Found/Not_Found';

const Application = () => (
	<Router key='Router_Key'>
		<Routes key='Routes_Key'>
            <Route key='Announcement_Page_Route_Key' path='/announcement' element={<Announcement />} />
			<Route key='Landing_Page_Route_Key' path='/' element={<Landing />} />
			<Route key='Not_Found_Page_Route_Key' path='/*' element={<Not_Found />} />
		</Routes>
	</Router>
);

export default Application;