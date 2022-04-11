import Card from "../componentes/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Esta es una app react para dejar feedback para un producto o servicio</p>
            <p>Version: 1.0.0</p>
            <a href='/' >
                Back to main page 
            </a>
        </div>
    </Card>
  )
}

export default AboutPage