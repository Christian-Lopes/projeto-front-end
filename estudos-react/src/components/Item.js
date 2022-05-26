import styles from './Item.module.css';

function Item({marca}){
    return (
        <>
            <li className='Item'>{ marca }</li>
        </>
    )
}

export default Item;