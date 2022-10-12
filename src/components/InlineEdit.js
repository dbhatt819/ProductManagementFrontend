import React , {useState} from 'react'
const InlineEdit = ({product, handleSaveClick, handleCancelClick}) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

  return (
    <tr>
        <td>
            <input type='text' name='productName' defaultValue={product.name} onChange={(e)=>setName(e.target.value)} required></input>
        </td>
        <td>
            <input type='text' name='productDescription' defaultValue={product.description} onChange={(e)=>setDescription(e.target.value)} required></input>
        </td>
        <td>
            <input type='number' name='productPrice' defaultValue={product.price} onChange={(e)=>setPrice(e.target.value)} step='.01' required></input>
        </td>
        <td>

            <button type='submit' onClick={(event)=>{
                // event.preventDefault();
                
                if (name.length>0 && description.length>0 && price!==''){
                    product.name=name;
                    product.description=description;
                    var p = Number(price);
                    product.price=Math.floor(p*100)/100;
                    handleSaveClick(event,product);
                }
                    
                 
            }}>Save</button>
            <button type='button' onClick={(event)=>{handleCancelClick(event,product)}}>Cancel</button>
            
        </td>
        
    </tr>
  )
}

export default InlineEdit