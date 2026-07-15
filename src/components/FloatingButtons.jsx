import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE = "+919871234612";

const FloatingButtons = () => {
  return (
    <>
      {/* Call */}

      <a
        href={`tel:+${PHONE}`}
        className="fixed bottom-24 right-5 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-2xl z-50"
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp */}

      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-2xl z-50 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default FloatingButtons;
