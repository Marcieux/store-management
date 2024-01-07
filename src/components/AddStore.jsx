import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddStore(data) {
  const [name, setNewStoreName] = useState("");
  const [email, setNewEmail] = useState("");
  const [phoneNumber, setNewPhone] = useState("");
  const [website, setNewWebsite] = useState("");
  const [address, setNewAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data.length + 1;
    axios.post('http://localhost:3002/stores', {
      id: id,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      website: website,
      address: address
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
    navigate('/', { replace: true });

  };

  return (
    <div className='text-center'>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] p-10" >
        iFind your Store!
      </h1>

      <div className='mx-[30%] my-[5%] text-center bg-[#00df9a] rounded-lg shadow-lg'>
      <form onSubmit={handleSubmit}  className='py-[5%]'>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeName"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300"
            type="text" 
            placeholder='Enter your Store Name' 
            onChange={event => setNewStoreName(event.target.value)}
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeEmail"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="email"
            placeholder='Enter your Email' 
            onChange={event => setNewEmail(event.target.value)} 
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storePhone"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300"
            type="tel" 
            placeholder='Enter your Phone/Tel Number' 
            onChange={event => setNewPhone(event.target.value)} 
          /> 
        </label>
        </div>
        <div className='py-3'>
          <label className="block text-gray-700 text-sm font-bold" htmlFor="storeWebsite"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="url" 
            placeholder='Enter your Website' 
            onChange={event => setNewWebsite(event.target.value)} 
          /> 
        </label>
        </div>
       <div className='py-3'>
         <label className="block text-gray-700 text-sm font-bold" htmlFor="storeAddress"> 
          <input
            className="py-3 px-4 rounded-md outline-none w-[30%] border border-gray-300" 
            type="text" 
            placeholder='Enter your Address' 
            onChange={event => setNewAddress(event.target.value)} 
          /> 
        </label>
       </div>

        <button className='text-[#00df9a] rounded-md font-bold px-10 py-3 my-3 bg-black cursor-pointer'>
          Add your Store!
        </button>
    
      </form>
    </div>
    </div>
  )
    
}

export default AddStore;
