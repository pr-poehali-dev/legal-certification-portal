import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Профессиональная сертификация
            <span className="block text-blue-400">товаров и услуг</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Мы предоставляем полный спектр юридических услуг по сертификации
            продукции, обеспечивая соответствие всем нормативным требованиям и
            стандартам качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Наши услуги
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
