import React, {useState, useContext} from 'react'
import { createContext } from 'react'


export const UserContext = createContext()

export default function Context(){
    const [location, setLocation] = useState('home')
    
  return (
    <UserContext.Provider value={{location, setLocation}} ></UserContext.Provider>
  )
}