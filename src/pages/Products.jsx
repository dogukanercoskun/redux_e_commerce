/* eslint-disable no-unused-vars */

import Modal from '../components/Modal';
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Input';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import  {createDataFunc, updateDataFunc} from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice';
import '../style/products.css'
import { useLocation, useNavigate } from 'react-router-dom';
function Products() {
  const {modal}=useSelector(store=>store.modal)
  const {data,keyword}=useSelector(store=>store.data)
  const dispatch=useDispatch()
  const location=useLocation()
  const navigate=useNavigate()

  

  const [productInfo,setProductInfo]=useState(({productName:"",price:"",url:""}))

  const [inputValue,setInputValue]=useState(({productName:"",price:"",url:""}))

  const onChangeFunc=(e,type)=> {
    
    if (type=='url') {
      setProductInfo(prev=>({...prev,[e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    }else{
      setProductInfo(prev=>({...prev,[e.target.name]:e.target.value}))
      setInputValue(prev=>({...prev,[e.target.name]:e.target.value}))
    }


  }

  let loc=location?.search.split("=")[1];

  useEffect(()=>{
    if (loc) {
      setProductInfo(data.find(product=>product?.id==loc))
      setInputValue(data.find(product=>product?.id==loc))
    }
  },[loc])



  const buttunFunc=()=>{
    dispatch(createDataFunc({...productInfo,id:data.length+1}))
    setInputValue(({productName:"",price:"",url:""}))
    dispatch(modalFunc())
  }

  const updateFunc=()=>{
      dispatch(updateDataFunc({...productInfo,id:loc}))
      dispatch(modalFunc())
      setInputValue(({productName:"",price:"",url:""}))
      navigate('/')
      
  }



  const contetModal=(
    
    <>
        <Input value={inputValue?.productName} placeholderText={"Ürün Ekle"} name={"productName"} type= {"text"} id={"productName"} onChange={e=>onChangeFunc(e,'productName')}/>
        <Input value={inputValue?.price} placeholderText={"Fiyat Ekle"} name={"price"} type= {"text"} id={"price"} onChange={e=>onChangeFunc(e,'price')}/>
        <Input placeholderText={"Resim Seç"} name={"url"} type= {"file"} id={"url"} onChange={e=>onChangeFunc(e,'url')}/>
        <Button btnText={loc?"Ürün Güncelle":"Ürün Oluştur"} onClick={loc?updateFunc:buttunFunc}/>
    </>
  
  )
  const filteredProduct=data.filter(product=>product.productName.toLowerCase().includes(keyword.toLowerCase()))
  

  return (
    <>
    <div className='prdcts'>
      {
      filteredProduct?.map((dt,i)=>(
         <ProductCard key={i} product={dt} />
      ))}

    </div>
   
    {modal && <Modal title={loc?"Ürün Güncelle":"Ürün Oluştur"} contet={contetModal} /> }
    </>
  )
}

export default Products