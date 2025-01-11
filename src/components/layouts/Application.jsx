import React, { useState } from 'react';
import Button from '../utilities/Button';
import Modal from './Modal';

const Application = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState('');
    const [editedData, setEditedData] = useState(null);
    const [editText, setEditText] = useState('');

    const addToList = (e) => {
        e.preventDefault();
        setList([...list, {id: new Date().getTime(), text: data, completed: false}])
        setData('')
    };

    const removeElement = (element) => {
         const removeItem = list.filter((item) => item.id !== element.id);
         setList(removeItem);
    }

    const clickToEdit = () => {
        if (editedData!==null && editText!=='') {
            const updatedData = list.map(value=>{
                if (value.id===editedData.id) {
                    return{...value, text:editText}
                }
                return value;
            });
            setList(updatedData);
            setEditedData(null);
            setEditText('');
        }
    } 

    return (
        <div className="w-full flex flex-wrap items-center justify-center my-28">
            <div className="bg-blue-100/5 backdrop-blur-lg shadow-lg rounded-lg w-1/3 py-4 mx-auto mt-10 border border-white/30">
                <div className="w-full flex items-center justify-center space-x-4">
                    <input
                        value={data}
                        onChange={(e) => {
                            if (e.target.value !== '') setData(e.target.value);
                        }}
                        className="rounded-md outline-none bg-blue-50/5 border-0 caret-blue-500 text-blue-300 capitalize placeholder:text-blue-500"
                        placeholder="Add items"
                        type="text"
                        name="input-task"
                        id="task"
                    />
                    <Button
                        onClick={addToList}
                        className="border-1 bg-gradient-to-r from-blue-300/75 to-sky-700/60 py-1 px-3 capitalize font-bold text-blue-200 rounded-md"
                        text="Add Task"
                    />
                </div>
                <div>{`Total tasks: ${list.length}`}</div>
                <div className="w-full my-5">
                    <table className='w-full'>
                        <thead className='w-full'>
                            <tr className='w-full'>
                                <td>Sl NO.</td>
                                <td>ID NO.</td>
                                <td>Description</td>
                                <td>Action Buttons</td>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {list.map((element, index) => (
                                <tr key={element.id} className="w-full">
                                    <td>{index + 1<10? `0${index+1}.`: index+1.}</td>
                                    <td>{element.id}</td>
                                    <td>{element.text}</td>
                                    <td><Button onClick={()=>removeElement(element)} text={`Remove`}/></td>
                                    <td>
                                    <Button
                                     text={`edit`} onClick={()=>{setEditedData(element); setEditText(element.text)}}/>{editedData&&editedData.id === element.id && ( <Modal title={`are you sure to edit ?`} id={element.id} actionValue={clickToEdit} actionDiscard={()=>setEditedData(false)} newTask={editText} setTask={(e)=>setEditText(e.target.value)} /> )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Application;
