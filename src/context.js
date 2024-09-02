import React from 'react'
import User from './classes/User'
const userContext=React.createContext([{}])
export const MyUserProvider=userContext.Provider
export default userContext