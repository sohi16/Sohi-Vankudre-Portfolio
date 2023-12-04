import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './ProjectCard.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ProjectCard = ({project:{title,imageSrc,description,skills,demo,source,carouselImages}}) => {
  return (
        <div className={styles.container}>
               <div className={styles.carouselRoot}>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div className={styles.slide}>
            <img src={getImageUrl(imageSrc)} alt={title} className={styles.carouselImage} />
          </div>
          {carouselImages.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={getImageUrl(image)} alt={`${title}-${index}`} className={styles.carouselImage} />
            </div>
          ))}
        </Carousel>
      </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <ul className={styles.skills}>
                {skills.map((skill,id)=>{
                 return <li key={id} className={styles.skill}>{skill}</li>
                })}
              </ul>
              <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
              </div>
        </div>
  )
}

export default ProjectCard