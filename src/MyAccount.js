import React, {useEffect, useState} from 'react'
import { Dashboard } from './Dashboard'
import { Login } from './Login'

export const MyAccount = () => {
const [token, setToken] = useState('');

useEffect(() => {
  console.log(token, 'token in myaccount')
  }, [token])

  return (
    <div>
    {
      token ? <Dashboard token={token} /> : <Login setToken={(response) => setToken(response)}/>
    }
  </div>
  )
}
