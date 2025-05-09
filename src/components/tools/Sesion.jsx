import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [credentials, setCredentials] = useState([])

  useEffect(() => {
    fetch("/credentials.json")
      .then(res => res.json())
      .then(data => setCredentials(data))
      .catch(err => console.error("Error cargando credenciales:", err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const usuarioValido = credentials.find(
      (cred) => cred.email === email && cred.password === password
    )

    if (usuarioValido) {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/systems")
    } else {
      setError("Credenciales incorrectas")
    }
  }

  return (
    <div className="sm:flex justify-center bg-white py-4 sm:py-10 mx-8">
      <form className="grid sm:grid-rows-5 sm:grid-cols-2 items-center gap-2 m-2 p-4 sm:p-8 border-2 border-primary-300 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h1 className="sm:col-span-2 text-center text-2xl md:text-4xl font-bold text-primary-500 border-b-2">INGRESAR CREDENCIALES</h1>
        <p className="font-bold text-lg md:text-xl sm:w-sm">Correo:</p>
        <input
          name="email"
          autoComplete="email"
          type="email"
          placeholder="ejemplo@ejemplo.ej"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 sm:block px-3 py-2 md:text-md md:text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
          required
        />
        <p className="font-bold text-lg md:text-xl sm:w-sm">Contraseña:</p>
        <input
          name="password"
          autoComplete="current-password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 sm:block px-3 py-2 text-md md:text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
          required
        />
        <button className="sm:row-span-5 sm:col-start-2 sm:row-start-2 sm:my-10 sm:mx-20 py-3 px-6 bg-primary-500 border rounded-full font-bold text-white shadow-md transition duration-100 hover:bg-primary-100 hover:text-primary-700 hover:border-primary-700 ease-in" type="submit">INICIAR SESIÓN</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login
