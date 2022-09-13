import './Listing.css'
import PropTypes from 'prop-types'
import Item from './Item/Item'

const Listing = ({items}) => {
   const filtereditems = items.filter(item => item.state === "active")

   const itemsList = filtereditems.map(item => {
       return (
        <Item 
            item={item} key={item.listing_id}/>
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