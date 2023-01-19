import styles from './Title.module.css'

//const usuario ='Joe Max' 
//{usuario} no caso de retorno de const - inserir depois do title
//const funcao = (props)=> "Joe Man"
function Title(props){
  return (
    <h1 className={styles.title}>
      {props.children} </h1>)

      
  }

export default Title