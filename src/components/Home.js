import React from "react"

function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div className="hero-body">
        <div className="container">
          <p className="title">🏳 Nicks Countries Demo 🏳</p>
        </div>
      </div>
    </section>
  )
}

export default Home
