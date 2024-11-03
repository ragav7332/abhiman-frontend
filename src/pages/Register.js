import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const rules = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    return {
      isValid: Object.values(rules).every(Boolean),
      rules
    };
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const { isValid, rules } = validatePassword(formData.password);
      if (!isValid) {
        newErrors.password = 'Password must meet all requirements';
        newErrors.passwordRules = rules;
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).filter(key => key !== 'passwordRules').length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/login');
    }
  };

  const renderPasswordRequirements = () => {
    const { rules = {} } = errors.passwordRules || { rules: validatePassword(formData.password).rules };
    
    return (
      <div className="text-sm mt-2 space-y-1">
        <p className={`flex items-center ${rules.minLength ? 'text-green-600' : 'text-gray-600'}`} style={{ color: '#000' }}>
          <span className={`mr-1 ${rules.minLength ? 'text-green-600' : 'text-gray-400'}`}>
            {rules.minLength ? '✓' : '○'}
          </span>
          At least 8 characters
        </p>
        <p className={`flex items-center ${rules.hasUppercase ? 'text-green-600' : 'text-gray-600'}`}  style={{ color: '#000' }}>
          <span className={`mr-1 ${rules.hasUppercase ? 'text-green-600' : 'text-gray-400'}`}>
            {rules.hasUppercase ? '✓' : '○'}
          </span>
          One uppercase letter
        </p>
        <p className={`flex items-center ${rules.hasLowercase ? 'text-green-600' : 'text-gray-600'}`}  style={{ color: '#000' }}>
          <span className={`mr-1 ${rules.hasLowercase ? 'text-green-600' : 'text-gray-400'}`}>
            {rules.hasLowercase ? '✓' : '○'}
          </span>
          One lowercase letter
        </p>
        <p className={`flex items-center ${rules.hasNumber ? 'text-green-600' : 'text-gray-600'}`}  style={{ color: '#000' }}>
          <span className={`mr-1 ${rules.hasNumber ? 'text-green-600' : 'text-gray-400'}`}>
            {rules.hasNumber ? '✓' : '○'}
          </span>
          One number
        </p>
        <p className={`flex items-center ${rules.hasSpecialChar ? 'text-green-600' : 'text-gray-600'}`}  style={{ color: '#000' }}>
          <span className={`mr-1 ${rules.hasSpecialChar ? 'text-green-600' : 'text-gray-400'}`}>
            {rules.hasSpecialChar ? '✓' : '○'}
          </span>
          One special character
        </p>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc', // Light background color
    }}>
      <div className="card w-full max-w-md mx-4 bg-white">
        <div className="card-body p-8">
          <h2 className="card-header text-2xl font-bold text-center mb-6" style={{ color: '#000' }}>Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="form-label" style={{ color: '#000' }}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`input w-full ${errors.email ? 'input-error' : ''}`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && (
                <span className="form-error mt-1">{errors.email}</span>
              )}
            </div>

            <div className="form-group" style={{marginBottom:'10px'}}>
              <label className="form-label" style={{ color: '#000' }}>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className={`input w-full ${errors.password ? 'input-error' : ''}`}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              {renderPasswordRequirements()}
              {errors.password && (
                <span className="form-error mt-1">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: '#000' }}>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className={`input w-full ${errors.confirmPassword ? 'input-error' : ''}`}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              {errors.confirmPassword && (
                <span className="form-error mt-1">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="card-footer mt-6" style={{justifyContent:'center',marginBottom:'15px'}}>
            <button type="submit" className="btn btn-primary w-full" >
              Register
            </button>
            </div>

            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-primary-focus">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
