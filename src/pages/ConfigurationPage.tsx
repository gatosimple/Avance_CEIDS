import './tailwind.css';

const ConfigurationPage = () => {
    return <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Configuración de Perfil</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-picture">
                        Foto de Perfil
                    </label>
                    <div className="flex items-center space-x-4">
                        <img src="../assets/logo_ulima.png" alt="Foto de Perfil" className="w-16 h-16 rounded-full"/>
                        <input type="file" id="profile-picture" className="hidden"/>
                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Cambiar Foto
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingresa tu nombre"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Nombre de Usuario
                    </label>
                    <input type="text" id="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingresa tu nombre de usuario"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingresa tu contraseña"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Descripción
                    </label>
                    <textarea id="description" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Escribe una descripción sobre ti"></textarea>
                </div>
                <div className="flex justify-between">
                    <button type="button" className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                        Cerrar Sesión
                    </button>
                    <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default ConfigurationPage;