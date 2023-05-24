import React from 'react'
import styles from "../Components/Mens.module.css";
import { MenAssets } from './MenItems';
 export const Mens = () => {
  return (
    <>
    <h1 className={`${styles.MenHead}`}>Mens Products</h1>
   <section className={`${styles.MenProducts}`}>
    {MenAssets.map((item,index)=>{
        const {Company,Itemname,url,price,cart}=item;
        return (
            <article key={index} className={`${styles.Product}`}>
               <img src={url} alt="loading"  className={`${styles.Image}`}/>
               <h3 className={`${styles.Company}`}>{Company}</h3>
               <h4 className={`${styles.Item}`}>{Itemname}</h4>
               <p className={`${styles.PriceCart}`}>
                <span className={`${styles.price}`}>{price}  </span>
                <span className={`${styles.cart}`}>{cart}</span>
                </p>
            </article>
        )
    })}
   </section>
   </>
  )
}

