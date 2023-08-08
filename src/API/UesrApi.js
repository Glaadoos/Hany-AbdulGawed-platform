const api = 'https://hany-server.netlify.app/.netlify/functions/api'




export const getAll= async()=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(api, optiones).then(res => res.json())
    } catch(err){
        console.error(err)
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
        res = await fetch(`${api}/${email}`, optiones).then(res => res.json())
    } catch(err){
        res =false; 
    }
    const data = await res
    return(data);
}

export const createUser= async(id,name,email,payingSystem)=>{
    let res;
    const user ={
        "id": id,
        "name":name,
        "email": email,
        "payingSystem": payingSystem || 'none'
    }
    let optiones = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    try{
        res = await fetch(`${api}`, optiones).then(res => res.json())
    } catch(err){
        console.error(err)
    }
    const data = await res
    return(data);
}

export const updateUser= async(email, changableValue)=>{
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
        await fetch(`${api}/${email}`, optiones).then(res => res.json())
        console.log("Updated")
    } catch(err){
        console.error(err)
    }

}
