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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Icon name={service.icon} size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Все услуги
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
