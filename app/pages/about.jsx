import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white p-10 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        About Zakiya Couture
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-xl text-gray-700 text-center leading-relaxed mb-12"
      >
        Zakiya Couture is an Atlanta Based model known for her strong presence,
        captivating style, and perceptive creative vision. With a natural confidence
        and the ability to adapt to many aesthetics, Zakiya brings depth and
        elegance to every shoot she is part of.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl shadow-lg bg-white"
        >
          <h2 className="text-3xl font-semibold mb-4">Who She Is</h2>
          <p className="text-gray-700 leading-relaxed">
            Zakiya is a 27-year-old model standing at 5'7, known for her
            versatility across fashion, editorial, beauty, and brand work. She
            brings passion, creativity, and discipline into every collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl shadow-lg bg-white"
        >
          <h2 className="text-3xl font-semibold mb-4">Her Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            With a drive to grow, connect, and bring visual stories to life,
            Zakiya aims to collaborate with passionate creatives, brands, and
            photographers who see the world through an artistic lens.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 max-w-3xl text-center"
      >
        <p className="text-xl italic text-gray-600">
          “I’m excited to continue elevating my craft, connecting with talented
          individuals, and creating unforgettable visuals.”
        </p>
      </motion.div>
    </div>
  );
}
