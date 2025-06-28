import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

// Добавляем CSS анимации
const animationStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
    opacity: 0;
  }
`;

const Hero = () => {
  // Инъекция стилей для анимаций
  if (
    typeof document !== "undefined" &&
    !document.getElementById("hero-animations")
  ) {
    const style = document.createElement("style");
    style.id = "hero-animations";
    style.textContent = animationStyles;
    document.head.appendChild(style);
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Профессиональная сертификация
            <span
              className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              товаров и услуг
            </span>
          </h1>
          <p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Мы предоставляем полный спектр юридических услуг по сертификации
            продукции, обеспечивая соответствие всем нормативным требованиям и
            стандартам качества.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <Icon
                name="FileText"
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              Наши услуги
            </Link>
            <Link
              to="/contacts"
              className="group inline-flex items-center px-8 py-3 border-2 border-white/70 text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              <Icon
                name="Phone"
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              Консультация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
