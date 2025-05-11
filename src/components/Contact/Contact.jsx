import styles from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <div>
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.number}>{contact.number}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
