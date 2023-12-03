import React from 'react'
import styles from './Education.module.css'
import { getImageUrl } from '../../utils'
const Education = () => {
  return (
    <section className={styles.container} id="education">
        
      <h2 className={styles.title}>Education Details</h2> 
     <br />
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("education/degree.png")} alt="Cursor icon" className={styles.eduIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Master of Computer Applications </h3>
              <p>                
                Institute: Chhtrapati Shahu Institute of Business Education and Research, Kolhapur <br />
                Passing Year: 2023 <br />
                Percentage: 75%
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("education/degree.png")} alt="Server icon" className={styles.eduIcon} />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Computer Applications</h3>
              <p>
                Institute: Kamala College, Kolhapur <br />
                Passing Year: 2021 <br />
                Percentage: 85%
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("education/degree.png")} alt="UI icon" className={styles.eduIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary Certificate (Commerce)</h3>
              <p>
                Institute: DRK College of Commerce, Kolhapur <br />
                Passing Year: 2018 <br />
                Percentage: 75.54%
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("education/degree.png")} alt="UI icon" className={styles.eduIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Secondary School Certificate</h3>
              <p>
                Institute: New Model English School, Kolhapur <br />
                Passing Year: 2016 <br />
                Percentage: 86.20%
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Education