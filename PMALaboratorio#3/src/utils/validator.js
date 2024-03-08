'use strict'

import { hash, compare } from 'bcrypt'

export const encrypt = (password)=>{
    try{
        return hash(password, 10)
    }catch(err){
        console.error(err)
        return err
    }
}

export const checkPassword = async(password, hash)=>{
    try{
        return await compare(password, hash)
    }catch(err){
        console.error(err);
        return err
    }
}

export const checkUpdate = (data, userId) => {
    if (userId) {
        if (
            Object.entries(data).length === 0 ||
            data.password ||
            data.password == '' ||
            data.rol ||
            data.rol == ''  
        ) {
            return false
        }
        return true
    } else {
        return true
    }
}

export const checkUpdateAdmin = (data, userId) => {
    if (userId) {
        if (
            Object.entries(data).length === 0 ||
            data.password ||
            data.password == ''
        ) {
            return false
        }
        return true
    } else {
        return true
    }
}