import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSpecific } from "../../../../API/UesrApi";


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

    return (
        <div className="user-view">
            <div>{user.id}</div>
            <div>{user.email}</div>
            <div>{user.name}</div>
            <div>{user.payingSystem}</div>
            <div>{user.admin}</div>
            <div>{user.admin}</div>
            <div>{codes.map((item) => <div>{item.branch}: {item.code}: {item.order}: {item.date}</div>)}</div>
        </div>
    )
}
