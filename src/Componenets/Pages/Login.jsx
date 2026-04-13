import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../Animation/animation.json';
import Logo from '../../Food_Assets/assets/logo/logo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    if (isLogin) {
      const storedUser = localStorage.getItem(email);

      if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.password === password) {
          localStorage.setItem('loggedInUser', email);
          navigate('/home');
        } else {
          alert('Incorrect password');
        }
      } else {
        alert('User not found. Please register first.');
      }
    } else {
      if (localStorage.getItem(email)) {
        alert("User already exists!");
      } else {
        localStorage.setItem(email, JSON.stringify({ email, password }));
        alert("Registered successfully!");
        setIsLogin(true);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px"
      }}
    >
      <style>
        {`
          @keyframes customSlideRightToLeft {
            0% {
              transform: translateX(150px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .custom-slide-rtl {
            animation: customSlideRightToLeft 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT SIDE */}
        <div
          className="animate-wrapper"
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#f1f5f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 30px"
          }}
        >
          {/* STYLISH ANIMATED TEXT AT TOP */}
          <h2
            className="custom-slide-rtl"
            style={{
              marginBottom: "30px",
              color: "#e63946",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
              fontSize: "3rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            Serve Your Hunger
          </h2>

          <Lottie
            animationData={animationData}
            loop
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >

          {/* LOGO */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={Logo} alt="logo" style={{ width: "150px" }} />
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc"
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid #ccc"
              }}
            />

            <button
              type="submit"
              className="w-100 py-2 fw-bold text-uppercase border-0"
              style={{
                width: "100%",
                padding: "12px",
                background: "#e63946",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 14px rgba(230, 57, 70, 0.4)"
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* SWITCH */}
          <p style={{ textAlign: "center", marginTop: "15px", color: "gray" }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: "#e63946", cursor: "pointer", marginLeft: "5px", fontWeight: "bold" }}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;