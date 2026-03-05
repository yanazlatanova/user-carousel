import React from 'react'
import { UsersContext } from './UsersContext'
import type { UsersContextValue } from './UsersContext'

export const useUsers = (): UsersContextValue => {
    const context = React.useContext(UsersContext)
    if(!context) {
        console.error("useUsers have to be used inside a UsersProvider");
        throw new Error('UsersContex error encountred.')
    }
    return context
}