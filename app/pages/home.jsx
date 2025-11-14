import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioHome() {
  return (
    <div className="min-h-screen w-full bg-white-50 p-8 flex flex-col items-center">
      <header className="w-full max-w-5xl flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Zakiya Coutoure</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#portfolio" className="hover:underline">View Portfolio</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-4xl text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Get To Know Zakiya Cotoure
        </motion.h2>
        <p className="text-xl text-gray-600 mb-8">
            Multifacited, Alluring, Captivating
        </p>
        <Button className="text-lg px-6 py-4 rounded-2xl">See The Vision</Button>
      </section>

      <section id="projects" className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        {[1,2,3].map((i) => (
          <Card key={i} className="rounded-2xl shadow-lg">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="h-40 bg-gray-200 rounded-xl" />
              <h3 className="text-xl font-semibold">Your Model {i}</h3>
              <p className="text-gray-600 text-sm">Zakiya Austin, 27, 5'7</p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="about" className="max-w-3xl text-center mb-28">
        <h2 className="text-4xl font-bold mb-4">Let's Get Acquainted</h2>
        <p className="text-gray-700 text-lg">
         "I can't wait to make connections and grow together. I hope you like what you see, and contact me in the link above." - Zakiya 
        </p>
      </section>

      <section id="contact" className="max-w-3xl text-center mb-28">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <Button className="text-lg px-6 py-4 rounded-2xl">Send Message</Button>
      </section>
    </div>
  );
}
