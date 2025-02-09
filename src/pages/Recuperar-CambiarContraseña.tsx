import { useNavigate } from 'react-router-dom';

const CambiarContraseña = () => {
    const navigate = useNavigate();

    const handleCambio = () => {
        navigate('/cambio-exitoso');
      };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%'}}>
                <h3 className="text-center">Cambiar Contraseña</h3>
                <p className="text-muted text-center">Ingresa tu nueva contraseña</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                            placeholder="Ingresa tu nueva contraseña"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirma tu nueva contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={handleCambio}>Confirmar Cambios</button>
                </form>
            </div>
        </div>
    );
};

export default CambiarContraseña;