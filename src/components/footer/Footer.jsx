import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.container}>
      <div>©{year} pamela. All rights reserved.</div>

      <div className={styles.social}>
        {/* wrap with Link later */}

        <Image
          src='/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt="pam'sFacebook Account"
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='pamela socials'
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='pamela socials'
        />
        <Image
          src='/4.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='pamela socials'
        />
      </div>
    </div>
  );
};

export default Footer;
