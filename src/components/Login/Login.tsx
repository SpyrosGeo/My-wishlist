import { useState } from "react";
import { login } from "../../services/auth";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string|null>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null)
    try {
      await login(username, password);
    } catch (error) {
      setError("Invalid username or password");
    }
  } 
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
  return (
  <>
  <div className="login__container">
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="username">Username</label>
    <input id="username" value={username} onChange={handleUsername} type="text" />
    </div>
<div>
    <label htmlFor="password">Password</label>
    <input id="password" value={password} onChange={handlePassword} type="password" />
    </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
    </form>
  </div>
  </>
  )
}

export default Login