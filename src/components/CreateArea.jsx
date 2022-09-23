import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab , Zoom} from '@mui/material';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  //ta3 button bah ki nclikiw yakbar
  const [isExpandes, setExpandes] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpandes(false);
    event.preventDefault();
  }
function Expand(){
  setExpandes(true);
}
  return (
    <div>
    <form className="create-note">
     { isExpandes ? 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> :null }
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpandes ? "3":"1"}
          onClick={Expand}
        />
        <Zoom in={isExpandes}>
        <Fab color="primary" aria-label="add" onClick={submitNote}>
  <AddIcon />
</Fab></Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
