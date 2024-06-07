export const Characters = ({...props}) => {

  const { characters } = props

  console.log(characters)

  return (
    <div className="characters">
      <h1>
        Desde Characters JSX
      </h1>
      <button className="back-home">Volver</button>
      <div className="container-characters">
        {
          characters.map((character, index)=>(
            <div className="character-container" key={index}>
              <p>{character.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
