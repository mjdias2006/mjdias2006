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
        {/* Navegação fixa */}
        <Header />

        {/* Seção de entrada com foto e animação */}
        <Hero />

        {/* Slider infinito de conquistas e marcos (Prova Social) */}
        <Achievements />

        {/* Conteúdo principal com espaçamento consistente */}
        <div className="max-w-6xl mx-auto px-6 space-y-32 py-20">

        {/* Seção Sobre Mim */}
        <About />

        {/* Bloco de Skills: Grid de Ícones + Gráfico de Radar de Dados */}
        <div className="space-y-16">
        <Skills />
        <SkillsChart />
        </div>

        {/* Timeline de Experiência Profissional */}
        <Experience />

        {/* Cards de Formação Acadêmica */}
        <Education />

        {/* Vitrine de Projetos */}
        <Projects />

        {/* Rodapé e Links de Contato */}
        <Contact />

        </div>
        </main>
    );
}
