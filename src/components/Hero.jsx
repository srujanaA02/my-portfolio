import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'

export default function Hero() {
  const parallax = useParallax({ speed: -12 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-[#030712] to-[#030712]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Parallax glow */}
      <div
        ref={parallax.ref}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-6"
        >
          Hello, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          <span className="block text-white">AKETI</span>
          <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            LAKSHMI SRUJANA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full Stack Developer focused on building modern,
          responsive, and high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:scale-105 transition-all duration-300 rounded-full font-semibold shadow-lg shadow-purple-500/20"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-gray-600 hover:border-purple-400 hover:bg-white/5 transition-all duration-300 rounded-full font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}