import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const Listarticles = () => {
  const[articles,setArticles]=useState([])
  useEffect(()=>{
    fetcharticles()
  }, [])
  const fetcharticles=async()=>{
    await axios.get("http://localhost:3001/api/articles")
    .then(res=>{
      setArticles(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/articles/${id}`);
    fetcharticles();
    };
  return (
    <div className='container'>
      Liste des articles
      <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/articles/add">
<i class="fa-solid fa-plus"></i>
Ajouter article
</Link>
</div>
</nav>
</div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>image</th>
          <th>reference</th>
          <th>designation</th>
          <th>marque</th>
          <th>prix</th>
          <th>quantité en stock</th>
          <th>modifier</th>
          <th>supprimer</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((art,index)=>
        <tr key={index}>
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.marque}</td>
          <td>{art.prix}</td>
          <td>{art.qtestock}</td>
          <td><Link className="btn btn-outline-primary mx-2" to={`/article/edit/${art._id}`}><i class="fa-solid fa-pen-to-square"></i>modifier</Link></td>
          <td> <button
className="btn btn-danger mx-2"
onClick={() => handleDelete(art._id)}
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

export default Listarticles
