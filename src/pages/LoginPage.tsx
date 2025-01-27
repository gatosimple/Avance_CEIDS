import './LoginPage.css';

const LoginPage = () => {
  return <div className="flex h-screen">
    <div className="w-1/2 flex items-center justify-center bg-black text-white">
      <img src="" alt="Logo" className="h-64 w-64" />
    </div>
    <div className="w-1/2 flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <form className="">
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="username" type="text" placeholder="Username"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="bg-white border rounded w-full py-2 px-3 text-gray-700 mb-3"
              id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-50"
              type="button">Sign In</button>
            <button
              className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 w-50"
              type="button">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
};

export default LoginPage;