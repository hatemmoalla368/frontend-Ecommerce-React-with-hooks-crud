import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Insertcategorie = () => {
  let navigate = useNavigate();
const[nomcategorie,setNomcategorie]=useState("")
const[imagecategorie,setImagecategorie]=useState("")
const save=async()=>{
  const categorie={
    nomcategorie:nomcategorie,
    imagecategorie:imagecategorie
  }
  await axios.post("http://localhost:3001/api/categories", categorie)
  navigate("/categories")
}
  return (
    <div className="container">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

<h4 align="center">Ajout categorie</h4>
<div className='form mt-3'>
<Form className="border p-3" >
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >nom du categorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="nom du categorie"
value={nomcategorie}
onChange={(e)=>setNomcategorie(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>image du categorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="image du categorie"
value={imagecategorie}
onChange={(e)=>setImagecategorie(e.target.value)}
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

export default Insertcategorie
