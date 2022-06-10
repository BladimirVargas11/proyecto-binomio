import ListItems from "./ListItems";

const List = (props) => {
    return <>
        <h3>Lista</h3>
        <ul>
            {
                props.buddies.map((element, index) => (
                    <ListItems key={index} name={element} onDelete={props.onDelete}/>
                ))
            }
        </ul>
    </>
}

export default List;