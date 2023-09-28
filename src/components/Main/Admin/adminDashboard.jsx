import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState } from 'react';
import * as userApi from "../../../API/UesrApi";
import * as CodeAPI from '../../../API/CodeAPI';
import UserCard from './UserCard';
import SwitchDiv from './SwitchElement';
import LoadingScreen from '../loadingScreen'
import {TableHead, Col} from './Tables';

const DashBoard = ({currentUser}) =>  {
    const [users, setUsers] = useState([])
    const [codes, setCodes] = useState([])
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState('accounts')
    
    const Branches =['Algebra']
    const sorter = (a, b) => {
        if(typeof a.order === 'number' && typeof b.order === 'number'){
           return a.order - b.order;
        }else if(typeof a.order === 'number' && typeof b.order !== 'number'){
           return -1;
        }else if(typeof a.order !== 'number' && typeof b.order === 'number'){
           return 1;
        }else{
           return a.order > b.order ? 1 : -1;
        }
    }
    const getData = async() =>{
        let userData = await userApi.getAll().then(data =>{return data})
        let branchCodes =[];
        Branches.map(async(branch) => {
            let codesData = await CodeAPI.getAll(branch).then(data =>{return data})
            branchCodes.push(codesData)
        })
        return[userData, branchCodes]
    }
    useEffect(() =>{
        const Fetch = async()=>{
            let data = await getData().then(data =>{return data});
            setUsers(data[0]);
            setCodes(data[1]);
        }
        Fetch();
    },[])
    useEffect(() =>{
        if(codes.length === 0 || users.length === 0){
            setLoading(false)
        }else{
            setLoading(true)
        }
    },[codes, users])


    return (
        <>
            <UserCard currentUser={currentUser} />
            <SwitchDiv setView={setView} />
            { loading?
                <LoadingScreen />
            :
                <div className='table-responsive' style={{overflowX:'auto'}}>
                    <Table>
                        {view === 'accounts' ?
                                <>
                                    <TableHead args={['#','Name','Email','Payinig system', 'Codes']}/>
                                    <tbody>
                                        {users.sort((a, b) => a.name.localeCompare(b.name))
                                            .map((user, num) => {
                                                return(
                                                    <tr key={num}>
                                                        <Col role={'rank'} data={num+1} index={num}/>
                                                        <Col data={user.name} index={num}/>
                                                        <Col data={user.email} index={num}/>
                                                        <Col data={user.payingSystem} index={num}/>
                                                        <Col role={'rank'} data={user.availableCodes.length} index={num}/>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </>
                                
                                :
                                <>
                                    <TableHead args={['#','Order','Codes']}/>
                                    <tbody>
                                        {codes.map(ele => ele.sort((a, b) => a.order.localeCompare(b.order)).map((code, num) => {
                                            return(
                                                <tr key={num}>
                                                    <Col data={num+1} index={num}/>
                                                    <Col data={code.order} index={num}/>
                                                    <Col role={'codes'} data={code.code.join(', ')} index={num}/>
                                                </tr>
                                            );
                                        }))}
                                    </tbody>
                                </>
                            }
                        
                    </Table>
                </div>
            }
        </>
    );
}

export default DashBoard;