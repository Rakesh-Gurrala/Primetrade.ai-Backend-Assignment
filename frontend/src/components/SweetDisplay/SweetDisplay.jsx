import React, {useContext} from 'react'
import './SweetDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import SweetItem from '../SweetItem/SweetItem';

const SweetDisplay = ({category}) => {
    
    const {sweet_list} = useContext(StoreContext);


  return (
    <div className='sweet-display' id='sweet-display'>
      <h2>Top Sweets near you</h2>
      <div className="sweet-display-list">
         {sweet_list.map((item, index)=>{

            if (category==="All" || category===item.category){ 
                return <SweetItem key={index}  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
            
   })}
      </div>
    </div>
  )
}

export default SweetDisplay
