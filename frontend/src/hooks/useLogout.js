import { useState } from "react";

import { useAuthContext} from './useAuthContext'

export const useLogout = () => {

    
    const { dispatch } = useAuthContext()
    
    const logout = async (email,password) => {
        //remove user from storaeg
        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type: 'LOGOUT'})
    }

    return logout
}