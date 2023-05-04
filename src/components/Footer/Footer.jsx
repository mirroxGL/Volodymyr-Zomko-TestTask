import React from 'react'
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import s from "./footer.module.css"

const Footer = () => {
   return (
      <footer>
         <div className={s.footer__container}>
            <div className={s.footer__body}>
               <div className={s.footer__info}>
                  <a href="/" className={s.info_item}>Contacts</a>
                  <a href="/" className={s.info_item}>About us</a>
                  <a href="/" className={s.info_item}>Blog</a>
                  <a href="/" className={s.info_item}>Partnerships</a>
               </div>
               <div className={s.footer__socials}>
                  <AiFillTwitterCircle className={s.social} />
                  <BsFacebook className={s.social} />
                  <AiOutlineInstagram className={s.social} />
               </div>
            </div>
         </div>
         <div className={s.footer__privacy}>
            <span>© 2022, G-Store // made with ❤️ in Poland </span>
         </div>
      </footer>
   )
}

export default Footer
