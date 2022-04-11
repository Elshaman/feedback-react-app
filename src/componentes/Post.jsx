import {Navigate, useNavigate, Routes , Route} from 'react-router-dom'


function Post() {

  const status = 200
  const navigate = useNavigate()
  if(status === 404){
      return <Navigate to='/notfound' />
  }

  const onClick = () =>{
      console.log('Hello')
      navigate('/about')
  }

  return (
      <>
        <div>Post</div>
        <button onClick={onClick}> Click </button>
        <Routes>
            <Route path='/show' element={<h1>Hello</h1>} />
        </Routes>
      </>
   
  )
}

export default Post