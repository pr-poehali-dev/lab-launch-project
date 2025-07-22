import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Icon from '@/components/ui/icon'
import { useState } from 'react'

export default function Index() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  
  const labStages = [
    {
      title: "Консультация и планирование",
      description: "Анализ потребностей, техническое задание, выбор локации",
      duration: "5-7 дней"
    },
    {
      title: "Проектирование и согласование",
      description: "Разработка проекта, получение разрешений, 3D-визуализация",
      duration: "10-15 дней"
    },
    {
      title: "Поставка оборудования",
      description: "Заказ и доставка оборудования из США, таможенное оформление",
      duration: "15-20 дней"
    },
    {
      title: "Строительство и монтаж",
      description: "Возведение помещений, установка систем вентиляции и коммуникаций",
      duration: "10-15 дней"
    },
    {
      title: "Оснащение и настройка",
      description: "Установка оборудования, калибровка, тестирование систем",
      duration: "3-5 дней"
    },
    {
      title: "Аккредитация и запуск",
      description: "Подача документов на аккредитацию, обучение персонала, запуск",
      duration: "5-10 дней"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Microscope" className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-slate-900">LabPro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                  Лаборатории{' '}
                  <span className="text-blue-600">под ключ</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Полный цикл создания современных лабораторий: от концепции до запуска. 
                  Проектирование, оснащение, сертификация за 45 дней.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  <Icon name="Rocket" className="mr-2 h-5 w-5" />
                  Начать проект
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="px-8">
                      <Icon name="Play" className="mr-2 h-5 w-5" />
                      Смотреть видео
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                          Этапы создания лаборатории под ключ
                        </h2>
                        <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                          <img 
                            src="/img/9db9b187-e671-4311-a6b8-439ab6b49b23.jpg"
                            alt="Этапы создания лаборатории"
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                              <Icon name="Play" className="mr-2 h-6 w-6" />
                              Смотреть обзор
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                          6 этапов — от идеи до аккредитованной лаборатории:
                        </h3>
                        {labStages.map((stage, index) => (
                          <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-slate-900">{stage.title}</h4>
                                <span className="text-sm text-blue-600 font-medium">{stage.duration}</span>
                              </div>
                              <p className="text-slate-600 text-sm">{stage.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Общий срок реализации</h4>
                        </div>
                        <p className="text-slate-700 mb-4">
                          В среднем полный цикл занимает <strong>45-60 дней</strong> с момента подписания договора 
                          до получения аккредитации и запуска лаборатории.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Icon name="Calendar" className="mr-2 h-4 w-4" />
                          Запланировать консультацию
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-slate-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">45</div>
                  <div className="text-sm text-slate-600">Дней в среднем</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-slate-600">Сертификация</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f4d104f8-e650-4e86-8318-fd1a645896a8.jpg" 
                alt="Современная лаборатория" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексные решения для создания лабораторий любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Building" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Проектирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Разработка архитектурных и инженерных решений с учетом всех требований и стандартов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Settings" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Оснащение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Поставка и установка современного лабораторного оборудования от ведущих производителей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Сертификация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Получение всех необходимых разрешений и сертификатов для работы лаборатории
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Монтаж систем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Установка вентиляции, водоснабжения, электроснабжения и других инженерных систем
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Users" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Подготовка сотрудников к работе с оборудованием и соблюдению стандартов качества
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Award" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Аккредитация лабораторий</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Полное сопровождение процесса аккредитации по ГОСТ ISO/IEC 17025 и получение статуса аккредитованной лаборатории
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="FileText" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Область аккредитации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Разработка и составление документации Области аккредитации с учетом специфики исследований и методов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="Plane" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Поставки из США</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Прямые поставки высокотехнологичного лабораторного оборудования от ведущих американских производителей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon name="LifeBuoy" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Сервисная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Техническое обслуживание, ремонт и модернизация оборудования после запуска
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Почему выбирают нас
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  15 лет опыта в создании лабораторий для медицинских учреждений, 
                  исследовательских центров и промышленных предприятий.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Комплексный подход</h3>
                    <p className="text-slate-600">Берем на себя все этапы — от идеи до запуска</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Современные технологии</h3>
                    <p className="text-slate-600">Используем инновационное оборудование и решения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Соблюдение стандартов</h3>
                    <p className="text-slate-600">Работаем по международным стандартам качества</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Гарантийное обслуживание</h3>
                    <p className="text-slate-600">Предоставляем 3 года гарантии на все работы</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                <div className="text-slate-600">Лет опыта</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-slate-600">Проектов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-slate-600">Специалистов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600">Поддержка</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Получить консультацию
            </h2>
            <p className="text-xl text-slate-600">
              Обсудим ваш проект и предложим оптимальное решение
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Описание проекта
                </label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте лаборатории..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Microscope" className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">LabPro</span>
              </div>
              <p className="text-slate-400">
                Профессиональное создание лабораторий под ключ
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Проектирование</li>
                <li>Оснащение</li>
                <li>Сертификация</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@labpro.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Тверская, 1
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <Icon name="Facebook" className="h-6 w-6 text-slate-400 hover:text-blue-400 cursor-pointer" />
                <Icon name="Instagram" className="h-6 w-6 text-slate-400 hover:text-blue-400 cursor-pointer" />
                <Icon name="Linkedin" className="h-6 w-6 text-slate-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LabPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}