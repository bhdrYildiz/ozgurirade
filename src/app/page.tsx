import Hero from "@/app/components/Hero"
import AboutSection from "./components/AboutSection"
import VisionSection from "./components/VisionSection"
import NewsSection from "./components/NewsSection"
import BlogSection from "./components/BlogSection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VisionSection />
      <NewsSection />
      <BlogSection />
    </>
  )
}