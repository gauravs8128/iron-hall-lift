import { useEffect, useState } from "react";

export function SiteIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("iv-intro") === "seen") return;
    sessionStorage.setItem("iv-intro", "seen");
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="intro-word">
        <span>IRON</span>
        <span className="text-primary">VAULT</span>
      </div>
      <div className="intro-line" />
      <p>Strength / Discipline / Progress</p>
    </div>
  );
}
