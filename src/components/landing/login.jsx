import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [credentials, setCredentials] = useState([])

  // Cargar credenciales desde credentials.json
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
    <div className="flex justify-center bg-linear-to-br from-primary-200 to-primary-600 py-10">
      <form className="grid grid-rows-5 grid-cols-2 gap-2 p-8 bg-gray-100 border-2 rounded-2xl border-primary-700 shadow-2xl" onSubmit={handleSubmit}>
        <h1 className="col-span-2 text-center text-3xl font-bold text-primary-500 border-b-2">INGRESAR CREDENCIALES</h1>
        <p className="font-bold w-sm">Correo:</p>
        <input
          name="email"
          autoComplete="email"
          type="email"
          placeholder="ejemplo@ejemplo.ej"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-sm px-4 border"
          required
        />
        <p className="font-bold w-sm">Contraseña:</p>
        <input
          name="password"
          autoComplete="current-password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-sm px-4 border"
          required
        />
        <button className="row-span-3 col-start-2 row-start-2 my-10 mx-20 bg-primary-500 border rounded-xl font-bold text-white shadow-md transition duration-100 hover:bg-primary-100 hover:text-primary-700 hover:border-primary-700 ease-in" type="submit">INICIAR SESIÓN</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login
