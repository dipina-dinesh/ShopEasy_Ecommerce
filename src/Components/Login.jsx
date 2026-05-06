import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // ✅ Basic validation
    if (user.username.trim() === "" || user.password.trim() === "") {
      alert("All fields are required");
      return;
    }

    if (user.password.length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }

    if (isLogin) {
      // LOGIN
      if (
        storedUser &&
        storedUser.username === user.username &&
        storedUser.password === user.password
      ) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", user.username); // ✅ store username

        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid username or password");
      }
    } else {
      // REGISTER
      if (storedUser && storedUser.username === user.username) {
        alert("User already exists. Please login.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      alert("Registered Successfully! Please login.");
      setIsLogin(true);
    }

    // ✅ Clear form after submit
    setUser({ username: "", password: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          style={styles.toggle}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "New user? Register here"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

// ✅ Simple styling
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  box: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "darkorange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggle: {
    marginTop: "10px",
    color: "blue",
    cursor: "pointer",
  },
};

export default Login;