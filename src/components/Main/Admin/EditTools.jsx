import { useState } from "react";

export const Ui = ({editView, setEditView}) =>{
    
    const [input, setInput] = useState('');

    // Change View From Edit btn To Edit Input Function
    const handleView = () =>{
        setEditView(!editView)
    }
    // Form input Handler Functions
    const handleInput = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        console.log('Submit handled');
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
                        />
                        <button
                            type="submit"
                            className="editable"
                            onClick={handleSubmit}
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