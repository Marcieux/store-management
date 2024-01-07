import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function StoreList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3002/stores')
    .then(response => setData (response.data))
    .catch(error => console.log(error))
  },[]);
  
  const navigate = useNavigate();

  function handleDelete (id) {
    const confirm = window.confirm('Are you sure you want to delete?')
    if (confirm) {
      axios.delete('http://localhost:3002/stores/'+id)
      .then(res => {
        alert("Record Deleted Successfully");
        navigate('/', { replace: true });
        window.location.reload();
      })
    }
  }

  return (
    <div className='text-center'>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] p-10" >
        iFind your Store!
      </h1>
       <table className='mt-15 items-center mx-auto'>
      <thead>
        <tr>
          <th className='p-4 font-bold text-[#00df9a]'>ID</th> 
          <th className='p-4 font-bold text-[#00df9a]'>Store Name</th>
          <th className='p-4 font-bold text-[#00df9a]'>Email</th>
          <th className='p-4 font-bold text-[#00df9a]'>Phone</th>
          <th className='p-4 font-bold text-[#00df9a]'>Website</th>
          <th className='p-4 font-bold text-[#00df9a]'>Address</th>
        </tr>
      </thead>

      <tbody>
        {data.map((store, index) => {
          return (
            <tr key={index}>
              <td className='p-7'>{store.id}</td> 
              <td className='p-7'>{store.name}</td>
              <td className='p-7'>{store.email}</td>
              <td className='p-7'>{store.phoneNumber}</td>
              <td className='p-7'>{store.website}</td>
              <td className='p-7'>{store.address}</td>
              <td>
                  <Link to={`/edit-store/${store.id}`}  className='bg-[#00df9a] rounded-md px-3 py-2 text-black mx-2'>Edit</Link> 
              </td>
              <td>
                  <button onClick={event => handleDelete(store.id)} className='bg-[#00df9a]  rounded-md px-3 py-2 text-black mx-2'>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
      <Link to="/add-store" className='inline-block my-10 w-[200px] bg-[#00df9a] rounded-md font-bold py-3 text-black'>
        Add a new Store!
      </Link>
    </div>
  )
}

export default StoreList
