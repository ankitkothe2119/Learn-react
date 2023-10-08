import { useState } from 'react'
import {InputBox,}  from './componants/index'
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    const temp1 = from;
   setFrom(to);
   setTo(temp1);
   const temp =convertedAmount;
    setConvertedAmount(amount)
    setAmount(temp)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1221836825/photo/indian-currency-on-virtual-interface-of-stock-market-data.jpg?s=1024x1024&w=is&k=20&c=ZfSrwlo-Ru0fInJQKa48UI9hsEFBiu-w5bSmyApBTF0=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                   label="From"
                   amount={amount}
                   currencyOptions={options}
                   onAmountChange={(newAmount) => setAmount(newAmount)}
                   onCurrencyChange={(currency) => setFrom(currency)}
                   selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>setTo(currency)}
                selectCurrency={to}
                amountDisable
                onAmountChange={(newAmount)=> setAmount(amount)}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert{from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
