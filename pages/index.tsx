import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UpcomingEvents from "../components/UpcomingEvents";

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log("API says:", data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="space-y-8">
      <Hero />
      <Features />
      <UpcomingEvents />
    </div>
  );
}
