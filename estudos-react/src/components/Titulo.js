import styles from './Frase.module.css';

function Titulo(props) {
  return (
    <div className={ styles.fraseContainer }>
      <h1 class={ styles.fraseContent }>{ props.titulo }</h1>
    </div>
  );
}

export default Titulo;
