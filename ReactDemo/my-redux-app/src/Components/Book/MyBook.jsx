import React from 'react'
import { useParams } from 'react-router-dom'

const MyBook = () => {
    const params = useParams();
  return (
    <div>
        MY Book {params.id}
    </div>
  )
}

export default MyBook