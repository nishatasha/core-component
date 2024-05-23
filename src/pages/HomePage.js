import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../css/HomePage.module.css";
import s1Image from "../images/rtx-3090.jpg";
import progressGraph from "../images/progress-graph.jpg"; 

const HomePage = (props) => {
  return (
    <div className={styles.container}>
      <main>
        {/* Hero Banner Section */}
        <motion.section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className={styles.s1Title}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nvidia GeForce RTX 3090
          </motion.h1>
          <motion.p 
            className={styles.s1Subtitle}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Now available for preorder, shipping December, 2024.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link className={styles.s1Link} to="/shopping-cart/catalog">
              Shop now
            </Link>
          </motion.div>
        </motion.section>

        {/* Company Information Section */}
        <motion.section 
          className={styles.infoSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>About Core Components</h2>
            <p className={styles.infoText}>
              Founded in 2024, we specialize in providing top-notch computer
              hardware and accessories. With years of experience in the industry,
              we are dedicated to bringing you the best products at competitive
              prices. Our mission is to enhance your computing experience with
              our high-quality products and exceptional customer service.
            </p>
            <p className={styles.infoText}>
              Core Component's software platform, with over 175 million users,
              are composed of industry experts who are passionate about high tech
              performance and innovation. We constantly update our inventory with
              the latest and greatest in computer hardware to ensure you have
              access to the highest performance on the market.
            </p>
            <p className={styles.infoText}>
              Whether you're a gaming enthusiast, a professional content creator,
              or just create your own custom dream build PC, we have
              something for everyone. Thank you for choosing our store as your
              trusted source for all your computing needs.
            </p>

            {/* Graph Section */}
            <div className={styles.graphContainer}>
              <h3 className={styles.sectionSubtitle}>Our Progress Over the Years</h3>
              <motion.img 
                src={progressGraph} 
                alt="Company Progress Graph" 
                className={styles.graph}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section 
          className={styles.contactSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name:</label>
              <input type="text" id="name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email:</label>
              <input type="email" id="email" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message:</label>
              <textarea id="message" className={styles.formTextarea} required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className={styles.formButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
