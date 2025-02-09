import { useNavigate } from 'react-router-dom';

const CambioExitoso = () => {
    const navigate = useNavigate();

    const handleRetorno = () => {
        navigate('/');
      };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
                <h3 className="text-center text-dark fw-bold">¡Cambio de Contraseña Exitoso!</h3>
                <p className="text-muted text-center">Tu contraseña ha sido cambiada correctamente.</p>
                <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={handleRetorno}>
                        Volver al inicio de sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CambioExitoso;