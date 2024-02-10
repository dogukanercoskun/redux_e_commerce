import '../style/button.css'

// eslint-disable-next-line react/prop-types
function Button({onClick,btnText}) {
  return (
    <button className='custombtn' onClick={onClick}>{btnText}</button>
  )
}

export default Button