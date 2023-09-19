import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
      return response.json()})

    .then(response => {
      setPokemon(response.results)})

    .catch((error) => {
      console.log(error)})}, [])

  return (
    <div className="App">
      <ul> {pokemon.map((pokemonObj, index) => {
        return (<li key={index}>{pokemonObj.name}</li>)})} 
      </ul>
    </div>
  )
}

export default App