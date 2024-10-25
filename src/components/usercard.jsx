import styles from './components.module.css';
import { Button } from './button';

export function UserCard() {
  return (
    <div className={styles.card}>
      <img src='./src/assets/walid.jpg' className={styles.card__avatar} />
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>Mohamad Qamhieh</h3>
        <p className={styles.card__subtitle}>Frontend Engineer</p>
      </div>
      <div className={styles.card__actions}>
        <Button variant="danger" textColor="light" size="m" onClick={() => alert('Remove User')}>
          Remove
        </Button>
        <Button variant="primary" textColor="light" size="m" onClick={() => alert('Edit User')}>
          Edit
        </Button>
      </div>
    </div>
  );
}