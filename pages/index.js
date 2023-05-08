import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Layout.module.css';
import Header from "@/component/Header/Header";
const inter = Inter({ subsets: ["latin"] });
import Layout from "./layout/Layout";
import { NEXT_URL } from "@/config";
import EventItem from "../component/EventItem/EventItem";
import Link from "next/link";


export default function Home({events}) {



  return (
    <>
    <Layout title={'home events'}>
   
        <h1>home</h1>
        {events.map((evt)=>(
          <EventItem key={evt.id} evt={evt}/>
        ))}

        {
          events.length > 0 &&(
            <Link href={'/events'} className='btn-secondary '>
            view all events
            </Link>
          )
        }
    </Layout>

  
    </>
  );
}

export async function getStaticProps () {
  const res = await fetch(`${NEXT_URL}/api/events`)
  const result = await res.json()
  console.log(result)
  return {
    props:{events: result.slice(0,3) },
    revalidate:1,
  }
}