import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="about img" className={styles.aboutImage}/>
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
                Address: Kolhapur, Maharashtra. <br /><br />
                </p>
                
                <p>
                I'm software developer and actively looking for opportunities in software development,full stack web development and machine learning.
                I am proficient in front end languages and technologies like HTML, CSS, REACT JS, ASP.Net 
                and database like MySQL, SQL Server, MongoDB.
                I also have good understanding of programming languages like C, PHP, Python, JavaScript, C#, NodeJS and 
                experience in working with Asp.net and C# applications.
                I have basic understanding of Machine Learning and Data Science concepts.
                I have also learned Blockchain Technology basics and applied them using solidity language.
              

              </p>
            </div>
          </li>
          
            </ul>
        </div>
    </section>
  )
}

export default About

{/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Introduction</h3>
                <p>
                I'm software developer and actively looking for opportunities in software development.
                I am proficient in front end languages and technologies like HTML, CSS, REACT JS, ASP.Net 
                and database like MySQL, SQL Server, MongoDB.
                I also have good understanding of programming languages like C, PHP, Python, JavaScript, C#, NodeJS and 
                experience in working with Asp.net and C# applications.
                I have basic understanding of Machine Learning and Data Science concepts.
                I have also learned Blockchain Technology basics and applied them using solidity language.
                </p>
                </div>
            </li> */}