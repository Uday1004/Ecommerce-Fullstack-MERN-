import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`Fetching product with ID: ${id}`); // Debugging log
      try {
        const response = await axios.get(`http://localhost:5000/bikes/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <MDBCard>
      <MDBCardImage src={`http://localhost:5000/uploads/${product.image}`} position="top" alt={product.name} />
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardText>Price: {product.priceRange} rs</MDBCardText>
        <MDBCardText>Description: {product.description}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Details;
