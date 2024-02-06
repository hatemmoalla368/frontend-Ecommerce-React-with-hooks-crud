import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Listcategories = () => { 
  const[categories,setCategories]=useState([])
  useEffect(()=>{
    fetchcategories()
  }, [])
  const fetchcategories = async()=>{
    await axios.get("http://localhost:3001/api/categories")
    .then(res=>{
      setCategories(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:3001/api/categories/${id}`)
    fetchcategories()
  }
  
  return (
    <div className='container'>
    Liste des categories
    <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/categories/add">
<i class="fa-solid fa-plus"></i>
Ajouter categorie
</Link>
</div>
</nav>
</div>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>image</th>
        <th>nom du categorie</th>
        <th>modifier</th>
        <th>supprimer</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((cat,index)=>
      <tr key={index}>
        <td><img src={cat.imagecategorie} width={80} height={80}/></td>
        <td>{cat.nomcategorie}</td>
        <td><Link className="btn btn-outline-primary mx-2" to={`/categorie/edit/${cat._id}`}><i class="fa-solid fa-pen-to-square"></i>modifier</Link></td>
        <td> <button
className="btn btn-danger mx-2"
onClick={() => handleDelete(cat._id)}
><i class="fa-solid fa-trash"></i>
Supprimer
</button></td>
      </tr>
      )}
    </tbody>
  </Table>
  </div>
  )
}

export default Listcategories
