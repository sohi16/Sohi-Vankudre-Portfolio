import React from 'react'
import styles from './Projects.module.css'
import projects from '../../components/Data/projects.json'
import ProjectCard from './ProjectCard'
import 'react-responsive-carousel'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((project,id)=>{
            return (
              <ProjectCard key={id} project={project}></ProjectCard>
            );
          })

        }
      </div>
    </section>
  )
}

export default Projects