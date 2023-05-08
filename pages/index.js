import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Layout.module.css';
import Header from "@/component/Header/Header";
const inter = Inter({ subsets: ["latin"] });
import Layout from "./layout/Layout";
import { NEXT_URL } from "@/config";
import EventItem from "../component/EventItem/EventItem";

export default function Home({result}) {
 console.log(result)


  return (
    <>
    <Layout title={'home events'}>
   
        <h1>home</h1>
        {result.map((evt)=>(
          <EventItem key={evt.id} evt={evt}/>
        ))}
    </Layout>

  
    </>
  );
}

export async function getStaticProps () {
  const res = await fetch(`${NEXT_URL}/api/events`)
  const result = await res.json()
  console.log(result)
  return {
    props:{result},
    revalidate: 1,
  }
}