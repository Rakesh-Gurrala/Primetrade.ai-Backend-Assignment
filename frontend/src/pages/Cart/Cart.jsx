import React, {useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const {cartItems, sweet_list, removeFromCart, url} = useContext(StoreContext);

  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = sweet_list.find(s => s._id === id);
      if (item) total += item.price * cartItems[id];
    }
    return total;
  }

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {sweet_list.map((item, index) => {
          const qty = cartItems[item._id] || 0;
          if (qty > 0) {
            return (
              <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image && (item.image.startsWith('http') ? item.image : `${url}/images/${item.image}`)} alt={item.name} height={100} width={100} />
                    <p className="cart-item-name">{item.name}</p>
                    <p>₹ {item.price}</p>
                    <p className="cart-item-qty">{qty}</p>
                    <p>₹ {item.price * qty}</p>
                    <p className="cart-item-remove">
                      <button className="remove-btn" onClick={() => removeFromCart(item._id)} aria-label={`Remove ${item.name}`}>
                        <img src={assets.cross_icon} alt="remove" />
                      </button>
                    </p>
                  </div>
                  <hr/>
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
              <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                  <p>Delivery Free</p>
                  <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                  <b>Total</b>
                  <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you havea promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
