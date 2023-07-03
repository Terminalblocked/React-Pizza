import styles from './NotFoundCart.module.scss';

export default function index() {
  return (
    <>
      <h1 className={styles.root}>
        <span className={styles.emoji}>🥺</span>
        <br />
        Ничего не найдено!
        <br />
        <p className={styles.desc}>К сожалению данная страница недоступна</p>
      </h1>
      
    </>
  );
}
