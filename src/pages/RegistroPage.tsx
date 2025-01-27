const RegistroPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark w-100 min-vh-100">
            <div className="card shadow col-lg-4 col-md-8 p-4">
                <h1 className="text-center text-warning mb-4">RedditApp</h1>
                <h2 className="text-center mb-4">Crear cuenta de usuario</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Correo Electrónico:</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            placeholder="usuario@email.com" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            className="form-control" 
                            placeholder="Tu nombre" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos:</label>
                        <input 
                            type="text" 
                            name="apellidos" 
                            className="form-control" 
                            placeholder="Tus apellidos" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Género:</label>
                        <select 
                            className="form-select" 
                            name="genero" 
                            required
                        >
                            <option value="">Seleccionar...</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            placeholder="Mínimo 8 caracteres" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Repetir Contraseña:</label>
                        <input 
                            type="password" 
                            name="repassword" 
                            className="form-control" 
                            placeholder="Repite tu contraseña" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha de Nacimiento:</label>
                        <input 
                            type="date" 
                            name="fecha_nacimiento" 
                            className="form-control" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        id="margen-superior-boton"
                        className="btn btn-warning w-100"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroPage;