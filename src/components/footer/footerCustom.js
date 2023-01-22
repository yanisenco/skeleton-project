import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterCustom() {
  return (
    <footer>
    <Card className="text-center">
      <Card.Header>Nom de du site</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">1 days ago</Card.Footer>
    </Card>
    </footer>
  );
}

export default FooterCustom;