import { useState, useCallback, useEffect, useRef } from 'react';



function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordaRef= useRef(null)
  //use callback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (Character) str += "!@#$%^&*()-_=+[]{}:;~`<,.>?/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, number, Character, setPassword])

  const copyPasswordBTN = useCallback(()=>{
    passwordaRef.current?.select()
    passwordaRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },
  [password])
  //use effect
  useEffect(() => {
    passwordGenerator()
  }, [length, number, Character])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-red text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordaRef}
          />
          <button
          onClick={copyPasswordBTN}
            className='outline-none bg-blue-500 text-yellow-100
         px-3 py-0.5'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              className=' cursor-pointer'
              onChange={(e) => { setNumber((prev) =>!prev) }}
            />
            <label >Numders</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={Character}
              id='characterInput'
              className=' cursor-pointer'
              onChange={(e) => { setCharacter((prev) =>!prev) }}
            />
            <label >Spacle-Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
