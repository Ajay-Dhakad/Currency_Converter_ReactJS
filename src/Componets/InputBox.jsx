import React, { useId } from 'react'

function InputBox({

    label,
    amount,
    onAmountChange,
    OnCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    stylesinp,

}) {    

    const id = useId()


    return (
        <>

            <div className='inputboxcont'>
                
                 <input autoFocus placeholder={'Convert ' + label} disabled={amountDisabled} type="number" value={amount}  onChange={(e) => onAmountChange && onAmountChange(e.target.value)} name="" className={stylesinp} id="" /> 
                 <select className='dropdown'  value={(selectedCurrency)} disabled={currencyDisabled} onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)} name="" id=""> 
                 {
                    currencyOptions.map((currency) => 
                        <option key={currency}  value={currency}>{currency.toUpperCase()}</option>
                    )}
                 
                  </select> 
                  </div>


        </>
    )
}

export default InputBox;
