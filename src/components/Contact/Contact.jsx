import React from 'react'
import styles from './Contact.module.css'
import {getImageUrl} from '../../utils'
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Reach Out To Me</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                <a href="mailto:vankudresohi16@gmail.com">vankudresohi16@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
                <a href="https://www.linkedin.com/in/sohi-vankudre/">linkedin.com/sohi-vankudre</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                <a href="https://www.github.com/sohi16">github.com/sohi16</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact