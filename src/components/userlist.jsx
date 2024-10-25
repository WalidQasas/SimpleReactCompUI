import styles from './components.module.css';
import { UserCard } from './UserCard';

export function UserList() {
  return (
    <div className={styles.list}>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
