import PropTypes from 'prop-types'

import styles from "./Item.module.css";

function Item({ marca, lancamento }) {
  return (
    <>
      <li className={styles.item}>
        {marca} - {lancamento}
      </li>
    </>
  );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou informar a marca.',
    lancamento: 0,
}

export default Item;
