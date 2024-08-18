import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState } from 'react';
import * as userApi from "../../../API/UesrApi";
import * as CodeAPI from '../../../API/CodeAPI';
import UserCard from './UserCard';
import SwitchDiv from './SwitchElement';
import LoadingScreen from '../loadingScreen'
import {TableHead, Col} from './Tables';
import { getAll } from '../../../API/LessonsAPI';



const DashBoard = ({currentUser}) =>  {
// state variables
    const [users, setUsers] = useState([])
    const [codes, setCodes] = useState([])
    const [lessons, setLessons] = useState([])
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState('accounts')
    const Branches =['Algebra', 'Calculus', 'Statics', 'Dynamics', 'SpatialGeomatry']
// essential functions
    //names sorter function 
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
    // get users & branches codes from server function
    const getData = async() =>{
        let usersData = await userApi.getAll().then(data =>{return data})
        let branchesLessons = await getAll('algebra').then(data =>{return data[0].lessons})
        let branchCodes =[];
        Branches.map(async(branch) => {
            let codesData = await CodeAPI.getAll(branch).then(data =>{return data})
            codesData.push({"branch":`${branch}`,"order":'',"codes":''})
            branchCodes.push(codesData)
        })
        return[usersData, branchCodes, branchesLessons]
    }
// fetch date & set loading screen 
    useEffect(() =>{
        const Fetch = async()=>{
            let data = await getData().then(data =>{return data});
            setUsers(data[0]);
            setCodes(data[1]);
            setLessons(data[2]);
            setLoading(false)
        }
        Fetch();
    },[])

    return (
        <>
            <UserCard currentUser={currentUser} />
            <SwitchDiv setView={setView} />
            { loading ?
                <LoadingScreen />
            :
                <div className='table-responsive' style={{overflowX:'auto'}}>
                    <Table>
                        {view === 'accounts' ?
                            // accounts
                                <>
                                    <TableHead args={['#','Name','Email','Payinig system', 'Codes']}/>
                                    <tbody>
                                        {users.sort((a, b) => a.name.localeCompare(b.name))
                                            .map((user, num) => {
                                                return(
                                                    <tr key={num}>
                                                        <Col role={'rank'} data={num+1} index={num}/>
                                                        <Col id={user.id} role={'name'} data={user.name} index={num}/>
                                                        <Col id={user.id} role={'email'} data={user.email} index={num}/>
                                                        <Col id={user.id} role={'payingSystem'} data={user.payingSystem} index={num}/>
                                                        <Col role={'rank'} data={user.availableCodes.length} index={num}/>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </>
                            :
                            // codes
                            view === 'codes' ?
                                <>
                                    <TableHead args={['#','Branch','Order','Codes']}/>
                                    <tbody>
                                        {codes.map(ele => ele.sort((a, b) => a.order.localeCompare(b.order))
                                        .map((code, num) => {
                                            return(
                                                <tr key={num}>
                                                    <Col role={'rank'} data={num+1} index={num}/>
                                                    {
                                                        code.branch ?
                                                        // Branch name
                                                            <>
                                                                <Col role={'rank'} data={code.branch} index={num}/>
                                                                <Col role={'rank'} data={code.order} index={num}/>
                                                            </>
                                                        :
                                                        // lesson data
                                                            <>
                                                                <Col role={'rank'} data={''} index={num}/>
                                                                <Col role={'rank'} data={code.order} index={num}/>
                                                                <Col role={'codes'} data={code.code.join(', ')} index={num}/>
                                                            </>
                                                    }
                                                </tr>
                                            );
                                        }))}
                                    </tbody>
                                </>
                            : 
                            // lessons
                                <>
                                    <TableHead args={['#','Name','Order']}/>
                                    <tbody>
                                        {lessons.map((lesson, num) => {
                                            return(
                                                <tr key={num}>
                                                    <Col role={'rank'} data={num+1} index={num}/>
                                                    <Col role={'name'} data={lesson.name} index={num}/>
                                                    <Col role={'order'} data={lesson.order} index={num}/>
                                                    
                                                </tr>
                                            );
                                        })}
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