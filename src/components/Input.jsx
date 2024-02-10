
import '../style/input.css'


// eslint-disable-next-line react/prop-types
function Input({value,type,id,name,placeholderText,onChange}) {
  return (
   <input  className="customInput" type={type} id={id} name={name} placeholder={placeholderText} value={value} onChange={onChange}/>
  )
}

export default Input