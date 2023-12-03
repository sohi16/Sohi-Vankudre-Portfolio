import React from 'react'
import {getImageUrl} from "../../utils"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Sohi</h1>
            <p className={styles.description}>I am a Software developer and completed my Master's of Computer Application</p>
            <a href="mailto:vankudresohi16@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='hero image' className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero