import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Cases = () => {
  const cases = [
    {
      title: "Сертификация медицинского оборудования",
      client: 'ООО "МедТехника"',
      description:
        "Получение сертификатов соответствия для линейки медицинского диагностического оборудования",
      results: [
        "Сертификация 15 видов оборудования",
        "Срок: 45 дней",
        "Экономия: 30% от рыночной цены",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
    {
      title: "Система менеджмента качества ISO 9001",
      client: 'АО "ПромМаш"',
      description:
        "Внедрение и сертификация системы менеджмента качества производственного предприятия",
      results: [
        "Успешная сертификация ISO 9001",
        "Повышение эффективности на 25%",
        "Сокращение брака в 3 раза",
      ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    },
    {
      title: "Декларирование соответствия ТР ТС",
      client: 'ООО "ЭлектроКомплект"',
      description:
        "Оформление деклараций соответствия для электротехнической продукции",
      results: [
        "Декларировано 50+ позиций",
        "Ускорен вывод на рынок",
        "Снижены издержки на 40%",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Успешные кейсы</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Примеры успешных проектов по сертификации и подтверждению
              соответствия
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {caseItem.client}
                    </p>
                    <p className="text-gray-600 mb-6">{caseItem.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Результаты:
                      </h4>
                      {caseItem.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <Icon
                            name="CheckCircle"
                            size={16}
                            className="text-green-600 mr-2"
                          />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cases;
