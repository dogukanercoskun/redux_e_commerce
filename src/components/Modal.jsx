import { GrClose } from "react-icons/gr";
import '../style/modal.css'
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Modal({title,contet}) {
   
   const dispatch=useDispatch()


  return (
    <div className="mdl">
      <div className="mdl-content">
        <div className="mdl-header">
        <div className="titleText">
          {title}
        </div>
        <GrClose onClick={()=>dispatch(modalFunc())} size={24} />
        </div>
        {contet}
      </div>
    </div>
  )
}

export default Modal