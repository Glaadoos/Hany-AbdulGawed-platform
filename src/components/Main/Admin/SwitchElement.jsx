import Switch from '@mui/material/Switch';

const SwitchDiv = ({setView}) =>{

    const handleChange = (e) =>{
        if(e.target.checked){
            setView('codes')
        }else{
            setView('accounts')
        }
    }
    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            <h4>Accounts</h4>
            <Switch onChange={handleChange} />
            <h4>Codes</h4>
        </div>
    );
}

export default SwitchDiv;