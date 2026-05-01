import Header from "../components/Header";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import About from "../components/About";
import Skills from "../components/Skills";
import SkillsChart from "../components/SkillsChart";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <main className="relative overflow-hidden bg-slate-950">

        <Header />


        <Hero />


        <Achievements />

        <div className="max-w-6xl mx-auto px-6 space-y-32 py-20">

        <About />

        <div className="space-y-16">
        <Skills />
        <SkillsChart />
        </div>

        <Experience />

        <Education />

        <Projects />

        <Contact />

        </div>
        </main>
    );
}
