import Card from "../componentes/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Esta es una app react para dejar feedback para un producto o servicio</p>
            <p>Version: 1.0.0</p>
            <Link to='/' >
                Back to main page 
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage