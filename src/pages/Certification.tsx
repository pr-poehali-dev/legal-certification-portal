import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Certification = () => {
  const steps = [
    {
      number: "01",
      title: "Консультация и анализ",
      description:
        "Определяем необходимые виды сертификации для вашей продукции",
    },
    {
      number: "02",
      title: "Подготовка документов",
      description: "Готовим полный пакет документов и технических условий",
    },
    {
      number: "03",
      title: "Испытания и экспертиза",
      description:
        "Проводим необходимые испытания в аккредитованных лабораториях",
    },
    {
      number: "04",
      title: "Получение сертификата",
      description: "Оформляем и получаем сертификат соответствия",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Процесс сертификации</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Пошаговый процесс получения сертификатов соответствия
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Виды сертификации
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Icon name="Shield" size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Обязательная сертификация
              </h3>
              <p className="text-gray-600">
                Подтверждение соответствия продукции обязательным требованиям
                безопасности
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Icon name="Award" size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Добровольная сертификация
              </h3>
              <p className="text-gray-600">
                Подтверждение дополнительных характеристик качества продукции
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Icon name="FileCheck" size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Декларирование</h3>
              <p className="text-gray-600">
                Заявление изготовителя о соответствии продукции требованиям
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
