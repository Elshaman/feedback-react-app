function App(){

    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1 , text: 'First Comment'},
        {id: 2 , text: 'Second Comment'},
        {id: 3 , text: 'Third Comment'},
    ]


    return (
        <div className="container">
            <h1>{ title }</h1>
            <p>{ body }</p>
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    { comments.map( (comment, index) => (
                        <li key={index}>{ comment.text }</li>
                    )) }
                </ul>
            </div>
        </div>
       
    )
}

export default App