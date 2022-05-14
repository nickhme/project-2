import React from "react"
import Country from "./Country"

function CountriesList() {
  const [countries, updateCountries] = React.useState([])

  React.useEffect(() => {
    console.log("The Countries List Page has mounted")
  }, [])

  React.useEffect(() => {
    async function fethCountries() {
      const resp = await fetch("https://restcountries.com/v3.1/all")
      const countriesData = await resp.json()
      updateCountries(countriesData)
    }
    fethCountries()
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {countries.map((country, i) => <Country key={i} {...country} />)}
      </div>
    </div>
  </section>
}


export default CountriesList
