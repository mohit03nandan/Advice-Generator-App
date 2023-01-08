import React,{useState} from 'react'
import axios from 'axios';
import "./Advice.css"

const Advice = () => {

const [Advice, setAdvice] = useState({
  id: "Number",
  advice:"please Generate Your Advice"

})

const baseURL = "https://api.adviceslip.com/advice"

 const randomAdice = async() => {
   const response =   await axios.get(baseURL);
   try {
    const {id, advice} = response.data.slip;
    setAdvice({
      advice: advice,
      id: id
    })
   } catch (error) {
        console.log(error);
   }
}
function randomize() {
//generating random color for body
 var red = Math.floor(Math.random() * 250 + 0);
 var green = Math.floor(Math.random() * 250 + 0);
 var blue = Math.floor(Math.random() * 250 + 0);

 var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.background = rgbColor;

  red = ("0" + red.toString(16)).substr(-2).toUpperCase();
  green = ("0" + green.toString(16)).substr(-2).toUpperCase();
  blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();

  //generating random color for card
 var red_1 = Math.floor(Math.random() * (100+1));
var green_1 = Math.floor(Math.random() * (100+1));
 var blue_1 = Math.floor(Math.random() * (100+1));
 var rgbColor_1 = 'rgb(' + red_1 + ',' + green_1 + ',' + blue_1 + ')';
 document.getElementById("change").style.background = rgbColor_1;

 red_1 = ("0" + red.toString(16)).substr(-2).toUpperCase();
  green_1 = ("0" + green.toString(16)).substr(-2).toUpperCase();
  blue_1 = ("0" + blue.toString(16)).substr(-2).toUpperCase();
  
}

  return (
    <div>
    <div  id='change' class="card text-center mb-3" style={{width: "38rem", height:"20rem"}}>
    <div class="card-body">
      <h5 class="card-title">Advice  #{Advice.id}</h5>
      <p class="card-text">"{Advice.advice}"</p>
    </div>
    <div>
          <div class="hr-theme-slash-2">
              <div class="hr-line"></div>
              <div class="hr-icon"><i class="material-icons"></i>II</div>
              <div class="hr-line"></div>
          </div>
    </div>

  </div>
  <div onClick={randomize}>
  <button class="btn btn-primary btn-lg btn-outline-dark rounded-circle " onClick={randomAdice} >
       <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/five-dice-2694019-2235940.png" class="rounded float-left dice " alt="dice"/>
  </button>
  </div>
    </div>
  )
}

export default Advice