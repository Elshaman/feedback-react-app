import {useParams} from 'react-router-dom'


function Post() {

    const params = useParams()

  return (
      <>
        <div>Post {params.id}</div>
        <div>Post de {params.name}</div>
      </>
   
  )
}

export default Post