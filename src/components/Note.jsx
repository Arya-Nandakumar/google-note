import { queryAllByTitle } from '@testing-library/react';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

function Note({title,content,onDelete,id}){
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
            <MdDelete size={25} />
            </button>
            <button>
            <AiFillEdit size={25}/>
            </button>
        </div>
    );
}
export default Note;