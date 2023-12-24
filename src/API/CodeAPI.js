const codesapi = 'https://hany-server.netlify.app/.netlify/functions/api'

export const getAll= async(branch)=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(`${codesapi}/${branch}/getAll`, optiones).then(res => res.json())
    } catch(err){
        res =false; 
        console.error(err, 'catch in CodeAPI>getAll') 
    }
    const data = await res
    return(data);
}

export const getSpecific= async(branch, order, code)=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(`${codesapi}/${branch}/code?order=${order}&code=${code}`, optiones).then(res => res.json())
    } catch(err){
        res =false;
        console.error(err, 'catch in CodeAPI>getSpecific') 
    }
    const data = await res
    return(data);
}

export const UpdataOrderCodes= async(branch, order, code)=>{
    let res;
    let optiones = {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(`${codesapi}/${branch}/?order=${order}&code=${code}`, optiones).then(res => res.json())
    } catch(err){
        console.error(err, 'catch in CodeAPI>UpdataOrderCodes'); 
    }
    const data = await res
    return(data);
}




