import React from "react";
import Layout from "../layout/Layout";
import Header from "@/component/Header/Header";
import "../../styles/Home.module.css";
import { NEXT_URL } from "@/config";
import EventItem from "@/component/EventItem/EventItem";


function AboutPage({ events }) {
  console.log(events);
  return (
    <Layout title={"DJ events"}>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const result = await res.json();

  return {
    props: { events: result },
    revalidate: 1,
  };
}

export default AboutPage;
