import axios from "axios";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editarticle = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [scategories,setScategories]=useState([])
  useEffect(()=>{
    getscategories()
    loadarticle()
  }, [])
  const [articles,setArticles]=useState({
    designation:"",
    reference:"",
    imageart:"",
    marque:"",
    qtestock:0,
    prix:0,
    scategorieID:""
  })
  const handlechange =(e)=>{
     setArticles({...articles,[e.target.name]: e.target.value})
  }
  const getscategories=async()=>{
    try {
      const res = await axios.get("http://localhost:3001/api/scategories")
      setScategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const loadarticle = async () => {
    const result = await
    axios.get(`http://localhost:3001/api/articles/${id}`);
    setArticles(result.data);
    };
    const save=async()=>{
      await axios.put(`http://localhost:3001/api/articles/${id}`, articles);
      navigate("/articles");
    }
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    
    <h4 align="center">modifier Article</h4>
    <div className='form mt-3'>
    <Form className="border p-3" >
    <Row className="mb-2">
    <Form.Group as={Col} md="6" >
    <Form.Label >Référence *</Form.Label>
    <Form.Control
    required
    type="text"
    name="reference"
    placeholder="Référence"
    value={articles.reference}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    <Form.Group as={Col} md="6">
    <Form.Label>Désignation *</Form.Label>
    <Form.Control
    required
    type="text"
    name="designation"
    placeholder="Désignation"
    value={articles.designation}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    </Row>
    <Row className="mb-2">
    <Form.Group className="col-md-6">
    <Form.Label>Marque *</Form.Label>
    <Form.Control
    type="text"
    required
    name="marque"
    placeholder="Marque"
    value={articles.marque}
    onChange={(e)=>handlechange(e)}
    />
    
    </Form.Group>
    <Form.Group as={Col} md="6">
    <Form.Label>Prix</Form.Label>
    <Form.Control
    type="number"
    name="prix"
    placeholder="Prix"
    value={articles.prix}
    onChange={(e)=>handlechange(e)}
    />
    
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group className="col-md-6 ">
    <Form.Label>
    Qté stock<span className="req-tag">*</span>
    </Form.Label>
    <Form.Control
    required
    type="number"
    name="qtestock"
    value={articles.qtestock}
    onChange={(e)=>handlechange(e)}
    placeholder="Qté stock"
    />
    
    </Form.Group>
    <Form.Group as={Col} md="6">
    <Form.Label>Image</Form.Label>
    <Form.Control
    type="text"
    name="imageart"
    placeholder="Image"
    value={articles.imageart}
    onChange={(e)=>handlechange(e)}
    />
    </Form.Group>
    <Form.Group as={Col} md="12">
    <Form.Label>Catégorie</Form.Label>
    <Form.Control
    as="select"
    type="select"
    name="scategorieID"
    value={articles.scategorieID}
    onChange={(e)=>handlechange(e)}
    >
      {scategories.map((scat,index)=>
    <option key={index} value={scat._id}>{scat.nomscategorie}</option>
    )}
    </Form.Control>
    </Form.Group>
    </Row>
    <button type="button" className="btn btn-outline-primary" onClick={()=>save()}>
    enregistrer
    </button>
    <Link className="btn btn-outline-danger mx-2" to="/articles">
    Cancel
    </Link>
    </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Editarticle
