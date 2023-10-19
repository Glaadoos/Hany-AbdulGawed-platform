import Switch from '@mui/material/Switch';

// component render a div that used to switch between accounts & codes 

const SwitchDiv = ({setView}) =>{
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
            <h4 id='accounts'>Accounts</h4>
            <Switch onChange={handleChange} />
            <h4 id='codes' className='not-checked'>Codes</h4>
        </div>
    );
}

export default SwitchDiv;