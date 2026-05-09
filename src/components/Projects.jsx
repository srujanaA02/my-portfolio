import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CollegeFinder Platform',
    description:
      'A production-grade college discovery platform with search, filters, pagination, comparison tools, and dynamic college detail pages.',
    tech: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    github: 'https://github.com/srujanaA02/college-platform',
    demo: 'https://college-platform-tau-nine.vercel.app',
  },

  {
    title: 'AI Resume Analyzer',
    description:
      'An intelligent resume analysis platform with AI-powered scoring, skills gap analysis, job recommendations, and LinkedIn-based profile enhancement.',
    tech: [
      'Python',
      'Streamlit',
      'Ollama LLM',
      'SQLite',
      'Plotly',
    ],
    github:
      'https://github.com/srujanaA02/Smart-Resume-Analyzer-with-Personalized-Job-Recommendations-and-LinkedIn-Based-Profile-Enhancement',
    demo: '',
  },

  {
    title: 'Offline Customer Support Chatbot',
    description:
      'An offline AI-powered e-commerce support chatbot using Ollama and Llama 3.2 with zero-shot vs one-shot prompt evaluation and response quality analysis.',
    tech: [
      'Python',
      'Ollama',
      'Llama 3.2',
      'Prompt Engineering',
      'LLM Evaluation',
    ],
    github:
      'https://github.com/srujanaA02/offline-customer-support-chatbot',
    demo: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-500/50 transition-colors"
          >
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                GitHub →
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}