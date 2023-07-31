async function response(){
    const user = {
        "id": "qweqwe@hotmail.com",
        "name":"qweqwe",
        "email": "qweqwe@hotmail.com",
        "payingSystem": "LPS"
    }
    let optiones = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    let res 
    try{
        res = await fetch(`http://localhost:5000/accounts/`, optiones)
    } catch(err){
        console.error(err)
    }
    const result = await res.json();
    console.log(result)
}

response();