import {Card ,Row ,Col  } from 'react-bootstrap';

const UserCard = ({currentUser}) =>{
    return(
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
    );
}
export default UserCard;