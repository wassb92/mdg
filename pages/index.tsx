import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UpcomingEvents from "../components/UpcomingEvents";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log("API says:", data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <UpcomingEvents />
      <Contact />
    </>
  );
}
