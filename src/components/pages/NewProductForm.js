import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
    const NewProductForm=()=>{
        const navigate = useNavigate();
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        return (
            <div className='container'>
                <Navbar style={{marginRight:'-120px', marginLeft:'-120px'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Product Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Nav.Link>Home</Nav.Link>
                    </Container>
                </Navbar>
                <div style={{backgroundColor:'LightGray', marginTop:'30px', marginLeft:'35%', marginRight:'35%', borderRadius:'20px', height:'330px'}}>
                <h1 style={{textAlign:'center',margin:'20px'}}>Add Product</h1>
                <div style={{display:'block', textAlign:'center'}}>
                <form style={{paddingBottom:'5px', display:'inline-block', marginLeft:'auto', marginRight:'auto', textAlign:'left'}}>
                  <div style={{paddingBottom:'10px'}}>
                      <label style={{fontSize:'20px', }}>Product Name: </label><br></br>
                      <input placeholder='Enter name..' name='productName' onChange={(e)=>setName(e.target.value)} required></input><br></br>
                  </div>
                  <div style={{paddingBottom:'10px'}}>
                      <label style={{fontSize:'20px'}}>Product Description: </label><br></br>
                      <input placeholder='Enter description...' name='description' onChange={(e)=>setDescription(e.target.value)} required></input><br></br>
                  </div>
                  <div style={{paddingBottom:'10px'}}>
                      <label style={{fontSize:'20px'}}>Product Price: </label><br></br>
                      <input placeholder='Enter price...' name='price' onChange={(e)=>setPrice(e.target.value)} type='number' step='.01' required></input><br></br>
                  </div>
                </form>
                </div>
                <div style={{textAlign:'center'}}>
                  <button className="" type='button' onClick={(event)=>{
                        if(name.length>0 && description.length>0 && price!==''){
                            var p = Number(price);
                            p=Math.floor(p*100)/100;
                            const desc = description.replaceAll(' ','+');
                            fetch(`http://localhost:8080/api/addProducts?name=${name}&description=${desc}&price=${p}`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            }).then(response => response.json())
                            .then(json => {     
                                navigate('/')
                            }).catch((error)=> console.log("ERROR", error));
                        }
                    }}>Add</button>

                  <button className="" onClick={()=>{
                      navigate('/')
                  }} style={{marginLeft: '10px'}}>Back</button>
                </div>
                </div>
            </div>
          )
    }
    
  export default NewProductForm
