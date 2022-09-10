const Item = (props) => {
    const {listing_id, url, MainImage, title, currency_code, price,  quantity} = props;

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
        switch(currency_code){
            case quantity < 11:
                return 'item-quantity level-low'
            case quantity < 21 && quantity > 10:
                return 'item-quantity level-medium'
            case quantity > 20:
                return 'item-quantity level-high'
            default:
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
            <p className={drowLevel(quantity)}>{quantity}</p>
            </div>
            </div>
    )
   
}

export default Item