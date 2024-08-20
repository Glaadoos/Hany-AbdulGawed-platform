import React, { useState } from 'react'

export default function NormalUserView({user, codes, handleEdit}) {
    const [search, setSearch] = useState('')


    return (
        <>
            <button onClick={handleEdit} id={"edit-btn"}></button>
            <h2>{user.admin ? "Admin" : "User"}</h2>
            <h2>id: {user.id}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Paying System: {user.payingSystem}</h2>
            <span style={{display:'flex', alignItems: 'center'}}>
                <h2 style={{marginTop: '10px'}}>Available Codes: </h2>
                <input type="text" placeholder="Search by order" onChange={(e) => setSearch(e.target.value)} />
            </span>
            <ul className="codes">
                {
                    codes&&
                    codes.filter(code => code.order.includes(search)).sort((a, b) => a.order.replace(a.branch.toLowerCase(), '') - b.order.replace(b.branch.toLowerCase(), '')).map((code, index) => {
                        return (    
                            <>
                                <h2 key={'title'+index}>{code.order}</h2>
                                <li key={'order'+index}>
                                    Order: {code.order}
                                </li>
                                <li key={'code'+index}>
                                    Code: {code.code}
                                </li>
                                <li key={'date'+index}>
                                    date: {code.date}
                                </li>
                                <hr/>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
