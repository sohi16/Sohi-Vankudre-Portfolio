import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="about img" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>

            <div className={styles.aboutItemText}>
              <div className={styles.personal}>
                <img src={getImageUrl("about/personal.png")} alt="Cursor icon" />
                <h3>Personal Details</h3>
              </div>
              <p>
                Name: Sohi Vankudre <br />
                Age: 23 <br />
                Address: Kolhapur, Maharashtra. <br />
                Education: MCA <br />
              </p>
              <hr /> <br />
              <p>
                Hello, I'm Sohi Vankudre, a versatile software developer actively seeking opportunities in software development, full stack web development and machine learning.
                My expertise spans front-end technologies such as HTML, CSS, React JS, ASP.NET, complemented by grasp of
                databases like MySQL, SQL Server, MongoDB.
                My programming proficiency extends acroos languages like C, PHP, Python, JavaScript, C#, NodeJS allowing me to navigate various tech landscapes.
              </p>
              <p>
                I have hands on experience in developing applications using ASP.NET and C#.
                While I possess foundational knowledge in Machine Learning and Data Science, I'm eager to deepen my expertise.
                Moreover, I have also explored the basics of Blockchain technology and solidity programming.
              </p>
              <p>
                With a preference for learning and drive for innovation, I aim to contribute my skills for creating innovative solutions in the ever-evolving tech industry.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default About

            