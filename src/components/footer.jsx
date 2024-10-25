import styles from './components.module.css';
import { Button } from './button';

export function Footer() {
  return (
    <div className={styles.footer}>
      <Button variant="success" textColor="dark" size="m" onClick={() => alert('Saved')}>
        Save
      </Button>
    </div>
  );
}
