import React from 'react'
import styles from './Carlos.module.css'
const Carlos = () => {
  return (
    <div>
      <div className={styles.background}>
        <img src='assets-carlos/corner top left.svg' className={styles.l1} alt='leave1' />
        <img src='assets-carlos/middle top left.svg' className={styles.l2} alt='leave2' />
        <img src='assets-carlos/middle top.svg' className={styles.l3} alt='leave3' />
        <img src='assets-carlos/top left.svg' className={styles.l4} alt='leave4' />
        <img src='assets-carlos/top right.svg' className={styles.l5} alt='leave5' />
        <img src='assets-carlos/middle left.svg' className={styles.l6} alt='leave6' />
        <img src='assets-carlos/bottom left.svg' className={styles.l7} alt='leave7' />
        <img src='assets-carlos/botrom right.svg' className={styles.l8} alt='leave8' />
        <div className='white-frame'>
          <p>TE INVITO A MI</p>
          <p>CUMPLEAÑOS</p>
          <p>SAB | 20 | MAY</p>
          <p>19 HS</p>
          <p>EN MI CASA</p>
          <button>VER <img src='assets-carlos/ubic icon.svg' className={styles.ubic} alt='ubication icon' /></button>
          <p>CARLOS ROA</p>
        </div>
      </div>
    </div>
  )
}

export default Carlos