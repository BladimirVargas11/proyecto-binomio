import List from "./List";
import {useState} from "react";

const Form = () => {

    const [buddy, setBuddy] = useState({buddy:"",id:0});
    const [buddies, setBuddies] = useState([]);

    const handleName = (e) => {
        setBuddy({...buddy, buddy:e.target.value});
    }
    const cleanInput = (e) => {
        setBuddy({buddy:"", id: buddy.id +1 });
    }
    const onSubmit = (e) => {
        e.preventDefault(); 
        setBuddies([...buddies,{...buddy}]);
        cleanInput();
    }

    const onDelete = (buddyId) => {
        setBuddies(buddies.filter((buddy)=> buddy.id !== buddyId));
    }

    return <>

        <form onSubmit={onSubmit} >
            <label htmlFor="name">Nombre</label>
            <input type="text" name="nombre" onChange={(e) => handleName(e)} value={buddy}/>
            <br />
            <button type="submit">Agregar</button>

            <p>El integrante ha agregar es: <strong>{buddy}</strong></p>
        </form>

        <List buddies={buddies} onDelete={onDelete}/>
    </>

}

export default Form;