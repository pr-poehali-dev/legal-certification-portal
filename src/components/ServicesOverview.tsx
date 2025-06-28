import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesOverview = () => {
  const services = [
    {
      icon: "Shield",
      title: "Сертификация продукции",
      description:
        "Полный цикл работ по получению обязательных и добровольных сертификатов соответствия",
    },
    {
      icon: "FileCheck",
      title: "Декларирование соответствия",
      description:
        "Оформление деклараций о соответствии требованиям технических регламентов",
    },
    {
      icon: "Award",
      title: "Системы менеджмента",
      description:
        "Сертификация систем менеджмента качества ISO 9001, ISO 14001, ISO 45001",
    },
    {
      icon: "Users",
      title: "Экспертиза и аудит",
      description:
        "Независимая экспертиза продукции и аудит систем качества предприятий",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Основные направления деятельности
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Предоставляем комплексные решения в области сертификации и
            подтверждения соответствия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon
                  name={service.icon}
                  size={24}
                  className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            Все услуги
            <Icon
              name="ArrowRight"
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
