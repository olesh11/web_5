export default function Experience() {
  return (
    <section className="px-8 lg:px-12 py-10 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-slate-50 blur-3xl opacity-60"></div>

      <div className="relative z-10">
        <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-8">
          Досвід та практика
        </h2>

        <div className="flex flex-col gap-10">
          
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">QA Роль</p>
            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-2">
              QA-engineer
            </h3>
            <p className="text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
              Забезпечення якості ПЗ: розробка тестової документації, написання та виконання тест-кейсів.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Кібербезпека</p>
            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-2">
              Аналіз мереж та ПЗ
            </h3>
            <p className="text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
              Робота з Wireshark, аналіз шкідливого ПЗ та налаштування Auditd для детектування підозрілої активності.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}