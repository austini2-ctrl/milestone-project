import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaDownload } from "react-icons/fa";

const projects = [
  {
    title: "Digitals",
    description: "Meet your model",
    image: "/images/project1.jpg",
    demo: "https://project1.demo.com",
    zip: "/downloads/project1.zip"
  },
  {
    title: "Project Two",
    description: "Another awesome project.",
    image: "/images/project2.jpg",
    github: "https://github.com/username/project2",
    demo: "https://project2.demo.com",
    zip: "/downloads/project2.zip"
  },
  {
    title: "Project Three",
    description: "A creative project idea.",
    image: "/images/project3.jpg",
    github: "https://github.com/username/project3",
    demo: "https://project3.demo.com",
    zip: "/downloads/project3.zip"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-2xl shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex gap-4 flex-wrap">
                <Button as="a" href={project.github} target="_blank" variant="outline">GitHub</Button>
                <Button as="a" href={project.demo} target="_blank">Live Demo</Button>
                <Button as="a" href={project.zip} download className="flex items-center gap-2">
                  <FaDownload /> Download ZIP
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-6 text-2xl">
        <a href="https://github.com/username" target="_blank" className="hover:text-gray-800"><FaGithub /></a>
        <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-blue-600"><FaLinkedin /></a>
        <a href="https://twitter.com/username" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
      </div>
    </div>
  );
}
