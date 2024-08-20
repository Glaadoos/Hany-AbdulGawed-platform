import React, { useState } from 'react'
import { updateAccount, updateCodes } from '../../../../API/UesrApi'
import dayjs from 'dayjs'


export default function EditUser({user, codes, handleEdit}) {
    const [order, setOrder] = useState('')
    const [date, setDate] = useState('Open')
    const [name, setName] = useState('')
    const [PS, setPS] = useState('')

    const handleNameSubmit = async(e, id) => {
        e.preventDefault()
        await updateAccount(encodeURIComponent(id), {name: name}).then(data => data)
        window.location.reload()
    }
    const handlePayingSystemSubmit = async(e, id) => {
        e.preventDefault()
        await updateAccount(encodeURIComponent(id), {payingSystem: PS}).then(data => data)
        window.location.reload()
    }
    const handleCodeSubmit = async(e, id, branch, order) => {
        e.preventDefault()
        console.log(encodeURIComponent(id), branch, order, {date: date === 'Open' ? 'Open' : dayjs(date).format()})
        await updateCodes(encodeURIComponent(id), branch, order, {date: date === 'Open' ? 'Open' : dayjs(date).format()}).then(data => data)
        setOrder('')
        setDate('')
        window.location.reload()
    }

    return (
        <>
            <button onClick={handleEdit} id={"edit-btn"}></button>
            <form>
                <label>Name:</label>
                <input type="text" placeholder={user.name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" onClick={(e) => handleNameSubmit(e, user.id)}>Submit</button>
            </form>
            <form>
                <label>Paying System:</label>
                <input type="text" placeholder={user.payingSystem} onChange={(e) => setPS(e.target.value)} />
                <button type="submit" onClick={(e) => handlePayingSystemSubmit(e, user.id)}>Submit</button>
            </form>
            <h2>Available Codes: </h2>
            {
                codes&&
                codes.sort((a, b) => a.order.replace(a.branch.toLowerCase(), '') - b.order.replace(b.branch.toLowerCase(), '')).map((code, index) => {
                    return (    
                        <form 
                            key={'form'+index} 
                            style={{visibility: order === code.order || order === '' ? 'visible' : 'hidden'}}
                        >
                            <h2 key={'title'+index}>Order: {code.order}</h2>
                            <label key={'datalabel'+index}>Date:</label>
                            <input type="datetime-local" key={'dateinput'+index} onChange={(e) => {setOrder(code.order);setDate(e.target.value)}} />
                            {
                                date !== 'Open' ? 
                                    <>
                                        <button type="submit" key={'submitbtn'+index} onClick={(e) => handleCodeSubmit(e, user.id, code.branch, code.order)}>Submit</button>
                                        <button type='reset' key={'cancelbtn'+index} onClick={() => {setOrder('');setDate('')}}>Cancel</button> 
                                    </>
                                : ''
                            }
                            <button key={'makeopenbtn'+index} onClick={(e) => {setDate('Open');handleCodeSubmit(e, user.id, code.branch, code.order)}}>Make always open</button>
                            
                        </form>
                    )
                })
            }
        </>
    )
}
