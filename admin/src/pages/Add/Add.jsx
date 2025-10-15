import React, { useState, useEffect } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = () => {

    const url = "http://localhost:4000";

    const [image,setImage] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [message, setMessage] = useState(null);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"flat_lay_indian_sweets"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    useEffect(() => {
        // create a preview URL when image changes and revoke on cleanup
        if (image) {
            const url = URL.createObjectURL(image);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreviewUrl(null);
    }, [image]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name',data.name)
            formData.append("description", data.description);
            formData.append("price",String(data.price))
            formData.append("category",data.category)
            formData.append("image",image)

            const response = await axios.post(`${url}/api/sweet/add`, formData);
            if (response?.data?.success) {
                setData({
                    name:"",
                    description:"",
                    price:"",
                    category:"flat_lay_indian_sweets"
                })
                setImage(false)
                toast.success(response.data.message)
                setMessage(response.data.message || 'Saved successfully')
            } else {
                setMessage(response?.data?.message || 'Upload failed')
            }
        } catch (err) {
            console.error(err);
            toast.error(response.data.message)
            setMessage(err?.response?.data?.message || 'An error occurred while uploading')
        }
    }

    
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image" className="upload-label">
                {previewUrl ? (
                    <img src={previewUrl} alt='selected' className='preview' />
                ) : (
                    <img src={assets.upload_area} alt='upload-area' />
                )}
            </label>
            <input accept="image/*" onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </div>
        <div className="add-product-name">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className='add-product-description flex-col'>
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here'></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select onChange={onChangeHandler} name='category'>
                    <option value="flat_lay_indian_sweets">flat_lay_indian_sweets</option>
                    <option value="assorted_baked_sweets">assorted_baked_sweets</option>
                    <option value="tasty_turkish_delight">tasty_turkish_delight</option>
                    <option value="orange_roll_barfee">orange_roll_barfee</option>
                    <option value="browen_jammu">browen_jammu</option>
                    <option value="color_sweets">color_sweets</option>
                    <option value="all_sweets">all_sweets</option>
                    <option value="color_sweets_two">color_sweets_two</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' />
            </div>
        </div>
                <button type='submit' className='add-btn'>ADD</button>
                {message && <p className='form-message'>{message}</p>}
      </form>
    </div>
  )
}

export default Add
