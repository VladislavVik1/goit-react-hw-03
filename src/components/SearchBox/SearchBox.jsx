import styles from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
