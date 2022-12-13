import './Button.css';

const Button = ({Color, Classes, Function, Text, Text_Color}) => <button className={'Generic_Button' + (Classes ? (' ' + Classes.join (' ')) : '')} onClick={Function} style={{background: Color, color: Text_Color}}>{Text}</button>;

export default Button;