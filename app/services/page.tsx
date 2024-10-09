import React from 'react'
import Link from "next/link"
import style from "./services.module.css"
import style2 from "./services.module.css"
const ServicesPage = () => {
  return (
    <div className={style.main}>
        <h1>This is Services Page</h1>
        <p className={style2.link}><Link href="/services/web-dev" target='_blank'>Web Development</Link></p>
        <p>(click here)</p>
    </div>
  )
}

export default ServicesPage