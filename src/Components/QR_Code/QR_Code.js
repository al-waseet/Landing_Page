import { Configuration } from '../../Configuration';
import QRCode from 'qrcode';
import './QR_Code.css';
import { useEffect, useState } from 'react';

const QR_Code = ({Restaurant}) => 
{
	const [QR_Code_Image, Set_QR_Code_Image] = useState ('');

	useEffect (() => 
	{
		QRCode.toDataURL (`${Configuration.Ordering_Application_URL}/${Restaurant.Restaurant_ID}/${Restaurant.Table_ID}`, {errorCorrectionLevel: 'H', type: 'image/svg', color: {dark:"#4D4D4DFF", light:"#FFFFFF00"}}, (Error_Object, Result) => Error_Object ? console.error (Error_Object) : Set_QR_Code_Image (Result));
	}, []);

	return <img alt='QR Code' className='QR_Code' src={QR_Code_Image}></img>
}

export default QR_Code;