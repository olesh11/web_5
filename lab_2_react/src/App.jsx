import { useState, useEffect } from 'react';
import Header from './components/header';
import About from './components/about';
import Experience from './components/exp'; // або experience.jsx
import Skills from './components/skills';
import Languages from './components/lang'; // або languages.jsx
import Footer from './components/footer';
import Reviews from './components/reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  return (
    // Динамічні Tailwind-класи на базі стану theme
    <div className={`min-h-screen py-12 px-4 sm:px-6 font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      
      {/* Модальне вікно (з'явиться через хвилину) */}
      <ContactForm />

      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"></div>
      
      <main className={`max-w-4xl mx-auto shadow-2xl rounded-3xl overflow-hidden border transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700 shadow-slate-900/50' : 'bg-white border-slate-100 shadow-slate-200/50'}`}>
        <div className="p-8 md:p-16 space-y-16">
          <Header theme={theme} toggleTheme={toggleTheme} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <About />
              <Experience />
              <Reviews /> {/* Новий блок відгуків */}
            </div>
            
            <div className={`space-y-12 p-6 rounded-2xl border transition-colors duration-300 ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50/50 border-slate-100'}`}>
              <Skills />
              <Languages />
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;