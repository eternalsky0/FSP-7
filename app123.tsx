import React from 'react';
import { Code, Users, Trophy, Search, Menu, ChevronRight, GraduationCap, FlaskRound as Flask, Terminal, Shield, Notebook as Robot, Cpu, Calendar, Clock, Info, Mail, MapPin, Phone } from 'lucide-react';

// Link Component
const Link: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

// Header Component
const Header: React.FC = () => {
  return (
    <header className="bg-[#111827] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-[#1E67FE] font-bold text-2xl flex items-center">
            <Code className="mr-2" />
            ФСП
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#1E67FE] transition-colors">
              Главная
            </Link>
            <Link href="/competitions" className="hover:text-[#1E67FE] transition-colors flex items-center">
              <Trophy className="w-4 h-4 mr-1" />
              Соревнования
            </Link>
            <Link href="/teams" className="hover:text-[#1E67FE] transition-colors flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Команды
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Поиск"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E67FE] w-40 lg:w-64"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          
          <Link href="/login" className="text-white hover:text-gray-300 transition-colors">
            Войти
          </Link>
          
          <Link 
            href="/register" 
            className="bg-[#1E67FE] text-white px-4 py-2 rounded-lg hover:bg-[#0d4edf] transition-colors"
          >
            Регистрация
          </Link>
          
          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero: React.FC = () => {
  return (
    <section className="bg-[#111827] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Развивайтесь в <span className="text-[#1E67FE]">спортивном программировании</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Присоединяйтесь к сообществу программистов, участвуйте в соревнованиях,
              совершенствуйте навыки алгоритмического мышления и решения сложных задач.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/competitions" 
                className="bg-[#1E67FE] text-white px-6 py-3 rounded-lg hover:bg-[#0d4edf] transition-colors flex items-center justify-center"
              >
                Соревнования
              </Link>
              <Link
                href="/teams/create"
                className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
              >
                Создать команду <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#1E67FE]/20 rounded-full absolute -top-8 -left-8 animate-pulse-slow"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-500/10 rounded-full absolute -bottom-8 -right-8 animate-pulse-slow animation-delay-1000"></div>
              <img 
                src="https://images.pexels.com/photos/7192137/pexels-photo-7192137.jpeg" 
                alt="Программирование" 
                className="w-full max-w-md relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// UserTypes Component
const UserTypeCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-100 p-3 rounded-lg text-[#1E67FE]">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const UserTypes: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Кто участвует в ФСП?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UserTypeCard 
            icon={<GraduationCap className="w-6 h-6" />}
            title="Учащиеся"
            description="Студенты и школьники, желающие улучшить свои навыки программирования и алгоритмического мышления."
          />
          
          <UserTypeCard 
            icon={<Code className="w-6 h-6" />}
            title="Разработчики"
            description="Профессиональные программисты, которые хотят поддерживать свои навыки решения сложных задач."
          />
          
          <UserTypeCard 
            icon={<Flask className="w-6 h-6" />}
            title="Исследователи"
            description="Ученые и исследователи в области компьютерных наук, заинтересованные в сложных алгоритмических задачах."
          />
        </div>
      </div>
    </section>
  );
};

// DisciplineCard Component
const DisciplineCard: React.FC<{ icon: React.ReactNode; title: string; description: string; bgColor: string }> = ({ 
  icon, title, description, bgColor 
}) => {
  return (
    <div className={`rounded-xl p-8 ${bgColor} transition-transform hover:scale-[1.02]`}>
      <div className="text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Disciplines Component
const Disciplines: React.FC = () => {
  return (
    <section className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Дисциплины спортивного программирования
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Федерация спортивного программирования проводит соревнования по различным направлениям программирования, 
          каждое из которых развивает уникальные навыки.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DisciplineCard 
            icon={<Code className="w-10 h-10 text-blue-400" />}
            title="Продуктовое программирование (хакатон)"
            description="Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи."
            bgColor="bg-gradient-to-br from-blue-900 to-blue-800"
          />
          
          <DisciplineCard 
            icon={<Terminal className="w-10 h-10 text-indigo-400" />}
            title="Программирование алгоритмическое"
            description="Решение группы задач путем написания наиболее оптимальных программных алгоритмов в условиях ограниченного времени."
            bgColor="bg-gradient-to-br from-indigo-900 to-indigo-800"
          />
          
          <DisciplineCard 
            icon={<Shield className="w-10 h-10 text-purple-400" />}
            title="Программирование систем информационной безопасности"
            description="Комплекс соревнований в области кибербезопасности, включающий в себя поиск и устранение системных уязвимостей, отработку кибератак и защиты от них."
            bgColor="bg-gradient-to-br from-purple-900 to-purple-800"
          />
          
          <DisciplineCard 
            icon={<Robot className="w-10 h-10 text-green-400" />}
            title="Программирование робототехники"
            description="Написание кода и поведенческих алгоритмов для автономных роботов, соревнующихся по определенным правилам."
            bgColor="bg-gradient-to-br from-green-900 to-green-800"
          />
          
          <DisciplineCard 
            icon={<Cpu className="w-10 h-10 text-orange-400" />}
            title="Программирование БАС"
            description="Написание кода для автономного полета дрона или роя дронов, а также выполнения ими поставленных задач в условиях соревновательного полигона."
            bgColor="bg-gradient-to-br from-orange-900 to-orange-800"
          />
        </div>
      </div>
    </section>
  );
};

// CompetitionCard Component
interface CompetitionCardProps {
  title: string;
  registrationStart: string;
  registrationEnd: string;
  competitionStart: string;
  status: 'open' | 'registration' | 'upcoming' | 'closed';
  type: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ 
  title, 
  registrationStart, 
  registrationEnd,
  competitionStart,
  status,
  type
}) => {
  const getStatusBadge = () => {
    switch(status) {
      case 'open':
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Открыто</span>;
      case 'registration':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Регистрация открыта</span>;
      case 'upcoming':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Скоро</span>;
      case 'closed':
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Завершено</span>;
      default:
        return null;
    }
  };

  const getTypeBadge = () => {
    if (type === 'Продуктовое программирование') {
      return <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Продуктовое</span>;
    } else if (type === 'Алгоритмическое программирование') {
      return <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Алгоритмическое</span>;
    }
    return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{type}</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="flex space-x-2">
          {getStatusBadge()}
          {getTypeBadge()}
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          <span>Начало регистрации: {registrationStart}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          <span>Конец регистрации: {registrationEnd}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span>Начало соревнования: {competitionStart}</span>
        </div>
      </div>
      
      <div className="flex space-x-3 pt-3 border-t border-gray-100">
        {status === 'open' || status === 'registration' ? (
          <>
            <button className="px-4 py-2 bg-[#1E67FE] text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Зарегистрироваться
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center">
              <Info className="w-4 h-4 mr-1" />
              Подробнее
            </button>
          </>
        ) : (
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center">
            <Info className="w-4 h-4 mr-1" />
            Подробнее
          </button>
        )}
      </div>
    </div>
  );
};

// Competitions Component
const Competitions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Ближайшие соревнования</h2>
          <a href="/competitions" className="text-[#1E67FE] hover:underline">Все соревнования →</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CompetitionCard 
            title="Весенний алгоритмический турнир"
            registrationStart="15.04.2025"
            registrationEnd="28.04.2025"
            competitionStart="30.04.2025"
            status="registration"
            type="Алгоритмическое программирование"
          />
          
          <CompetitionCard 
            title="Хакатон: Цифровые решения"
            registrationStart="10.04.2025"
            registrationEnd="20.04.2025"
            competitionStart="22.04.2025"
            status="open"
            type="Продуктовое программирование"
          />
          
          <CompetitionCard 
            title="Чемпионат по кибербезопасности"
            registrationStart="01.05.2025"
            registrationEnd="15.05.2025"
            competitionStart="18.05.2025"
            status="upcoming"
            type="Информационная безопасность"
          />
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-white font-bold text-xl flex items-center mb-4">
              <Code className="mr-2 text-[#1E67FE]" />
              ФСП
            </Link>
            <p className="mb-4">
              Федерация спортивного программирования объединяет талантливых программистов и проводит соревнования по различным дисциплинам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1E67FE]" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1E67FE]" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1E67FE]" aria-label="Telegram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Меню</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#1E67FE] transition-colors">Главная</Link></li>
              <li><Link href="/competitions" className="hover:text-[#1E67FE] transition-colors">Соревнования</Link></li>
              <li><Link href="/teams" className="hover:text-[#1E67FE] transition-colors">Команды</Link></li>
              <li><Link href="/about" className="hover:text-[#1E67FE] transition-colors">О федерации</Link></li>
              <li><Link href="/news" className="hover:text-[#1E67FE] transition-colors">Новости</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Дисциплины</h3>
            <ul className="space-y-2">
              <li><Link href="/disciplines/algorithmic" className="hover:text-[#1E67FE] transition-colors">Алгоритмическое программирование</Link></li>
              <li><Link href="/disciplines/product" className="hover:text-[#1E67FE] transition-colors">Продуктовое программирование</Link></li>
              <li><Link href="/disciplines/security" className="hover:text-[#1E67FE] transition-colors">Информационная безопасность</Link></li>
              <li><Link href="/disciplines/robotics" className="hover:text-[#1E67FE] transition-colors">Робототехника</Link></li>
              <li><Link href="/disciplines/drones" className="hover:text-[#1E67FE] transition-colors">Программирование БАС</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#1E67FE] mt-0.5" />
                <span>г. Москва, ул. Программистов, д. 42</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#1E67FE]" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#1E67FE]" />
                <span>info@sportprogramming.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2025 Федерация спортивного программирования. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <UserTypes />
        <Disciplines />
        <Competitions />
      </main>
      <Footer />
    </div>
  );
}

export default App;