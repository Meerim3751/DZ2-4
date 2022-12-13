function ListItem ({title, desc, price}) {
    return (
        <div className="Item">
            <h3>{title}</h3>
            <p>{desc}</p>
            <b>{price}</b>
        </div>
    )
}

export default ListItem;
