import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60000 мс

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Зв'язок зі мною</h2>
        
        <form action="https://formspree.io/f/ТВІЙ_ЕНДПОЙНТ_ТУТ" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Телефон</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Повідомлення</label>
            <textarea name="message" rows="3" required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;