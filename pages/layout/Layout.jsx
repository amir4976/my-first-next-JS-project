import Head from "next/head"
import styles from '../../styles/Layout.module.css'
import Header from "@/component/Header/Header"
import Footer from "@/component/Footer/Footer"
function Layout({title, description ,keyword,children}) {
   return (
     <div >
        <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keyword' content={keyword} />
     </Head>
      <Header/>
    <div className={styles.container}>
     {children}

    </div>
    <Footer/>

     </div>
   )
 }
 

 Layout.defaultProps={
    title:'dj events',
    description:'none'
 }
 export default Layout