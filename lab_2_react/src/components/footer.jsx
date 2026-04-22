import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };
    localStorage.setItem('reactSysInfo', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="mt-16 pb-8 text-left border-t border-slate-200 pt-6">
      <p className="text-xs text-slate-400 tracking-widest uppercase mb-4">
        © 2026 CV - Олеш Роман
      </p>
      <div className="text-xs text-slate-500 space-y-1">
        <p><span className="font-bold">Платформа:</span> {sysInfo.platform}</p>
        <p className="break-words"><span className="font-bold">Браузер:</span> {sysInfo.userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;