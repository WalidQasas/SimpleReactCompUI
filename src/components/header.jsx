import styles from './components.module.css';
import { Button } from './button';

export function Header(){
    return (
        <div className={styles.header}>
          <h2>Users</h2>
          <Button variant="primary" textColor="light" size="m" onClick={() => alert('Add User')}>
            Add User
          </Button>
        </div>
      );

}

