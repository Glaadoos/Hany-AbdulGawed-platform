const codesapi = 'http://localhost:8888/.netlify/functions/api'





export const getAll= async(branch, order, code)=>{
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
    }
    const data = await res
    return(data);
}

export const UpdataOrderCodes= async(branch, order, code)=>{
    let res;
    let optiones = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }
    try{
        res = await fetch(`${codesapi}/${branch}/delete?order=${order}&code=${code}`, optiones).then(res => res.json())
    } catch(err){
        console.error(err); 
    }
    const data = await res
    return(data);
}




