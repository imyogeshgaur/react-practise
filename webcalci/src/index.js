import React from 'react'
import ReactDOM from 'react-dom'
import {additionOfNumbers,substractionOfNumbers,multiplicationOfNumbers,divisionOfNumbers,maximumOfNumbers,minimumOfNumbers,remainderOfNumbers} from './App'
import './index.css'

ReactDOM.render(
 <>
 <h1 id='heading'>My Calculator</h1>
 <h2 id ="add">Addition of the Numbers is <span id="addText">{additionOfNumbers(22,7)}</span></h2> 
 <h2 id ="sub">Substraction of the Numbers is <span id="subText">{substractionOfNumbers(22,7)}</span></h2>
 <h2 id ="mult">Multiplication of the Numbers is <span id ="multText">{multiplicationOfNumbers(22,7)}</span></h2>
 <h2 id ="div">Division of the Numbers is <span id="divText">{divisionOfNumbers(22,7)}</span></h2>
 <h2 id ="rem"> Modulus(Remainder) of the Numbers is <span id="remText">{remainderOfNumbers(22,7)}</span></h2>
 <h2 id ="max">Maximum of the Numbers is <span id="maxText">{maximumOfNumbers(22,7)}</span></h2>
 <h2 id ="min">Minimum of the Numbers is <span id="minText">{minimumOfNumbers(22,7)}</span></h2>
 </>
 ,document.getElementById('root'));

