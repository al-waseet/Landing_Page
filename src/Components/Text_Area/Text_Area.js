import './Text_Area.css';

const Text_Area = ({Classes, Function, Label, Value}) => <div className={'Text_Area' + (Classes ? (' ' + Classes.join (' ')) : '')}><label className="Text_Area_Label">{Label}</label><textarea className='Text_Area_Field' onChange={Function} rows="8" type="text" value={Value}></textarea></div>

export default Text_Area;