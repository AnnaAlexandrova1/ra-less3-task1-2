import './App.css';
import Stars from './stars/Stars';
import Listing from './Listing/Listing';
import data from './data/data.json'

function App(){
  return (
    <div className="App">
      <div className='task-1'>
        <span className='task-title'>Задача №1. Рейтинг фильмов
        </span>
        <div>
        <Stars count={1}/>
        <Stars count={2}/>
        <Stars count={3}/>
        <Stars count={4}/>
        <Stars count={5}/>
        </div>
      </div> 

      <div className='task-2'>
        <Listing items={data}/>
      </div>
    </div>
  );
}

export default App;
