import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({product}) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={{height:'140px', width:'140px'}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;