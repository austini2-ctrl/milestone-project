import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you would typically send the data to a server
    console.log("Form submitted", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      {submitted && (
        <p className="mb-6 text-green-600 font-medium">Your message has been sent!</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg flex flex-col"
      >
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your Name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Your Email"
        />
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your Message"
            rows={5}
          />
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
        </div>
        <Button type="submit" className="mt-4 px-6 py-3 rounded-2xl">Send Message</Button>
      </form>
    </div>
  );
}
