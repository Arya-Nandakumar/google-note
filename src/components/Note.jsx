import { queryAllByTitle } from '@testing-library/react';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdBuild } from "react-icons/md";

function Note({title,content,onDelete,id}){
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
            <MdDelete size={25} />
            </button>
            <button>
            <MdBuild size={25}/>
            </button>
        </div>
    );
}
export default Note;