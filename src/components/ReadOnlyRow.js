import React from 'react'

const ReadOnlyRow = ({product, handleEditClick}) => {
  return (
    <tr key = {product.id}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
            <button type='button' onClick={(event)=>{handleEditClick(event,product)}}>Edit</button>
        </td>
    </tr>
    
  )
}

export default ReadOnlyRow