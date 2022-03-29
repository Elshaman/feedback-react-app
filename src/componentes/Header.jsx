import propTypes  from "prop-types"

function Header({text}) {
  return (
    <header style={{ backgroundColor: 'blue' , color: 'red' }}>
        <div className="container">
            <h2>
               { text }
            </h2>
        </div>
    </header>
  )
}

Header.defaultProps ={
    text: 'FeedBack UI'
}

Header.propTypes ={
    text: propTypes.string.isRequired
}

export default Header