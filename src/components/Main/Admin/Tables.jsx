import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Ui } from './EditTools';


// return one table header that represented with {args} props
export const TableHead = ({args}) =>{
    return (
        <thead>
            <tr>
                {args.map((arg,num) =>{
                    return(<th scope="col" key={num}>{arg}</th>)
                })}
            </tr>
        </thead>
    );
}

// return one table column
/* 
    role => for differentiate between Branch codes & accounts
    data => the data will be show in column
    index => special key for object returned
*/
export const Col = ({role ,data, index}) =>{
    // Hide The Codes State
    const [hidden, setHidden] = useState(true);
    // Show Edit btn State
    const [tools, setTools] = useState(false);
    // Show Edit Input State
    const [editView, setEditView] = useState(false);

    // Mouse Over & Out On Edit aria Event Handler Functions
    const mouseOver = () =>{
        setTools(true)   
    }
    const mouseOut = () =>{
        setTools(false);   
    }
    
    if(role === 'codes'){
        // return special table column for codes 
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
                <p className='hidden'  id='codes-data'>{data}</p>
            </td>
        );
    }else{
        // return table column
        return (
            // <td onMouseOver={mouseOver} onMouseOut={mouseOut} key={index}>
            <td key={index}>
                {tools && role!== 'rank' ? 
                    <h5 className={!editView ?  'editable' : 'editable flex-col'} >
                        {data}
                        <Ui editView={editView} setEditView={setEditView} role={role} />
                    </h5>
                    :   <h5>{data}</h5>
                }
            </td>
        );
    }
}

