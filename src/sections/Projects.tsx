import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Projects() {
  const projectsData = [
    {
      image: '/project1.png',
      projectName: 'Pokedex',
      projectLink: 'https://netlify.com',
      projectDescription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      projectTech: [
        'React',
        'Redux Toolkit',
        'SCSS',
        'Firebase',
        'Typescript',
        'PokeApi'
      ],
      projectExternalLinks: {
        github: '',
        externalLink: ''
      }
    },
    {
      image: '/project2.png',
      projectName: 'Realtime Chat App',
      projectLink: 'https://netlify.com',
      projectDescription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      projectTech: [
        'React',
        'Sockets',
        'Node.js',
        'Express',
        'MongoDB',
        'Styled Components'
      ],
      projectExternalLinks: {
        github: '',
        externalLink: ''
      }
    },
    {
      image: '/project3.png',
      projectName: 'Netflix App',
      projectLink: 'https://netlify.com',
      projectDescription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      projectTech: [
        'React',
        'Node.js',
        'Firebase',
        'MongoDB',
        'Express',
        'Redux Toolkit'
      ],
      projectExternalLinks: {
        github: '',
        externalLink: ''
      }
    }
  ]
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 }
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 }
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map(tech => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
