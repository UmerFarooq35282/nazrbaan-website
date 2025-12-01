import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryNews() {
    const {categoryName} = useParams();
  return (
    <div>CategoryNews of {categoryName}</div>
  )
}

export default CategoryNews