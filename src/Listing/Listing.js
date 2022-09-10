import './Listing.css'
import PropTypes from 'prop-types'
import Item from './Item/Item'

const Listing = ({items}) => {
   
   const itemsList = items.map(item => {
       return (
        <Item 
            listing_id={item.listing_id} url={item.url}  MainImage={item.MainImage} title={item.title} currency_code={item.currency_code} 
            price={item.price}  quantity={item.quantity}/>
       )
   })

    return (
        <div className="item-list">
           {itemsList}
        </div>
            )
}


Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  
  Listing.defaultProps = {
    items: [],
  }

export default Listing;