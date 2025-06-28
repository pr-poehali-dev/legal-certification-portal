import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Александр Петров",
      position: "Управляющий партнер",
      experience: "20 лет опыта в сертификации",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Елена Смирнова",
      position: "Ведущий эксперт",
      experience: "15 лет в области техрегулирования",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Михаил Иванов",
      position: "Технический директор",
      experience: "18 лет в промышленной безопасности",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">О компании</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Профессиональная экспертиза в области сертификации с 2008 года
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Лидер в области сертификации
              </h2>
              <p className="text-gray-600 mb-6">
                ЛегалСерт — ведущая консалтинговая компания, специализирующаяся
                на оказании услуг в области подтверждения соответствия
                продукции, работ и услуг требованиям технических регламентов,
                национальных и международных стандартов.
              </p>
              <p className="text-gray-600 mb-6">
                За годы работы мы накопили уникальный опыт в области
                сертификации различных видов продукции и услуг, что позволяет
                нам оказывать качественные услуги и находить оптимальные решения
                для наших клиентов.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Лет на рынке</div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
                alt="Офис компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600">
              Профессионалы с многолетним опытом в области сертификации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Наши преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon
                name="Clock"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-gray-600">
                Минимальные сроки получения документов
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Shield"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                100% гарантия получения сертификата
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Users"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Экспертная команда</h3>
              <p className="text-gray-600">
                Команда сертифицированных экспертов
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="HeartHandshake"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600">
                Персональное решение для каждого клиента
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
