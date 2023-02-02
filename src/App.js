import { useState } from 'react';
import './App.css';
import Options from './components/Options';

function App() {
  const [salary, setSalary] = useState("")
  const [tax, setTax] = useState(0)
  const [pension, setPension] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [netSalary, setNetSalary] = useState(0)
  
  const [taxPayment,setTaxPayment] = useState(0)
  const [pensionPayment,setPensionPayment] = useState(0)
  const [insurancePayment,setInsurancePayment] = useState(0)

  function calculateTax(value) {
    setTax(value)
    setTaxPayment(salary / 100 * value)
  }

  function calculatePension(value) {
    setPension(value)
    setPensionPayment(salary / 100 * value)
  }

  function calculateInsurance(value) {
    setInsurance(value)
    setInsurancePayment(salary / 100 * value)
  }

  function calculateSalary(e) {
    e.preventDefault()
    setNetSalary(salary - taxPayment - pensionPayment - insurancePayment)
  }

  return (
    <div>
      <form onSubmit={calculateSalary}>
        <h3>Laske nettopalkka</h3>
        <div>
          <label>Bruttopalkka</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <div>
          <label>Vero</label>
          <input type="number" value={tax} onChange={e => calculateTax(e.target.value)}/>
          <output>{taxPayment}€</output>
        </div>
        <div>
          <label>Työeläke</label>
          <select value={pension} onChange={e => calculatePension(e.target.value)}>
            <Options min={0} max={10}/>
          </select>
          <output>{pensionPayment}€</output>
        </div>
        <div>
          <label>Työttömyysvakuutus</label>
          <select value={insurance} onChange={e => calculateInsurance(e.target.value)}>
            <Options min={0} max={5}/>
          </select>
          <output>{insurancePayment}€</output>
        </div>
        <div>
          <label>Nettopalkka</label>
          <output>{netSalary}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;