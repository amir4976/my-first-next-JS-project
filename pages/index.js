import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Layout.module.css';
import Header from "@/component/Header/Header";
const inter = Inter({ subsets: ["latin"] });
import Layout from "./layout/Layout";

export default function Home({result}) {
 console.log(result)


  return (
    <>
    <Layout title={'home events'}>
   
        <h1>home</h1>

    </Layout>

  
    </>
  );
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:3000/api/hello')
  const result = await res.json()
  console.log(result)
  return {
    props:{result}
  }
}