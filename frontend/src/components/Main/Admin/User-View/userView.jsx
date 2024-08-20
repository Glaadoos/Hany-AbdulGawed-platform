import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSpecific } from "../../../../API/UesrApi";
import './user-view.css';
import NormalUserView from "./normalUserView";
import EditUser from "./editUser";


export default function UserView() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useState([]);
    const [codes, setCodes] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const id = searchParams.get('id')
        const getUser = async () => {
            let res = await getSpecific(encodeURIComponent(id)).then(data => data)
            setUser(res)
            setCodes(res.availableCodes)
        }
        getUser()
    }, [searchParams])

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className="user-view">
            {
                edit ? <EditUser user={user} codes={codes} handleEdit={handleEdit} /> : <NormalUserView user={user} codes={codes} handleEdit={handleEdit} />
            }
        </div>
    )
}
