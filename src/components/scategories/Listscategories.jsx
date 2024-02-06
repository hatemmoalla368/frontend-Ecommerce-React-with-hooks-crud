import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Listscategories = () => {
  const [scategories,setScategories]=useState([])
  useEffect(()=>{
    fetchscategories()
  }, [])
  const fetchscategories = async()=>{
    await axios.get("http://localhost:3001/api/scategories")
    .then(res=>{
      setScategories(res.data)
    })
    .catch(error=>{
      console.error(error)
    })
  }
  const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:3001/api/scategories/${id}`)
    fetchscategories()
  }
  return (
    <div className='container'>
      Liste des scategories
      <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/scategories/add">
<i class="fa-solid fa-plus"></i>
Ajouter scategories
</Link>
</div>
</nav>
</div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>image</th>
          <th>nom scategorie</th>
          <th>modifier</th>
          <th>supprimer</th>
        </tr>
      </thead>
      <tbody>
        {scategories.map((scat,index)=>
        <tr key={index}>
          <td><img src={scat.imagescategorie} width={80} height={80}/></td>
          <td>{scat.nomscategorie}</td>
          <td><Link className="btn btn-outline-primary mx-2" to={`/scategorie/edit/${scat._id}`}><i class="fa-solid fa-pen-to-square"></i>modifier</Link></td>
          <td> <button
className="btn btn-danger mx-2"
onClick={() => handleDelete(scat._id)}
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

export default Listscategories
