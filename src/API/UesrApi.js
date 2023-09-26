const dayjs  = require('dayjs')

const accountsapi = 'https://hany-server.netlify.app/.netlify/functions/api/accounts'


export const getAll= async()=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(accountsapi, optiones).then(res => res.json())
    } catch(err){
        console.error(err, 'catch in UserAPI>getAll')
    }
    const data = await res
    return(data);
}

export const getSpecific= async(email)=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
        }
    try{
        res = await fetch(`${accountsapi}/account/${email}`, optiones).then(res => res.json())
    } catch(err){
        res =false; 
        console.error(err, 'catch in UserAPI>getSpecific')
    }
    const data = await res
    return(data);
}

export const createUser= async(name,email,payingSystem)=>{
    let res;
    const user ={
        "name":name,
        "email": email,
        "payingSystem": payingSystem
    }
    let optiones = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    try{
        res = await fetch(`${accountsapi}`, optiones).then(res => res.json())
    } catch(err){
        console.error(err, 'catch in UserAPI>createUser')
    }
    const data = await res
    return(data);
}

export const updateUserPayingsystem= async(email, changableValue)=>{
    const bodyValue ={
        "payingSystem":changableValue
    }
    let optiones = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyValue)
        }
    try{
        await fetch(`${accountsapi}/${email}`, optiones).then(res => res.json())
        console.log("Updated")
    } catch(err){
        console.error(err, 'catch in UserAPI>updateUserPayingsystem')
    }

}

export const getAvailableCodes= async(email)=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(`${accountsapi}/availablecodes?user=${email}`, optiones).then(res => res.json())
    } catch(err){
        console.error(err, 'catch in UserAPI>getAvailableCodes')
    }
    const data = await res
    return(data);
}
export const updateAvailableCodes= async(email, changableValue)=>{
    const bodyValue ={
        "availableCodes":{
            'branch':'Algebra',
            'order':changableValue[0],
            'code':changableValue[1],
            'date': changableValue[0].indexOf('revision') !== -1 ? 'Open':dayjs().format(),
        }
    }
    let optiones = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyValue)
        }
    try{
        await fetch(`${accountsapi}/${email}`, optiones).then(res => res.json())
        console.log("Updated")
    } catch(err){
        console.error(err, 'catch in UserAPI>updateAvailableCodes')
    }

}