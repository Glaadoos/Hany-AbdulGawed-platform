import Switch from '@mui/material/Switch';

const SwitchDiv = ({view,setView}) =>{
    const h1_accounts = document.querySelector('#accounts')
    const h1_codes = document.querySelector('#codes')
    const handleChange = (e) =>{
        if(e.target.checked){
            setView('codes');
            h1_accounts.classList.add('not-checked')
            h1_codes.classList.remove('not-checked')
        }else{
            setView('accounts')
            h1_accounts.classList.remove('not-checked')
            h1_codes.classList.add('not-checked')
        }
    }
    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            <h4 
                id='accounts'
            >Accounts</h4>
            <Switch
                onChange={handleChange}
                checked={view === 'codes' ? true : false}
            />
            <h4 
                id='codes' 
                className='not-checked'
            >Codes</h4>
        </div>
    );
}

export default SwitchDiv;