"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Register  = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signIn("credentials", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                redirect: false,
            });
            if (result.error) {
                console.error("Registration failed:", result.error);
            } else {
                console.log("Registration successful!");
                // Optionally redirect the user
                // router.push("/dashboard");
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
            <p className="text-center text-blue-600 font-bold ">Welcome to DevConnect, Let's get started...</p>
                <h2 className="text-3xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                            Register
                        </button>
                    </div>
                    <div className="text-sm text-center">
                        Already have an account? <Link href="/auth/login" className="text-blue-600 hover:underline">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;