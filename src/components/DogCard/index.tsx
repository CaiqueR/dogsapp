import styles from './styles.module.scss'

type DogCardProps = {
  breed: string
  subBreeds: string[]
  image: string
  grid: number
}
const DogCard: React.FC<DogCardProps> = ({ breed, image, subBreeds, grid }) => {
  return (
    <li className={styles['dog-card']} style={{ gridColumn: `span ${grid}` }}>
      <figure>
        <img src={image} alt={breed} />
      </figure>
      <span className={styles['dog-card__breed']}>{breed}</span>

      {subBreeds.length > 0 && (
        <div>
          <span>Sub breeds</span>
          <ul>
            {subBreeds.map((subBreed) => (
              <li key={subBreed}>{subBreed}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default DogCard
