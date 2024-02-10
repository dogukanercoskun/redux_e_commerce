import { useState } from 'react';
import '../style/productCard.css'
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useNavigate } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
function ProductCard({product}) {

  const [openEdit,setOpenEdit]=useState(false)

   const dispatch=useDispatch();
   const navigate=useNavigate()

   const updateFunc=()=>{
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${product?.id}`)
   
   }

  return (
    <div className='prdcrd'>
     
      <img src={product?.url} alt="" />

      <div className='pdcrdinf'>
        <div>
          {product?.productName}
        </div>
        <div>
          {product?.price} TL
        </div>
        
      </div>
      <div onClick={()=>setOpenEdit(!openEdit)} className='prdcrdIcon'>
        <BsThreeDots color='white' size={24} />
        </div>

        {openEdit&&(<div className='opnedt'>
          <div onClick={()=>dispatch(deleteDataFunc(product?.id))} className='opnedtbtn'>Sil</div>
          <div onClick={updateFunc} className='opnedtbtn'>Güncelle</div>
        </div>)}
    </div>
  )
}

export default ProductCard