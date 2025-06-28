import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Shield",
      title: "Обязательная сертификация",
      description:
        "Получение сертификатов соответствия для продукции, подлежащей обязательной сертификации",
      features: [
        "Пожарная безопасность",
        "Промышленная безопасность",
        "Экологическая безопасность",
        "Техническое регулирование",
      ],
    },
    {
      icon: "Award",
      title: "Добровольная сертификация",
      description:
        "Подтверждение высокого качества продукции и услуг для повышения конкурентоспособности",
      features: [
        "Системы качества",
        "Экологические стандарты",
        "Информационная безопасность",
        "Социальная ответственность",
      ],
    },
    {
      icon: "FileCheck",
      title: "Декларирование соответствия",
      description:
        "Оформление деклараций о соответствии продукции требованиям технических регламентов",
      features: [
        "ТР ТС",
        "ГОСТ Р",
        "Европейские стандарты",
        "Международные стандарты",
      ],
    },
    {
      icon: "Users",
      title: "Консультационные услуги",
      description:
        "Экспертная поддержка на всех этапах процедур подтверждения соответствия",
      features: [
        "Правовая экспертиза",
        "Технический аудит",
        "Подготовка документации",
        "Сопровождение процедур",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный спектр услуг в области сертификации и подтверждения
              соответствия
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
