import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  { name: 'CSS', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  { name: 'React', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  { name: 'Node.js', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
  { name: 'Python', color: 'bg-blue-600/20 text-blue-200 border-blue-600/30' },
  { name: 'Git', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
  { name: 'Tailwind CSS', color: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
  { name: 'MongoDB', color: 'bg-green-600/20 text-green-300 border-green-600/30' },
  { name: 'SQL', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  { name: 'REST APIs', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { name: 'Docker', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border ${skill.color}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}