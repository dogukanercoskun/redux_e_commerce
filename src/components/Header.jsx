import { MdPostAdd } from "react-icons/md";
import '../style/header.css'
import { useDispatch} from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortingDataFunc,searchDataFunc } from "../redux/dataSlice";


function Header() {

   const dispatch=useDispatch()

 

  
  return (
    <div className="HeaderMain">
      <div className="h1">
        React-Redux Uygulama
        </div>
        <div className="leftItem">
          <div className="selection">
            <select onChange={e=>dispatch(sortingDataFunc(e.target.value))} name="" id="">
              <option value="asc">Artan</option>
              <option value="desc">Azalan</option>
            </select>
          </div>
          <div>
          <input
  onChange={e => dispatch(searchDataFunc({ e: e.target.value }))}
  type="text"
  placeholder="Arama Yapınız"
/>

          </div>
          <div onClick={()=>dispatch(modalFunc ())} className="icon">
          <MdPostAdd />
          </div>
        </div>
      
    </div>
  );
}

export default Header;
