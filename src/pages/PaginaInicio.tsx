import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaginaInicio = () => {
  const navigate = useNavigate();

  const handleConfiguration = () => {
    navigate('/configuracion');
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand>Inicio</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-primary" onClick={handleConfiguration}>
            Configuración
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default PaginaInicio;