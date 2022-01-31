import styles from './styles.module.scss'

console.log(styles)
const Loading: React.FC = () => {
  return (
    <div className={styles['svg-loader']}>
      <svg
        className="svg-container"
        height="100"
        width="100"
        viewBox="0 0 100 100"
      >
        <circle
          className={`${styles['svg-loader__svg']} ${styles['bg']}`}
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <circle
          className={`${styles['svg-loader__svg']} ${styles['animate']}`}
          cx="50"
          cy="50"
          r="45"
        ></circle>
      </svg>
    </div>
  )
}

export default Loading
