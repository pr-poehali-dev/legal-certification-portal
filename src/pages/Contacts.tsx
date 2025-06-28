import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Свяжитесь с нами для получения бесплатной консультации
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Наши контакты
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-blue-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Адрес офиса
                    </h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Тверская, д. 15, офис 400
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-blue-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Телефон
                    </h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Mail"
                    size={24}
                    className="text-blue-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@legalcert.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-blue-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Время работы
                    </h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб-Вс: выходные
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Обратная связь
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваш телефон"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите ваш проект или задачу"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Готовы начать работу?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Получите бесплатную консультацию по вашему проекту
            </p>
            <a
              href="tel:+74951234567"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
