import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';
import { useState } from 'react';
// component render a div that used to switch between accounts & codes 

const SwitchDiv = ({setView}) =>{
    const [checked, setChecked] = useState('accounts');
    const btnCheckedColor = '#b30600'
    const btnColor = '#d6dfef'
    const handleChange = (e) =>{
        setChecked(e.target.value)
        setView(e.target.value)
    }
    return (
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
    );
}

export default SwitchDiv;