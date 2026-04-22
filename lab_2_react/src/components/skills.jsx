function Skills() {
  const SkillGroup = ({ title, items }) => (
    <div className="mb-8">
      <h3 className="text-slate-900 font-bold text-sm mb-4">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {items.map(item => (
          <span key={item} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-full shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-[0.2em] mb-8">Навички</h2>
      <SkillGroup title="ОС" items={["Linux (Ubuntu)", "Kali Linux", "Windows"]} />
      <SkillGroup title="Інструменти" items={["Wireshark", "PGP", "Git", "HTML", "Auditd"]} />
    </section>
  );
}
export default Skills;