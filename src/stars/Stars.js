import Star from './Star/Star'
import './Stars.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const Stars = ({count = 0}) => {
    const number = parseInt(count)
    if(Number.isNaN(number)) {
        return null;
    }
    if(number < 1 || number > 5){
        return null;
    }

    const starsList = []

    for(let i = 1; i <= count; i += 1){
        starsList.push(<li key={nanoid()}><Star /></li>)
    }

    return (
        <ul className='card-body-stars'>
           {[starsList]}
        </ul>
    )
}

Star.propTypes = {
    count: PropTypes.number.isRequired,
}

Star.defaultProps = {
    count: 0,
}

export default Stars;