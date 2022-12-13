import { Configuration } from "./Configuration";

const API = 
{
	Send_an_Email: async (Email) =>
	{
		return await (await fetch (Configuration.API_URL + '/email', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (Email)}));
	}
};

export default API;