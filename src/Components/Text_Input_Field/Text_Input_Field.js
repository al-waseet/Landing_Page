import './Text_Input_Field.css';

const Text_Input_Field = ({Function, Label, Type, Value}) => <div className="Text_Input"><label className="Text_Input_Label">{Label}</label><input className='Text_Input_Field' onChange={Function} type={Type} value={Value} /></div>

export default Text_Input_Field;