import Head from "next/head"
import styles from '../../styles/Layout.module.css'
import Header from "@/component/Header/Header"
import Footer from "@/component/Footer/Footer"
import ShowCase from "@/component/ShowCase/ShowCase"
import { useRouter } from "next/router"

function Layout({title, description ,keyword,children}) {
   let Router = useRouter()
   return (
     <div >
        <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keyword' content={keyword} />
     </Head>
      <Header/>
      {Router.pathname === '/' && <ShowCase/>}
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