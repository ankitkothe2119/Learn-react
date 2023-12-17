import  { useState,useContext} from 'react'
// import  React from 'react'
import UserContext from '../Context/UserContext'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div >
        <h2
        className=' bg-red-600 border-b-red-300 '
        >Login</h2>
        <div className=' flex space-x-2 gap-9'>
        <input type="text"
        className=' bg-green-600' 
        value={username} 
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='UserName' />

        <input type="text"
          value={password} 
          className=' bg-green-600' 
          onChange={(e)=> setPassword(e.target.value)}
          placeholder='Password' />
        <button 
          className=' bg-green-600' 
        onClick={handleSubmit}>Submit</button>
    </div>
          </div>
  )
}
