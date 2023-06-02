import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (

    <div className="container mt-5">

      {products.map((data, index) => (
        <div className="card" key={index}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={data.image}
                className="card-img d-flex"
                alt={data.name}
              />


            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{data.name}</h1>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold">Price:</span> {data.price}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Color:</span> {data.color}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Category:</span> {data.name_category}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Material:</span> {data.material}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Expiry Date:</span> {data.expiry_date}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Origin:</span> {data.origin}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Description:</span> {data.description}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Availability:</span> <span className="text-success">{data.tinhtranghang}</span>
                  </li>

                  <li className="list-group-item bg-primary">

                    <button>
                      <Link to={`/Edit/${data.id}`}>Edit</Link>
                    </button>

                  </li>



                  <li className="list-group-item bg-danger">

                    <button>
                      <Link to={`/Delete/${data.id}`}>Delete</Link>
                    </button>

                  </li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
