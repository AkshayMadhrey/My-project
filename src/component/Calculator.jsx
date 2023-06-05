import React, { useState } from "react";
import './Calculator.css'

function Calculator() {
   const [result, setResult] = useState(" ")


   const clickHandler = (e) => {
      setResult(result.concat(e.target.value))
   }
   const clearDisplay = () => {
      setResult("")
   }
   const calculate = () => {
      setResult(eval(result).toString())
      // console.log(`Final Result is ${eval(result)} ........`)
   }
   const backspace = () => {
   setResult(result.slice(0, - 1))
   }

   return (
      <div className="calc">
         <div className="heading">
            <h2>Calculator</h2>
         </div>
         <input type="text" placeholder="0" id="answer" value={result} />
         <input type="button" value="9" className="button" onClick={clickHandler} />
         <input type="button" value="8" className="button" onClick={clickHandler} />
         <input type="button" value="7" className="button" onClick={clickHandler} />
         <input type="button" value="6" className="button" onClick={clickHandler} />
         <input type="button" value="5" className="button" onClick={clickHandler} />
         <input type="button" value="4" className="button" onClick={clickHandler} />
         <input type="button" value="3" className="button" onClick={clickHandler} />
         <input type="button" value="2" className="button" onClick={clickHandler} />
         <input type="button" value="1" className="button" onClick={clickHandler} />
         <input type="button" value="0" className="button" onClick={clickHandler} />
         <input type="button" value="." className="button" onClick={clickHandler} />
         <input type="button" value="+" className="button" onClick={clickHandler} />
         <input type="button" value="-" className="button" onClick={clickHandler} />
         <input type="button" value="*" className="button" onClick={clickHandler} />
         <input type="button" value="/" className="button" onClick={clickHandler} />
         <input type="button" value="%" className="button" onClick={clickHandler} />
         <input type="button" value="clear" className="button cl-btn"
            onClick={clearDisplay} />
         <input type="button" value="=" className="button button1" onClick={calculate} />
         <input type="button" value="Back" className="button button2" onClick={backspace} />
      </div>
   )

}
export default Calculator;