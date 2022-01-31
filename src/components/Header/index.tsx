import styles from './styles.module.scss'

console.log('styles :>> ', styles)
const Header: React.FC = () => {
  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['header-wrapper__main']}>
        <span className={styles['header-wrapper__main__title']}>Dog App</span>

        <nav className={styles['header-wrapper__main__nav']}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles['header-wrapper__info']}>
        <div className={styles['header-wrapper__info__details']}>
          <span className={styles['header-wrapper__info__details__title']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <p className={styles['header-wrapper__info__details__description']}>
            Done mauris nis, consectetur viverra leo vitae, gravida laculis
            ipsum. Aenean sodales volutpat conque. In eget feugiat dolor.
            Quisque gravida odio tortor, a sollicitudin guam dignissim ac. Nulla
            Quis purus dictum, imperdiet est eu, oulvinar leo.
          </p>
        </div>

        <iframe
          width="520"
          height="315"
          src="https://www.youtube.com/embed/1HygThMLzGs"
        />
      </div>
    </header>
  )
}

export default Header
