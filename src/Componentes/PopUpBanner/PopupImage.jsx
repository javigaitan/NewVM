import { useEffect, useState } from "react";
import travelsale from "./travelsale.png";

export default function PopupImage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99999] p-2">
      <div className="relative w-full max-w-[650px]"> 
        

        <button
          onClick={() => setShow(false)}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
        >
          ✕
        </button>

        <a href="https://blog.vaga-mundo.com/travel-sale" target="_blank" rel="noopener noreferrer">
          <img
            src={travelsale}
            alt="Popup"
            className="w-full h-auto rounded-xl object-contain shadow-2xl cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
