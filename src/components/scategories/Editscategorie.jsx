import axios from "axios";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editscategorie = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(()=>{
    getcategories()
  loadscategorie()

  }, [])
  const [categories,setCategories]=useState([])
  const [scategories,setScategories]=useState({
    imagescategorie:"",
    nomscategorie:"",
    categorieID:""
  })
  const handlechange =(e)=>{
    setScategories({...scategories,[e.target.name]:e.target.value})
  }
  const getcategories=async()=>{
    try{
      const res = await axios.get("http://localhost:3001/api/categories")
      setCategories(res.data)
    }
      catch(error){
        console.log(error)
      }
  }
  const loadscategorie = async()=>{
    const res = await axios.get(`http://localhost:3001/api/scategories/${id}`)
    setScategories(res.data)
  }
  const save =async()=>{
    await axios.put(`http://localhost:3001/api/scategories/${id}`, scategories)
    navigate("/scategories")
  }
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    
    <h4 align="center">modifier scategorie</h4>
    <div className='form mt-3'>
    <Form className="border p-3" >
    <Row className="mb-2">
    <Form.Group as={Col} md="6" >
    <Form.Label >nom scategorie *</Form.Label>
    <Form.Control
    required
    type="text"
    name="nomscategorie"
    placeholder="nom scategorie"
    value={scategories.nomscategorie}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    <Form.Group as={Col} md="6">
    <Form.Label>image scategorie *</Form.Label>
    <Form.Control
    type="text"
    name="imagescategorie"
    placeholder="image scategorie "
    value={scategories.imagescategorie}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    </Row>
    
    <Row className="mb-3">
    <Form.Group as={Col} md="12">
    <Form.Label>Catégorie</Form.Label>
    <Form.Control
    as="select"
    type="select"
    name="categorieID"
    value={scategories.categorieID}
    onChange={(e)=>handlechange(e)}
    >
      {categories.map((cat,index)=>
    <option key={index} value={cat._id}>{cat.nomcategorie}</option>
    )}
    </Form.Control>
    </Form.Group>
    </Row>
    <button type="button" className="btn btn-outline-primary" onClick={()=>save()}>
    enregistrer
    </button>
    <Link className="btn btn-outline-danger mx-2" to="/scategories">
    Cancel
    </Link>
    </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Editscategorie
