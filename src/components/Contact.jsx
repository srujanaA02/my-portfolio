import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-10 leading-relaxed"
        >
          I am open to freelance, internship, and full-time opportunities.
          Feel free to reach out — I reply within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:alakshmisrujana239@gmail.com"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition-colors"
          >
            alakshmisrujana239@gmail.com
          </a>

          <a
            href="https://github.com/srujanaA02"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-medium transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/srujanaaketi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-medium transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}