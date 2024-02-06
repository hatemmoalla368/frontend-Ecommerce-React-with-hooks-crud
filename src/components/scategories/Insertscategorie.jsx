import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Insertscategorie = () => {
  let navigate = useNavigate()
  const[imagescategorie,setImagescategorie]=useState("")
  const[nomscategorie,setNomscategorie]=useState("")
  const [categorieID,setCategorieID]=useState("")
  const[categories,setCategories]=useState([])
  useEffect(()=>{
    getcategories()
  }, [])
  const save = async()=>{
    const scategorie={
      imagescategorie:imagescategorie,
      nomscategorie:nomscategorie,
      categorieID:categorieID
    }
    await axios.post("http://localhost:3001/api/scategories", scategorie)
    navigate("/scategories")
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
  return (
    <div className="container">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

<h4 align="center">Ajout scategorie</h4>
<div className='form mt-3'>
<Form className="border p-3" >
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >nom scategorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="nom scategorie"
value={nomscategorie}
onChange={(e)=>setNomscategorie(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>image scategorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="image scategorie"
value={imagescategorie}
onChange={(e)=>setImagescategorie(e.target.value)}
/>
</Form.Group>
</Row>

<Row className="mb-3">
<Form.Group as={Col} md="12">
<Form.Label>Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={categorieID}
onChange={(e)=>setCategorieID(e.target.value)}
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

export default Insertscategorie
