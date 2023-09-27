import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const TableHead = ({args}) =>{
    return (
        <thead>
            <tr>
                {args.map((arg,num) =>{
                    return(<td key={num}>{arg}</td>)
                })}
            </tr>
        </thead>
    );
}

export const Col = ({role ,data, index}) =>{
    const [hidden, setHidden] = useState(true);
    if(role === 'codes'){
        const handleChange = (e) =>{
            let target = e.target.nextSibling
            setHidden(!hidden);
            if(hidden){
                target.classList.remove('hidden')
            }else{
                target.classList.add('hidden')
            }
        }
        return (
            <td key={index}>
                <Button
                    variant="dark"
                    aria-expanded={hidden}
                    onClick={handleChange}
                >
                    Show
                </Button>
                <p className='hidden' id='codes-data'>{data}</p>
            </td>
        );
    }else{
        return (
            <td key={index}><h5>{data}</h5></td>
        );
    }
}

