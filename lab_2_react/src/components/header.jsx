function Header({ theme, toggleTheme }) {
  return (
    <header className="relative">
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-full transition-colors"
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-6xl font-black tracking-tight leading-none">
            Олеш <span className="text-indigo-600">Роман</span>
          </h1>
          <p className="text-xl font-medium text-slate-500 mt-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            Manual QA Engineer / Cybersecurity
          </p>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <a href="mailto:roman.olesh.kb.2023@lpnu.ua" className="text-slate-500 hover:text-indigo-600 transition-colors font-medium">
            roman.olesh.kb.2023@lpnu.ua
          </a>
          <span className="text-slate-400 text-sm">Львів, Україна</span>
        </div>
      </div>
    </header>
  );
}
export default Header;