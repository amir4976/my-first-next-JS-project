import Layout from "./layout/Layout"
import style from '../styles/404.module.css'
import Link from "next/link"
function NotFoundPage() {
  return (
    <Layout title={'page not found'}>
        <div className={style.error}>
        <h1>404</h1>
        <h1>sorry not found page</h1>
        </div>
        <Link href={'/'}>back to home page</Link>
    </Layout>
  )
}

export default NotFoundPage