import { Link } from "react-router";
import Button from "../button/Button";
import Input from "../input/Input";

const RegisterForm = () => {
  return (
    <form className="w-full max-w-md border border-gray-300 rounded-lg bg-white p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-2">
          Create an account
        </h1>
        <p className="text-sm text-[hsl(215,16%,47%)]">
          Get started with TaskFlow today
        </p>
      </div>
      <div className="space-y-6 mb-8">
        <Input
          label="Email"
          placeholder="you@example.com"
          type="email"
          className="w-full px-2 py-1.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <Input
          label="Password"
          placeholder="········"
          type="password"
          className="w-full px-2 py-1.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <Button
        text="Create account"
        type="submit"
        className="w-full py-2 font-semibold text-sm bg-[hsl(222,47%,11%)] cursor-pointer rounded-lg text-white hover:bg-[hsl(222,47%,15%)] transition-colors mb-6"
      />
      <p className="text-center text-base text-[hsl(215,16%,47%)]">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-[hsl(222,47%,11%)] font-semibold cursor-pointer hover:underline">
            Sign in
          </span>
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
