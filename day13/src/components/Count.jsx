import { useState } from 'react'
import './Count.css'
const Count = () => {
    const [ won, setWon ] = useState('')
    const [ euro, setEuro ] = useState('')

    const changeWon= (e)=>{
        setWon(e.target.value)
        // setEuro(Number(e.target.value)/1465.72)
        setEuro((Number(e.target.value)/1465.72).toFixed(2))
    }

    const changeEuro = (e) => {
        setEuro(e.target.value)
        setWon(Number(e.target.value)*1465.72)
    } 
  return (
    <div className="Count">
      <div className="box">
        <h5>KRW</h5>
        <input type="number" placeholder="1465.72" value={won} onChange={changeWon}></input> ₩
      </div>  
      <div className="box">
        <h5>EUR</h5>
        <input type="number" placeholder='1' value={euro} onChange={changeEuro} ></input> €
      </div>  
    </div>
  )
}

export default Count
