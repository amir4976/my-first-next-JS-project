import Head from "next/head"
import styles from '../../styles/Layout.module.css'


function Layout({title, description ,keyword,children}) {
   return (
     <div >
        <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keyword' content={keyword} />
     </Head>
    <div className={styles.container}>
     {children}

    </div>

     </div>
   )
 }
 

 Layout.defaultProps={
    title:'dj events',
    description:'none'
 }
 export default Layout