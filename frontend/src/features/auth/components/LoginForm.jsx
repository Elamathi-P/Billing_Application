import { useState } from "react";
import InputField from "../../../shared/components/InputField";
import PasswordField from "../../../shared/components/PasswordField";
import Button from "../../../shared/components/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
        Welcome Back 👋
      </h1>

      <p className="mb-6 text-center text-slate-500">Sign in to continue</p>

      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          label="Password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default LoginForm;
