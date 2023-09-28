import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Ui } from './EditTools';



export const TableHead = ({args}) =>{
    return (
        <thead>
            <tr>
                {args.map((arg,num) =>{
                    return(<th key={num}>{arg}</th>)
                })}
            </tr>
        </thead>
    );
}

export const Col = ({role ,data, index}) =>{
    // Hide The Codes State
    const [hidden, setHidden] = useState(true);
    // Show Edit btn State
    const [tools, setTools] = useState(false);
    // Show Edit Input State
    const [editView, setEditView] = useState(false);

    // Mouse Over & Out On Edit aria Event Handler Functions
    const mouseOver = (e) =>{
        setTools(true)   
    }
    const mouseOut = (e) =>{
        setTools(false)     
    }
    
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
                <p className='hidden' onMouseOver={!hidden ? hidden : null} id='codes-data'>{data}</p>
            </td>
        );
    }else{
        return (
            <td onMouseOver={mouseOver} onMouseOut={mouseOut} key={index}>
                {tools && role!== 'rank' ? 
                    <h5 className={!editView ?  'editable' : 'editable flex-col'} >
                        {data}
                        <Ui editView={editView} setEditView={setEditView} />
                    </h5>
                    :   <h5>{data}</h5>
                }
            </td>
        );
    }
}

