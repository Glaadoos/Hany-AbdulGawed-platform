import { Table, Card ,Row ,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useEffect, useState } from 'react';


const DashBoard = ({currentUser}) =>  {
    const [users, setUsers] = useState([])
    
    useEffect(() =>{
        
    },)

    return (
        <>
            <Card style={{ width: '18rem' }} className='p-0'>
                <Row>
                    <Col className='p-0'>
                        <Card.Img  variant="top"  src={currentUser.picture} className='img-fluid p-0'/>
                    </Col>
                    <Col className='pl-0 pr-auto'>
                        <Card.Footer className='p-0'>
                            <Card.Title>{currentUser.name}</Card.Title>
                            <Card.Text>
                                {currentUser.email} <br/>
                                {currentUser.payingSystem}
                            </Card.Text>
                            
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Payinig system</th>
                    <th>Codes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Abdo</td>
                        <td>@</td>
                        <td>MPS</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>mo</td>
                        <td>@</td>
                        <td>LPS</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ah</td>
                        <td>@</td>
                        <td>MPS</td>
                        <td>[]</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default DashBoard;