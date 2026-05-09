import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#030712] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-fuchsia-600 blur-2xl opacity-25" />

            {/* Card */}
            <div className="relative w-72 h-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Replace later with your image */}
              <span className="text-gray-400 text-lg">
                Your Photo
              </span>

              {/*
              Example:

              <img
                src="/profile.webp"
                alt="Aketi Lakshmi Srujana"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              */}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            About Me
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Crafting modern and accessible web experiences.
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-semibold">Aketi Lakshmi Srujana</span>,
              a passionate Full Stack Developer from Andhra Pradesh focused on
              building responsive, scalable, and user-friendly web applications.
            </p>

            <p>
              My core expertise includes React, JavaScript, Tailwind CSS,
              and modern frontend development workflows. I enjoy solving
              complex problems and transforming ideas into clean digital products.
            </p>

            <p>
              Currently, I am exploring advanced frontend architecture,
              backend integration, cloud deployment, and performance optimization
              to become a stronger full stack engineer.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="border border-white/10 bg-white/5 rounded-2xl p-5 text-center backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400">10+</h3>
              <p className="text-sm text-gray-400 mt-2">Projects</p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-5 text-center backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400">2+</h3>
              <p className="text-sm text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-5 text-center backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400">100%</h3>
              <p className="text-sm text-gray-400 mt-2">Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}