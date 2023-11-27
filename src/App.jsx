import { useState } from 'react'

import InputBox from './Componets/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'



function App() {

  const [amount, setAmount] = useState(null)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(null)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


 function convert() {

    setConvertedAmount(amount*currencyInfo[to])

  }

  return (
    <>



  <form className='main' action="" onSubmit={(e) =>{
     e.preventDefault()
     convert()
  }
     }>

      <h1>Currency Converter</h1>


    
    <InputBox label='From'
    amount={amount}
     currencyOptions={options}
      OnCurrencyChange={(currency) => setFrom(currency)} 
     onAmountChange={(amount) => setAmount(amount)}
     selectedCurrency={from}
     stylesinp = 'amount'
     />  


    <InputBox label='To' amount={convertedAmount} currencyOptions={options} OnCurrencyChange={(currency) => setTo(currency) } selectedCurrency={to} amountDisabled  stylesinp='result'/>
<button type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
    </form>
  
  
    </>
  )
}

export default App;
