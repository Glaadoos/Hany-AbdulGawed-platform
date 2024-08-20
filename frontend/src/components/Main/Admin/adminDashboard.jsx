import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userApi from "../../../API/UesrApi";
import * as lessonsApi from "../../../API/LessonsAPI";
import * as CodeAPI from '../../../API/CodeAPI';
import UserCard from './UserCard';
import SwitchDiv from './SwitchElement';
import LoadingScreen from '../loadingScreen'
import {TableHead, Col} from './Tables';



const DashBoard = ({currentUser}) =>  {
    const [users, setUsers] = useState([])
    const [codes, setCodes] = useState([])
    const [lessons, setLessons]= useState([])
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState('accounts')
    const [search, setSearch] = useState('')
    const Branches =['Algebra', 'Calculus', 'Statics', 'Dynamics', 'SpatialGeomatry']

    // get users & branches codes from server function
    const getData = async() =>{
        let lessons =[]
        let usersData = await userApi.getAll().then(data =>{return data})
        let branchCodes =[];
        Branches.map(async(branch) => {
            let lesson= await lessonsApi.getAll(branch.toLowerCase()).then(data =>{return data})
            lesson.sort((a, b) => a.order.replace(branch.toLowerCase(), '') - b.order.replace(branch.toLowerCase(), ''))
            lessons.push(...lesson)
            let codesData = await CodeAPI.getAll(branch).then(data =>{return data})
            codesData.push({"branch":`${branch}`,"order":'',"codes":''})
            branchCodes.push(codesData)
        })
        return[usersData, branchCodes, lessons]
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
            <SwitchDiv view={view} setView={setView} setSearch={setSearch} />
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
                                                        <Col view={view} id={user.id} role={'name'} data={user.name} index={num}/>
                                                        <Col view={view} id={user.id} role={'email'} data={user.email} index={num}/>
                                                        <Col view={view} id={user.id} role={'payingSystem'} data={user.payingSystem} index={num}/>
                                                        <Col role={'rank'} data={user.availableCodes.length} index={num}/>
                                                        <Link to={`/admin/user?id=${encodeURIComponent(user.email)}`}><button variant="contained">View</button></Link>
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
                                        {codes.filter(branchCodes => {
                                            if(search.length !== 0 ) return branchCodes[4].order.toLowerCase().includes(search.toLowerCase())
                                            else if(search.length === 0) return true
                                            else return true
                                        }).map(ele => ele.sort((a, b) => a.order.localeCompare(b.order))
                                        .map((code, num) => {
                                            // console.log(code)
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
                                    <TableHead args={['#','Branch','Name','Order', 'Parts']}/>
                                    <tbody>
                                        {lessons.filter(lesson => {
                                            if(search.length !== 0 ) return lesson.order.toLowerCase().includes(search.toLowerCase())
                                            else if(search.length === 0) return true
                                            else return true
                                        })
                                        .map((lesson, num) => {
                                            return(
                                                <tr key={num}>
                                                    <Col role={'rank'} data={num+1} index={num}/>
                                                    <Col view={view} id={[lesson.order, lesson.branch]} role={'branch'} data={lesson.branch} index={num}/>
                                                    <Col view={view} id={[lesson.order, lesson.branch]} role={'name'} data={lesson.name} index={num}/>
                                                    <Col view={view} id={[lesson.order, lesson.branch]} role={'order'} data={lesson.order} index={num}/>
                                                    <Col role={'rank'} view={view} id={[lesson.order, lesson.branch]} data={lesson.parts.length} index={num}/>
                                                    <Link to={`/admin/lessons?order=${lesson.order}&branch=${lesson.branch}`}><button variant="contained">View</button></Link>
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