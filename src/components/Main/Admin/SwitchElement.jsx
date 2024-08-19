import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// component render a div that used to switch between accounts & codes 

const SwitchDiv = ({view, setView, setSearch}) =>{
    const [checked, setChecked] = useState('accounts');
    const [value, setValue] = useState('');
    const btnCheckedColor = '#b30600'
    const btnColor = '#d6dfef'

    const handelSearchChange = (e) =>{
        if(e.target.value === "clear") {
            setSearch('')
            setValue('')
        }
        else{
            setSearch(e.target.value)
            setValue(e.target.value)
        }
    }
    const handleChange = (e) =>{
        setChecked(e.target.value)
        setView(e.target.value)
    }
    const handelLabel = () =>{
        if(view === 'accounts'){
            return 'Email'
        }else if(view === 'codes'){
            return 'Branch'
        }else if(view === 'lessons'){
            return 'Order'
        }
    }
    const handelPlaceholder = () =>{
        if(view === 'accounts'){
            return 'name@gmail.com'
        }else if(view === 'codes'){
            return 'Algebra'
        }else if(view === 'lessons'){
            return 'algebra1'
        }
    }
    return (
        <>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {['Accounts', 'Codes', 'Lessons'].map((ele, num) => {
                            return(
                                <FormControlLabel key={num} labelPlacement="top" value={ele.toLowerCase()} control={
                                    <Radio
                                        checked={checked === ele.toLowerCase()}
                                        sx={{
                                            color: btnColor,
                                            '&.Mui-checked': {
                                                color: btnCheckedColor,
                                            },
                                        }}
                                        onChange={handleChange}
                                    />} label={ele} />
                            )
                        })}
                </RadioGroup>
            </FormControl>
            <form>
                <label>Search by {handelLabel()}: </label>
                <input style={{display: view !== 'codes' ? 'inline-block' : 'none'}} type="text" placeholder={`eg: ${handelPlaceholder()}`} value={value} onChange={handelSearchChange}/>
                <select style={{display: view === 'lessons'||view === 'codes' ? 'inline-block' : 'none'}} value={value} onChange={handelSearchChange}>
                    <option disabled value="">Order</option>
                    {["algebra", "calculus", "spatialgeomatry", "dynamics", "statics", "revision"].map((ele, num) => {
                        return(
                            <option key={num} value={ele}>{ele}</option>
                        )
                    })}
                    <option value="clear">Clear</option>
                </select>
            </form>
        </>
    );
}

export default SwitchDiv;
/* 




<Autocomplete
                size='small'
                disablePortal
                forcePopupIcon={false}
                options={["algebra", "calculus", "spatial engineering", "dynamics", "statics", "revisiones"]}
                renderInput={(params) => <TextField placeholder="eg:algebra1" {...params} variant="standard" label="Search by order" onChange={(e) => setSearch(e.target.value)} />}
            />





*/