
import { ILink } from "@/interfaces";
import React, { useState } from "react";
import styles from 'styles/components/common/Footer.module.scss';

const links: ILink[] = [
  { url: 'social', label: 'Social' },
  { url: '', label: 'Home' },
]

const Footer: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>('Home');

  const handleClick = (link: ILink): void => {
    console.log('Link to new page', link);
  }

  // Returns
  return (
    <div className={styles.wrap}>
      <div className={styles.linksWrap}>
        {links.map((link: ILink) => {
          return <div key={link.url} className={`${styles.link} ${activeScreen === link.label && styles.activeLink}`} onClick={() => handleClick(link)}>{link.label}</div>
        })}
      </div>
    </div>
  )
}

export default Footer;