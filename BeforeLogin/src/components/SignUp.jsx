import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signUpcontainer">
      <div className="card">
        <h2 className="title">Sign Up</h2>

        {/* Form */}
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <input type={showPassword ? "text" : "password"} placeholder="Create a password" />
            <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="signup-btn">Sign up</button>
        </form>

        {/* OR Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Social Buttons */}
        <button className="social-btn google">
          <FcGoogle className="icon" /> Continue with Google
        </button>
        <button className="social-btn apple">
          <BsApple className="icon" /> Continue with Apple
        </button>

        {/* Footer */}
        <p className="footer-text">
          Already have an account? <Link to="/loginmain">Log in</Link>
        </p>
        <p className="terms-text">
          By signing up you agree to our <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
