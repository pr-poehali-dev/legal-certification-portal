import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [logoError, setLogoError] = useState(false);

  // Настройки логотипа - можно вынести в конфиг
  const logoConfig = {
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop&auto=format", // Замените на ваш логотип
    altText: "ЛегалСерт",
    fallbackText: "ЛегалСерт",
  };

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/services", label: "Услуги" },
    { path: "/certification", label: "Сертификация" },
    { path: "/cases", label: "Кейсы" },
    { path: "/about", label: "О нас" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {!logoError && logoConfig.imageUrl ? (
                <img
                  src={logoConfig.imageUrl}
                  alt={logoConfig.altText}
                  onError={() => setLogoError(true)}
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                  {logoConfig.fallbackText}
                </span>
              )}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-blue-500/10 to-blue-600/10 scale-100"
                        : "bg-gradient-to-r from-blue-500/5 to-blue-600/5 scale-0 group-hover:scale-100"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
