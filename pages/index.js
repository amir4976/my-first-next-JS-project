import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Layout.module.css';
import Header from "@/component/Header/Header";
const inter = Inter({ subsets: ["latin"] });
import Layout from "./layout/Layout";

export default function Home() {
  return (
    <>
    <Layout title={'home events'}>
   
        <h1>home</h1>

    </Layout>

  
    </>
  );
}
