import {Table} from 'react-bootstrap';

export const TableHead = () =>{
    return (
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Payinig system</th>
            <th>Codes</th>
            </tr>
        </thead>
    );
}

export const Col = ({data, index}) =>{
    return (
        <td key={index}>{data}</td>
    );
}

