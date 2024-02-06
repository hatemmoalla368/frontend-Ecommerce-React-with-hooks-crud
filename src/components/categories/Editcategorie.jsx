import axios from "axios";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editcategorie = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    loadcategorie()
  }, [])
  const { id } = useParams();
  const [categories,setCategories]=useState({
    nomcategorie:"",
    imagecategorie:""
  })
  const handlechange = (e)=>{
    setCategories({...categories,[e.target.name]:e.target.value})
  }
  const loadcategorie = async()=>{
    const result = await axios.get(`http://localhost:3001/api/categories/${id}`)
    setCategories(result.data)
  }
  const save = async()=>{
    await axios.put(`http://localhost:3001/api/categories/${id}`, categories);
      navigate("/categories");
  }
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    
    <h4 align="center">modifier categorie</h4>
    <div className='form mt-3'>
    <Form className="border p-3" >
    <Row className="mb-2">
    <Form.Group as={Col} md="6" >
    <Form.Label >nom du categorie *</Form.Label>
    <Form.Control
    required
    type="text"
    name="nomcategorie"
    placeholder="nom du categorie"
    value={categories.nomcategorie}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    <Form.Group as={Col} md="6">
    <Form.Label>image du categorie *</Form.Label>
    <Form.Control
    required
    type="text"
    name="imagecategorie"
    placeholder="Désignation"
    value={categories.imagecategorie}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    </Row>
    <button type="button" className="btn btn-outline-primary" onClick={()=>save()}>
    enregistrer
    </button>
    <Link className="btn btn-outline-danger mx-2" to="/categories">
    Cancel
    </Link>
    </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Editcategorie
