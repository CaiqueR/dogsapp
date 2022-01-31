import DogCard from 'components/DogCard'
import Header from 'components/Header'
import Loading from 'components/Loading'
import { useEffect, useState } from 'react'
import { api, Breed } from 'utils/api'
import styles from './styles.module.scss'

type Breeds = {
  breed: string
  subBreeds: string[]
  image: any
}

function generateRandomNumberBetweenTwoValues(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Main: React.FC = () => {
  const [breeds, setBreeds] = useState([] as Breeds[])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getAllBreeds() {
      const { message } = await api.get('/breeds/list/all')
      const breeds = Object.entries(message as Breed)
      const breedsWithImage = await Promise.all(
        breeds.map(async ([breed, subBreeds]) => {
          const image = await api.get(`/breed/${breed}/images`)
          return {
            breed: breed,
            subBreeds,
            image: image.message[0]
          }
        })
      )
      setBreeds(breedsWithImage)
      setIsLoading(false)
    }
    getAllBreeds()
  }, [])

  return (
    <>
      <Header />
      <main className={styles['main-wrapper']}>
        <h1 className={styles['main-wrapper__title']}>Dog Breeds</h1>
        <section>
          {isLoading ? (
            <Loading />
          ) : (
            <ul className={styles['main-wrapper__list']}>
              {breeds.map(({ breed, subBreeds, image }) => (
                <DogCard
                  key={breed}
                  breed={breed}
                  image={image}
                  subBreeds={subBreeds}
                  grid={generateRandomNumberBetweenTwoValues(1, 2)}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  )
}

export default Main
