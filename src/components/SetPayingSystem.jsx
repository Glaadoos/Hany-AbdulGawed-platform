import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LoginBtn from './login'

const SetPayingSystem = ({user, handelUserUpdating, userPayingSystem}) =>{
    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.attributes[3].nodeValue)
  };
  const handleUpdata = () => {
    document.getElementById('wait').classList.add('open')
    if(value ==='MPS' || value ==='LPS'){
        handelUserUpdating(value)
    }
    setTimeout(()=>{
        window.location.href = 'http://localhost:3000/'
    }, 4000)
  };

    // console.log(localStorage.getItem("userPayingSystem"))
    if(localStorage.getItem("userPayingSystem") === 'null' || localStorage.getItem("userPayingSystem") === 'none'){
        return(
            <div>
                <h1 className="title paying-system" style={{textAlign:'center', marginTop:'50px'}}
                >نظام الاشتراك</h1>
    
                <div className='paying-system-paragraph'>
    
                    <div className='radio-group'>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Chose one:</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                
                                onChange={handleChange}
                            >
                                <FormControlLabel value="MPS" control={<Radio />} label="MPS" />
                                <FormControlLabel value="LPS" control={<Radio />} label="LPS" />
                            </RadioGroup>
                        </FormControl>
                    </div>
    
                    <pre className="paragraph ">
                        <h3 className="eng">Month Paying System(MPS): </h3>
                        
                        أنك تشترك في الحصص بالشهر بحيث ان كل اول شهر جديد تدفع حق حصص الشهر كله<br/><br/>
                        <h3 className="eng">Lecture Paying System(LPS):</h3>
                        
                        أنك تشترك في الحصص بالحصة بحيث انك تدفع حق كل حصة لوحدها<br/>
                        <h3
                            style={{color:'red'}}
                        >:ملحوظة </h3>
                        IT بعد اما تحط نظام الاشتراك مش هتقدر تغيره الا عن طريق انك ترجع لل <br/><br/>
                        <button
                        onClick={handleUpdata}
                            style={{width:'fit-content', margin: 'auto'}}
                        >تأكيد
                        </button>
                        <p id='wait'  style={{margin: 'auto', display:'none'}}>wait</p>
                    </pre>

                </div>
            </div>
        );
    }

    if(userPayingSystem !== undefined || userPayingSystem !== 'none'){
        return(
            <h1 style={{textAlign:'center', marginTop:'200px'}}>
             لا يمكنك تغير  نظام الاشتراك بعد تعيينه
                <br />
                اذا اردت تغيير نوع الاشترك ITأطلب المساعدة من  ال   
            </h1>
        )
    }
    if(user ===null){
        return (
            <h1 style={{textAlign:'center', marginTop:'200px'}}>
                يرجي تسجيل الدخول
                <br />
                <LoginBtn/>
            </h1>
        )
    }
}

export default SetPayingSystem;