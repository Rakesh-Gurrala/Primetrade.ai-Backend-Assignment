import React, { useContext } from 'react'
import './SweetItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const SweetItem = ({id,name,price,description,image}) => {

    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

    const src = image ? (image.startsWith('http') ? image : `${url}/images/${image}`) : '';

  return (
    <div className='sweet-item'>
        <div className='sweet-item-img-container'>
            <img className='sweet-item-image' src={src} alt='' height={300} width={300}/>
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='sweet-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                </div>

            }
        </div>
        <div className="sweet-item-info">
            <div className='sweet-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='sweet-item-description'>{description}</p>
            <p className='sweet-item-price'>₹ {price}</p>
        </div>
    </div>
  )
}

export default SweetItem
