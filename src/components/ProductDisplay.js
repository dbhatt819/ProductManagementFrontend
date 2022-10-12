import React, { useState, useEffect , Fragment} from 'react'
import { useNavigate } from "react-router-dom";
import {Table} from 'react-bootstrap'
import ReadOnlyRow from './ReadOnlyRow';
import InlineEdit from './InlineEdit';
import { Container, Navbar, Nav } from 'react-bootstrap';

    const ProductDisplay=()=>{
        const navigate = useNavigate();
        const [productList,setProductList] = useState([])
        const [productId, setProductId] = useState(null)
        useEffect(()=>{
            fetch("http://localhost:8080/api/getAllProducts")
                .then(response => response.json())
                .then((json) =>{
                    setProductList(json);
                }).catch((error)=>{
                    setProductList([]);
                    console.log("Error: ", error);
                });
        },[]);
        
        const handleEditClick=(event,product)=>{
            event.preventDefault();
            setProductId(product.id);
        }

        const handleSaveClick=(event,product)=>{
            const desc = product.description.replaceAll(' ','+');
            fetch(`http://localhost:8080/api/editProducts/${product.id}?name=${product.name}&description=${desc}&price=${product.price}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch((error)=> console.log("ERROR", error));
            setProductId(null);
        }

        const handleCancelClick=(event,product)=>{
            event.preventDefault();
            setProductId(null);
        }
        return (
        <div className='product-display'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Product Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav.Link>Home</Nav.Link>
                </Container>
            </Navbar>
            <h1 style={{textAlign:'center',margin:'20x'}}>Product List</h1>
            <button style={{textAlign:'center',marginLeft:'20px'}} onClick={()=>{
                navigate('/addProductForm');
            }}>Add Product</button>
            <form style={{textAlign:'center',margin:'20px'}}>
                <Table stripped='true' bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        {
                           
                            React.Children.toArray(productList.map(product=> 
                                <Fragment>
                                    {productId === product.id ? (<InlineEdit product={product} handleSaveClick={handleSaveClick} handleCancelClick={handleCancelClick}/>) : (<ReadOnlyRow product={product} handleEditClick={handleEditClick}/>)}
                                </Fragment>
                            ))
                        }
                        
                    </tbody>
                </Table>
            </form>
        </div>
        )
    }

export default ProductDisplay