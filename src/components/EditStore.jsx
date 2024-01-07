import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStore () {
  const {id} = useParams();

  const [data, setData] = useState({
    id: id,
    name: "",
    email: "",
    phoneNumber: "",
    website:  "",
    address: ""
  })
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/stores/'+id)
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  },[id])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3002/stores/'+id, data)
      .then(response => {
        alert("Data updated successfully!")
        navigate('/', { replace: true });
      })
    }

  return (
    <div className='text-center'>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] p-10" >
        iFind your Store!
      </h1>

      <div className='mx-[30%] my-[5%] text-center bg-[#00df9a] rounded-lg shadow-lg'>
      <form onSubmit={handleSubmit}  className='py-[5%]'>
      <div className='py-3'>
          <p className='font-bold text-[#000300]'>
            ID:
          </p>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeName"> 
          <input
            className="text-center text-[#00df9a] bg-[#000300] py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300"
            type="number"
            disabled
            value={data.id} 
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeName"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300"
            type="text"
            value={data.name} 
            placeholder='Enter your Store Name' 
            onChange={event => setData({...data, name: event.target.value})}
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeEmail"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="email"
            value={data.email}
            placeholder='Enter your Email' 
            onChange={event => setData({...data, email: event.target.value})} 
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storePhone"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300"
            type="tel"
            value={data.phoneNumber}
            placeholder='Enter your Phone/Tel Number' 
            onChange={event => setData({...data, phoneNumber: event.target.value})} 
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeWebsite"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="url"
            value={data.website}
            placeholder='Enter your Website' 
            onChange={event => setData({...data, website: event.target.value})} 
          /> 
        </label>
        </div>
       <div className='py-3'>
         <label className="block text-gray-700 text-sm font-bold" htmlFor="storeAddress"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="text"
            value={data.address}
            placeholder='Enter your Address' 
            onChange={event => setData({...data, address: event.target.value})} 
          /> 
        </label>
       </div>

        <button className='text-[#00df9a] rounded-md font-bold px-10 py-3 my-3 bg-black cursor-pointer'>
          Update
        </button>
    
      </form>
    </div>
    </div>
  )
}

export default EditStore
