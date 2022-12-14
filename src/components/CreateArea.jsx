import React,{useState} from 'react';
function CreateArea({submitButton,onAdd}){
    const [isExpanded, setExpanded] = useState(false);
    const[note,setNote]=useState({
        title:"",
        content:"",
    });


    function handleChange(e){
        const{name,value}=e.target
        setNote(preValue=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    }

    function handleExpanded() {
        setExpanded(true);
      }
    
    function submitButton(event){
        onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        event.preventDefault();
    }

        return (
              <div>
                <form>
                    {isExpanded && (
                        <input value={note.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        rows={isExpanded ? 3 : 1}
                        />
                    )}
                    <p>
                        <textarea value={note.content}
                        onClick={handleExpanded}
                         name="content"
                        placeholder="Take a note..."
                        onChange={handleChange}
                        >
                        </textarea>
                    </p>
                    <button onClick={submitButton}>+</button>
                </form>
              </div>
        );
}
export default CreateArea;