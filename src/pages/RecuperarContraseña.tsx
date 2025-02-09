import { useNavigate } from 'react-router-dom';

const RecuperarContraseña = () => {
    const navigate = useNavigate();

    const handleCambiarContraseña = () => {
        navigate('/nueva-contraseña');
      };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%'}}>
                <h3 className="text-center">Recuperar Contraseña</h3>
                <p className="text-muted text-center">Ingresa tu correo para restablecer tu contraseña</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={handleCambiarContraseña}>Enviar Enlace</button>
                </form>
                <div className="text-center mt-3">
                    <button className="btn btn-link text-decoration-none">
                        Volver al inicio de sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecuperarContraseña;