import './Item.css'

const Item = (props) => {
    const {listing_id, url, MainImage, title, currency_code, price, quantity} = props.item;

    const drowPrice = (currency_codem, price) => {
        switch(currency_codem){
            case 'USD':
                return `$${price}`
            case 'EUR':
                return `€${price}`
            default:
                return `${price} ${currency_codem} `
        }
    }

    const drowLevel = (quantity) => {
        if(quantity < 11){
            return 'item-quantity level-low'
        }
        if(quantity < 21 && quantity > 10){
            return 'item-quantity level-medium'
        }
        if(quantity > 20){
            return 'item-quantity level-high'
        }
        else {
            return 'item-quantity'
        }
    }

    const drowTitle = (title) => {
        if(title.length > 51){
            return `${title.slice(0, 51)}...`
        } else {
            return title
        }
    }
   
    return (
        
            <div className="item" key={listing_id}>
            <div className="item-image">
            <a href={url}>
            <img src={MainImage.url_570xN} alt={title}></img>
                </a>
            </div>
            <div className="item-details">
            <p className="item-title">{drowTitle(title)}</p>
                <p className="item-price">{drowPrice(currency_code, price)}</p>
            <p className={drowLevel(quantity)}>{quantity} left</p>
            </div>
            </div>
    )
   
}

export default Item