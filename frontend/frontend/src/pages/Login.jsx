import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleState = () => {
    setCurrentState((prev) => (prev === 'Login' ? 'Sign Up' : 'Login'));
    setFormData({ name: '', email: '', password: '', remember: false });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (currentState === 'Sign Up' && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      alert(`${currentState} successful!\n\n` + JSON.stringify(formData, null, 2));
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F4D35E]">{currentState}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {currentState === 'Login' ? 'Welcome back!' : 'Create your new account'}
          </p>
        </div>

        {currentState === 'Sign Up' && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
              className={`input-style ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className={`input-style ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={loading}
            className={`input-style ${errors.password ? 'border-red-500' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2 text-lg"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </div>

        {currentState === 'Login' && (
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
              disabled={loading}
              className="mr-2"
            />
            Remember me
          </label>
        )}

        <div className="flex justify-between text-sm text-yellow-700">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => alert('Password reset flow coming soon!')}
          >
            Forgot password?
          </span>
          <span className="cursor-pointer hover:underline" onClick={toggleState}>
            {currentState === 'Login' ? 'Create account' : 'Login here'}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F4D35E] hover:bg-yellow-400 text-black py-2 rounded-lg transition font-semibold"
        >
          {loading ? (
            <span className="inline-block animate-spin border-2 border-black border-t-transparent rounded-full w-5 h-5 mx-auto"></span>
          ) : currentState === 'Login' ? (
            'Sign In'
          ) : (
            'Sign Up'
          )}
        </button>

        <div className="text-center text-sm text-gray-500">Or continue with</div>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-yellow-100 transition"
            onClick={() => alert('Google login coming soon!')}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-yellow-100 transition"
            onClick={() => alert('Facebook login coming soon!')}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
