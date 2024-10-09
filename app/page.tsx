import Link from 'next/link'
import React from 'react'
import style from "./page.module.css"
import style2 from "./page.module.css"
import style3 from "./page.module.css"
import style4 from "./page.module.css"
const HomePage = () => {
  return (
    <>
    <div className={style.main}>
      <h1 className={style2.logo}>Nice</h1>
      <ul className={style3.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contact" target='_blank'>Contact Us</Link></li>
        <li><Link href="/services" target='_blank'>Services</Link></li>
      </ul>
    </div>
    <div>
    <h1 className={style4.text}>This is Home Page</h1>
  </div>
  </>
  )
}

export default HomePage
