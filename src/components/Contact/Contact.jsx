import React, { useState } from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xjvnvdzb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                alert('Form submitted successfully!');
                
            } else {
                alert('Error submitting form!');
            }
        } catch (error) {
            console.error('Error occurred while submitting the form:', error);
        }
    };
    

    return (
        <footer id="contact" className={styles.container}>  
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach Out To Me</p>
            
            <form onSubmit={handleSubmit} className={styles.form} action='https://formspree.io/f/xjvnvdzb' method='POST'>
                <div className={styles.formGroup}>
                <p>Contact Form </p> <br />
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
            
            <ul className={styles.links}>
                <p>Social Links</p>
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
    );
};

export default Contact;
