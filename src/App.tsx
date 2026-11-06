import { useState, useEffect } from 'react';

const analysisServices = [
  {
    name: 'SpyIG',
    description: 'Анонимный просмотр Instagram* и ВКонтакте. Без следа, без подписки.',
    url: 'https://spyig.com',
    icon: '🕵️',
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    name: 'Instashpion',
    description: 'Смотри и скачивай чужие сторис в Instagram* — никто не узнает.',
    url: 'https://instashpion.com',
    icon: '👁️',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    name: 'ВК Шпион',
    description: 'Лайки, комментарии, друзья и сторис любого пользователя ВК.',
    url: 'https://vkspy.com',
    icon: '🔍',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'InstaParser',
    description: 'Сбор целевой аудитории для продвижения в Instagram*.',
    url: 'https://instaparser.com',
    icon: '📊',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    name: 'Getwinner',
    description: 'Рандомайзер для честных розыгрышей в VK и Instagram*. ',
    url: 'https://getwinner.com',
    icon: '🎲',
    gradient: 'from-amber-500 to-orange-600',
  },
];

const bots = [
  { name: '@Smm_bloger_bot', url: 'https://t.me/Smm_bloger_bot', description: 'SMM-ассистент' },
  { name: '@V_TOP_soc_bot', url: 'https://t.me/V_TOP_soc_bot', description: 'Продвижение ВК' },
  { name: '@SMM_Bloger_TOP_bot', url: 'https://t.me/SMM_Bloger_TOP_bot', description: 'Накрутка для блогеров' },
  { name: '@Marketings_SMM_bot', url: 'https://t.me/Marketings_SMM_bot', description: 'Маркетинг' },
  { name: '@Alex_SMMkruti_bot', url: 'https://t.me/Alex_SMMkruti_bot', description: 'Быстрый рост' },
];

function ServiceCard({ service }: { service: typeof analysisServices[0] }) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl p-3 sm:p-4 md:p-6"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
      
      <div className="relative z-10">
        <div className="mb-1.5 sm:mb-2 md:mb-4 flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl md:text-3xl">{service.icon}</span>
          <h3 className="text-sm sm:text-base md:text-xl font-bold text-white">{service.name}</h3>
        </div>
        <p className="text-[11px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed text-gray-300">{service.description}</p>
        <div className="mt-1.5 sm:mt-2 md:mt-4 flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-medium text-white/70 transition-colors group-hover:text-white">
          <span>Перейти</span>
          <svg
            className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function BotCard({ bot }: { bot: typeof bots[0] }) {
  return (
    <a
      href={bot.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 sm:gap-4 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 sm:px-5 sm:py-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <div className="flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
        <svg className="h-3.5 w-3.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.56-.55 3.08-1.14 4.52-.44 1.06-.97 2.07-1.66 2.97-.72.94-1.53 1.46-2.44 1.46-.5 0-.95-.19-1.35-.55-.4-.36-.63-.85-.7-1.47l-.01-.02c-.11-.72-.25-1.43-.42-2.14-.15-.63-.35-1.25-.58-1.86-.25-.66-.55-1.3-.89-1.92-.35-.63-.74-1.23-1.17-1.8-.44-.58-.92-1.12-1.44-1.62l-.04-.04c-.04-.03-.07-.06-.1-.09-.03-.03-.06-.05-.09-.08-.02-.02-.04-.03-.06-.05-.02-.01-.03-.02-.05-.03l-.03-.02c-.02-.01-.03-.02-.05-.03-.02-.01-.04-.01-.06-.02-.02-.01-.04-.01-.06-.02-.02 0-.04-.01-.06-.01h-.12c-.04.01-.08.02-.12.03-.04.01-.08.03-.12.05-.04.02-.08.04-.12.07-.04.03-.07.06-.1.09-.03.03-.06.07-.08.11-.02.04-.04.08-.05.12-.01.04-.02.08-.02.12 0 .04 0 .08.01.12.01.04.02.08.04.12.02.04.04.07.07.1.03.03.06.06.1.08.04.02.08.04.12.05.04.01.08.02.12.02h.01c.39.08.76.22 1.1.43.35.21.66.47.93.77.28.31.51.66.69 1.04.19.39.32.8.38 1.23.07.44.07.89 0 1.33-.06.44-.19.86-.38 1.25-.19.39-.44.75-.74 1.06-.31.32-.67.58-1.06.78-.4.2-.83.33-1.27.39-.45.06-.9.05-1.34-.03-.44-.08-.86-.22-1.25-.43-.39-.21-.74-.48-1.04-.8-.3-.32-.55-.68-.73-1.08-.18-.4-.3-.83-.35-1.27-.05-.44-.03-.89.05-1.33.08-.44.22-.86.43-1.25.21-.39.48-.74.8-1.04.32-.3.68-.55 1.08-.73.4-.18.83-.3 1.27-.35.44-.05.89-.03 1.33.05.44.08.86.22 1.25.43z" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-xs sm:text-sm font-semibold text-white transition-colors group-hover:text-cyan-300 truncate">{bot.name}</p>
        <p className="text-[10px] sm:text-xs text-gray-400 truncate">{bot.description}</p>
      </div>
      <svg
        className="ml-auto h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:text-cyan-400 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[128px]" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-cyan-600/15 blur-[128px]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-pink-600/10 blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-6 py-4 sm:py-8">
          <div className="mx-auto max-w-6xl">
            <div className={`flex items-center gap-2 sm:gap-3 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-white/90">topnakrutok.ru</span>
            </div>
          </div>
        </header>

        {/* Hero — compact on mobile */}
        <section className="px-4 sm:px-6 py-6 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className={`text-xl sm:text-4xl font-extrabold leading-tight tracking-tight transition-all duration-700 delay-100 md:text-6xl lg:text-7xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Все инструменты для{' '}
              </span>
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                SMM
              </span>
            </h1>
            <p className={`mx-auto mt-2 sm:mt-6 max-w-2xl text-xs sm:text-lg text-gray-400 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Анонимный просмотр, аналитика и боты для продвижения — всё в одном месте.
            </p>
          </div>
        </section>

        {/* Analysis Services */}
        <section className="px-4 sm:px-6 pb-8 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 sm:mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="shrink-0 text-[11px] sm:text-sm font-semibold uppercase tracking-widest text-white/50">
                📡 Анализ и анонимный просмотр
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="grid gap-2.5 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
              {analysisServices.map((service, i) => (
                <div
                  key={service.name}
                  className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bots Section */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 sm:mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="shrink-0 text-[11px] sm:text-sm font-semibold uppercase tracking-widest text-white/50">
                🤖 Боты для продвижения
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {bots.map((bot, i) => (
                <div
                  key={bot.name}
                  className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${800 + i * 100}ms` }}
                >
                  <BotCard bot={bot} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 px-4 sm:px-6 py-6 sm:py-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[10px] sm:text-sm text-gray-500">
              * Instagram — продукт компании Meta, деятельность которой признана экстремистской и запрещена на территории РФ.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
