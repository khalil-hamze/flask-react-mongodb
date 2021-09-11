import React, { useEffect, useState } from "react";
import "./Product.css";
import Box from "./Product_Categories";
import ProductList from "./ProductList";
import { Button } from "bootstrap";

const API = process.env.REACT_APP_API

function Product() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`${API}/products`)
    const data = await res.json();
    setProducts(data.data)
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/product/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description
      })
    })
    const data = await res.json();
    console.log(data);
    await getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    const productResponse = window.confirm('Are you sure you want to delete this product?')
    if (productResponse) {
      const res = await fetch(`${API}/products/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data);
      await getProducts();
    }
    console.log(id)
  }

  return (
    <section id="Product">
      <div className="container">
        {/* <h1 className="compugear_title_h1">Compugear</h1> */}
        <h2 className="product_title_h2">Products</h2>

        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit} className="card card-body">
              <div className="form-group">
                <input
                  type="text"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  className="form-control"
                  placeholder="Title"
                  autoFocus
                  />

                <input
                  type="text"
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  placeholder="Description"
                  />
              </div>

              <button className="btn btn-primary btn-block">
                Create
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>
                        <button className="btn btn-secondary btn-sm btn-block">
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm btn-block"
                          onClick={() => deleteProduct(product.id)}
                          >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        {/* <ProductList products = {products}/> */}
      </div>
    </section>
  );
}

export default Product;
