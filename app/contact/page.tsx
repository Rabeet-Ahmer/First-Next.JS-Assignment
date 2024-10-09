import React from 'react'
import style from "./contact.module.css"
import style2 from "./contact.module.css"
import style3 from "./contact.module.css"
const ContactPage = () => {
  return (
    
    <div className={style.main}>
        <h1 className={style2.h}>This is Contact Page</h1>
        <div className={style3.info}>
            <p><b>Gmail:</b>abc@gmail.com</p>
            <p><b>Phone:</b>0300000042</p>
        </div>
    </div>
  )
}

export default ContactPage