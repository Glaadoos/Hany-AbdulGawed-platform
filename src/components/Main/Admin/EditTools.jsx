import { useState } from "react";
import { updateAccount } from "../../../API/UesrApi";

// component for handleing the edit box, will be in next deploy

export const Ui = ({id, editView, setEditView, role}) =>{
    
    const [input, setInput] = useState('');

    // Change View From Edit btn To Edit Input Function
    const handleView = () =>{
        setEditView(!editView)
    }
    // Form input Handler Functions
    const handleInput = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = async(e) =>{
        if(input){
            console.log(e.target.dataset.role);
            if(await updateAccount(id, {
                [e.target.dataset.role]: input
            })){
                setEditView(false);
                setInput('');
                window.location.reload()
            }else{
                alert('something went wrong')
                setEditView(false);
                setInput('');
            }
        }
    }

    return(
        <>
            {
                !editView ? 
                    <button
                        id={"edit-btn"}
                        onClick={handleView}
                    ></button>
                :   
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                            type='text'
                            placeholder="New Value"
                            className="editable"
                            onChange={handleInput}
                            autoFocus={true}
                        />
                        <button
                            type="submit"
                            className="editable"
                            onClick={handleSubmit}
                            data-role={role}
                        >Change</button>
                        <button
                            type="cancel"
                            className="editable"
                            onClick={handleView}
                        >Cancel</button>
                    </form>
            }
        </>
    );
}