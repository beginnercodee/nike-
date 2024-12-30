import React from "react";
import { Link } from "react-router";

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-10">
                <h2 className="text-4xl font-extrabold text-center text-coral-red mb-6">
                    Create Your Account
                </h2>
                <p className="text-gray-600 text-center mb-8 text-lg">
                    Sign up to get started!
                </p>
                <form>
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-coral-red focus:border-coral-red shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-coral-red focus:border-coral-red shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-coral-red focus:border-coral-red shadow-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-coral-red text-white py-3 rounded-lg hover:bg-red-500 transition duration-200 shadow-md font-semibold"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-8 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/sign-in"
                        className="text-coral-red hover:underline font-medium"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
