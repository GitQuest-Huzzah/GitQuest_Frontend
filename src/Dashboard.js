import React, {useEffect} from 'react'
import axios from 'axios'


export const Dashboard = () => {

  const fetchData = async() => {
    const response = await axios.get('https://gitgoingslackbot.uc.r.appspot.com/api/auth/me');
    console.log(response)
  }
 
  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div>Dashboard</div>
  )
}
