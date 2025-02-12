import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter'

function App() {
 
 const [isDark,setMode]=useState(false)
 const handelChange=()=>{
  setMode(!isDark)

 }

 //mood state
 const [mood, setMood] = useState('neutral');

 const handleMoodChange = (e) => {
  setMood(e.target.value);
};

const getBackgroundColor = () => {
  switch (mood) {
    case 'happy':
      return 'lightyellow';
    case 'sad':
      return 'lightblue';
    case 'neutral':
      return 'lightgray';
    default:
      return 'white';
  }
};

const getEmoji = () => {
  switch (mood) {
    case 'happy':
      return '😊';
    case 'sad':
      return '😢';
    case 'neutral':
      return '😐';
    default:
      return '';
  }
};


  return (
    <>
    <div style={{
      backgroundColor:isDark?'#333':'#fff',
      color:isDark?'#fff':'#333',
      height:'100vh'
    }}>
      <h1>Vite + React</h1>
      <Counter></Counter>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam nemo perspiciatis veritatis facere at illum suscipit accusamus, fugit aliquam ullam, quidem eligendi hic alias nostrum esse possimus necessitatibus omnis.</p>

     <button onClick={handelChange}> Change Mode  </button>
     <fieldset>
<legend>Mood</legend>
 
     <div className="App" style={{ backgroundColor: getBackgroundColor(), height: '100vh' }}>
      <div className="container text-center pt-5">
        <h1>Mood Tracker</h1>
        <p>Current Mood: <strong>{mood} {getEmoji()}</strong></p>
        <div className="dropdown">
          <select className="form-select" value={mood} onChange={handleMoodChange}>
            <option value="neutral">Neutral</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
          </select>
        </div>
      </div>
    </div>
    </fieldset>
     </div>
   
    </>
  )
}

export default App
