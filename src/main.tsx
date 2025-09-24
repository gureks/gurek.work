import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import { AiProjectsSection } from './components/AiProjectsSection';
import { Hero } from './components/Hero';
import { NudgeAlert } from './components/NudgeAlert';
import { Layout } from './components/Layout';
import { BentoDesignProjects } from './components/BentoDesignProjects';
import { Footer } from './components/Footer';
import { PlaySection } from './components/PlaySection';
import { ReadsSection } from './components/ReadsSection';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Layout>
        <NudgeAlert />
        <Hero />
        <AiProjectsSection />
        <BentoDesignProjects />
        {/* <PlaySection /> */}
        <ReadsSection />
        <Footer />
        <ThemeToggle />
    </Layout>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
