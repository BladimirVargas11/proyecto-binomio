

const ListItems = (props) =>{
    return <>

        <li>{props.name}</li>
        <button onClick={()=> props.onDelete(props.name)}>Eliminar</button>

    </>

}
export default ListItems;