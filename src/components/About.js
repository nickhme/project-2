import React from "react"

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted")
  }, [])

  return (
    <section className="hero is-warning is-fullheight-with-navbar is-warning">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">
            The explanation is: we love flags here.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
