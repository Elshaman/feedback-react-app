function Header({text}) {
  return (
    <header>
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

export default Header