// CSS modules
import styles from "./components.module.css"

export function Container(props){
    
    return <div className={styles.container}>
        {props.children}
    </div>

}