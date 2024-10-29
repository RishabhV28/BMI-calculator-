import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(''); 
  const [height, setHeight] = useState('');
  const [bmi, setBmi ]= useState('');
  const [message, setMessage ]=useState('');

  let calcBmi =(e) =>{
    e.preventDefault();
    if(weight===0|| height ===0){
      alert('pleas enter a valid weight or height')
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('Your are underweight')
      }
      else if (bmi>=25 && bmi<30) {
        setMessage('Your have a healthy bmi')
      }
      else {
        setMessage("your are overweight")
      }
    }
  }

  let reload=() =>
    window.location.reload()


  return (
    <>
      <div class='mainapp'>
  <div>
    <h2>BMI Calculator</h2>
    <form onSubmit={calcBmi}>
      <div class='weightdiv'>
        <label class='weightlabel'htmlFor="">Weight (lbs)  </label>
        <input class='weightinput' type="text" placeholder='Enter weight' value={weight}  onChange={(e)=> setWeight(e.target.value)}/>
      </div>
      <div class='heightdiv'>
        <label class='heightlabel' htmlFor="">Height (inches) </label>
        <input class='heightinput' type="text" placeholder='Enter height' value={height} onChange={(e)=> setHeight(e.target.value)} />
      </div>
      <div>
        <button class='btn1'>Submit</button>
        <button class='btn2' onClick={reload} type='button'>Reload</button>
      </div>
      <div class='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
    </form>
  </div>
        
      </div>
      
    </>
  )
}

export default App
