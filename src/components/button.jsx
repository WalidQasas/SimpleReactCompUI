import styles from './components.module.css';

export function Button({ children, variant, textColor, size, onClick }) {
  let buttonClass = `${styles.button} ${styles[`button--${variant}`]} ${styles[`button--text-${textColor}`]}`;

  if (size) {
    buttonClass += ` ${styles[`button--${size}`]}`;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}