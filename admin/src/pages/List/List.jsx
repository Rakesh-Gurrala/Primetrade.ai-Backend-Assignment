import React, {useState} from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'


const List = ({url}) => {

  const [list,setList] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/sweet/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  const handleDelete = async (id) => {
    const ok = window.confirm('Are you sure you want to delete this item?');
    if (!ok) return;
    try {
      setDeletingId(id);
      const response = await axios.post(`${url}/api/sweet/remove`, { id });
      if (response?.data?.success) {
        toast.success(response.data.message || 'Removed');
        fetchList();
      } else {
        toast.error(response?.data?.message || 'Remove failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while removing');
    } finally {
      setDeletingId(null);
    }
  }


  return (
    <div className='list add flex-col'>
      <p>All Sweets List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return (
              <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt=""/>
                <p className="name">{item.name}</p>
                <p className="category">{item.category}</p>
                <p className="price">{item.price}</p>
                <div className="action">
                  <button type="button" onClick={() => handleDelete(item._id)} disabled={deletingId===item._id}>
                    {deletingId===item._id ? 'Removing...' : 'Delete'}
                  </button>
                </div>
              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
