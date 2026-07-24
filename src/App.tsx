import logoUrl from '../logo.png';

type EventCard = {
  title: string;
  date: string;
  location: string;
  category: string;
};

type DisciplineCard = {
  title: string;
  tone: string;
};

const upcomingEvents: EventCard[] = [
  { title: 'Event in Mumbai', date: '11/11/25', location: 'BKC', category: 'Lorem' },
  { title: 'Event in Delhi', date: '11/11/25', location: 'BKC', category: 'Lorem' },
];

const disciplineCards: DisciplineCard[] = [
  { title: 'Robo Race', tone: 'from-amber-500/80 to-orange-900/20' },
  { title: 'Line Follower', tone: 'from-slate-100/90 to-slate-400/30' },
  { title: 'RC Racing', tone: 'from-zinc-100/70 to-zinc-700/10' },
  { title: 'FPV Drone Racing & Aeromodelling', tone: 'from-sky-500/70 to-indigo-900/20' },
  { title: 'Robo Hockey', tone: 'from-cyan-400/80 to-blue-950/20' },
  { title: 'Robo War', tone: 'from-orange-400/80 to-red-950/20' },
];

const categories = [
  {
    title: 'MINI MAKERS',
    copy: 'Where Creativity Meets Logic.',
    icon: 'M',
  },
  {
    title: 'JUNIOR INNOVATORS',
    copy: 'Engineering & Strategy Fundamentals.',
    icon: '☼',
  },
  {
    title: 'YOUNG ENGINEERS',
    copy: 'Advanced Wireless & Autonomous Control.',
    icon: '⚙',
  },
  {
    title: 'ROBO MINDS',
    copy: 'Elite Professional Sports & Robotics.',
    icon: '⟟',
  },
];

function SectionTitle({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.24em] text-brand-400">{eyebrow}</p> : null}
      <h2 className="font-display text-[30px] uppercase tracking-[0.16em] text-white sm:text-[36px]">{title}</h2>
      {copy ? <p className="max-w-2xl text-sm leading-6 text-zinc-400">{copy}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-zinc-100">
      <main className="mx-2 overflow-hidden bg-[#18181c] shadow-[0_0_0_1px_rgba(0,0,0,0.3)] sm:mx-3 lg:mx-4">
        <section className="relative min-h-screen overflow-hidden bg-[#050507] px-0 pb-12 pt-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:18px_18px] opacity-35" />
          <img
            src={logoUrl}
            alt="BotLeague arena background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_28%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,rgba(0,0,0,0.0)_34%,rgba(0,0,0,0.34)_78%,rgba(0,0,0,0.6)_100%)]" />

          <header className="relative border-b border-t border-white/10 bg-black/45 px-0 py-3 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 px-4 sm:px-5">
              <div className="flex items-center gap-4">
                <div className="font-display text-[20px] uppercase tracking-[0.32em] text-white">
                  Bot<span className="text-brand-400">League</span>
                </div>
                <div className="hidden rounded-full border border-brand-400/30 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-brand-300 md:block">
                  India robotics arena
                </div>
              </div>

              <nav className="hidden items-center gap-8 text-[15px] text-zinc-300 md:flex">
                <a className="border-b-2 border-brand-400 pb-1 text-white" href="#events">
                  Events
                </a>
                <a className="transition hover:text-white" href="#programs">
                  Programs
                </a>
                <a className="transition hover:text-white" href="#community">
                  Community
                </a>
                <a className="transition hover:text-white" href="#ranks">
                  Ranks
                </a>
              </nav>

              <div className="flex items-center gap-3 text-sm">
                <button className="rounded-[6px] border border-white/18 px-5 py-2.5 uppercase tracking-[0.15em] text-white transition hover:bg-white/5">
                  Login
                </button>
                <button className="rounded-[6px] bg-brand-500 px-5 py-2.5 uppercase tracking-[0.15em] text-white transition hover:bg-brand-400">
                  Register Now
                </button>
              </div>
            </div>
          </header>

          <div className="relative flex min-h-[calc(100vh-76px)] items-center py-8">
            <div className="max-w-[620px] space-y-7 px-4 sm:px-5 lg:px-10 xl:px-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_15px_rgba(255,77,77,0.9)]" />
                Live : Episode 14. Bengaluru Regionals
                <span className="text-brand-400">Watch Live</span>
              </div>

              <div className="space-y-5 pt-2">
                <h1 className="font-display text-[42px] uppercase leading-[0.96] tracking-[0.15em] text-white sm:text-[58px]">
                  India&apos;s Ultimate
                  <br />
                  Robotics Arena
                </h1>
                <p className="max-w-[470px] text-[18px] leading-7 text-zinc-300">
                  Build.Compete.Rank.The National Ecosystem for Robotics Arena
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <button className="rounded-[4px] bg-brand-500 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-brand-400">
                  Create Account
                </button>
                <button className="rounded-[4px] border border-white/25 bg-black/15 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/5">
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="border-t border-white/5 bg-[#1a1a1d] px-0 py-12">
          <div className="space-y-8 px-2 sm:px-4 lg:px-6">
            <SectionTitle title="Competitions & Events" />

            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-[4px] border border-white/10 bg-[#202023] p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[20px] uppercase tracking-[0.15em] text-white">Live Now</h3>
                  <span className="rounded bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
                    Ongoing
                  </span>
                </div>

                <div className="rounded-[4px] border border-white/10 bg-[#18181b] p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-[16px] font-semibold text-white">Bengaluru Regionals</p>
                      <p className="text-[17px] text-zinc-500">Lorem Ipsum</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/10 pt-6">
                    <svg
                      viewBox="0 0 280 180"
                      className="mx-auto block h-[186px] w-full max-w-[280px]"
                      aria-label="Performance trend chart"
                      role="img"
                    >
                      <defs>
                        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff5858" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#ff5858" stopOpacity="0.02" />
                        </linearGradient>
                        <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6b7280" />
                          <stop offset="100%" stopColor="#4b5563" />
                        </linearGradient>
                      </defs>

                      <g stroke="#2c2c31" strokeWidth="1">
                        <line x1="20" y1="26" x2="260" y2="26" />
                        <line x1="20" y1="62" x2="260" y2="62" />
                        <line x1="20" y1="98" x2="260" y2="98" />
                        <line x1="20" y1="134" x2="260" y2="134" />
                      </g>

                      <path
                        d="M32 126 C58 122, 74 118, 92 102 C110 86, 126 82, 144 70 C160 58, 178 54, 196 42 C214 34, 232 30, 248 24"
                        fill="none"
                        stroke="#ff5858"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 126 C58 122, 74 118, 92 102 C110 86, 126 82, 144 70 C160 58, 178 54, 196 42 C214 34, 232 30, 248 24 L248 156 L32 156 Z"
                        fill="url(#trendFill)"
                      />

                      <g fill="url(#barGlow)">
                        <rect x="30" y="110" width="18" height="46" rx="4" />
                        <rect x="64" y="86" width="18" height="70" rx="4" />
                        <rect x="98" y="96" width="18" height="60" rx="4" />
                        <rect x="132" y="72" width="18" height="84" rx="4" />
                        <rect x="166" y="58" width="18" height="98" rx="4" />
                        <rect x="200" y="44" width="18" height="112" rx="4" />
                        <rect x="234" y="30" width="18" height="126" rx="4" />
                      </g>

                      <g fill="#8a8a8a">
                        <circle cx="32" cy="126" r="4" />
                        <circle cx="92" cy="102" r="4" />
                        <circle cx="144" cy="70" r="4" />
                        <circle cx="196" cy="42" r="4" />
                        <circle cx="248" cy="24" r="4" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-[4px] border border-white/10 bg-[#202023] p-5 sm:p-6">
                <h3 className="mb-4 font-display text-[20px] uppercase tracking-[0.15em] text-white">Upcoming</h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.title} className="rounded-[4px] border border-white/10 bg-[#18181b] p-5">
                      <p className="text-[16px] font-semibold text-white">{event.title}</p>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.12em] text-zinc-300">
                        <div>
                          <div className="text-zinc-500">Date</div>
                          <div className="mt-1 text-white">{event.date}</div>
                        </div>
                        <div>
                          <div className="text-zinc-500">Location</div>
                          <div className="mt-1 text-white">{event.location}</div>
                        </div>
                        <div>
                          <div className="text-zinc-500">Category</div>
                          <div className="mt-1 text-white">{event.category}</div>
                        </div>
                      </div>
                      <button className="mt-4 w-full rounded-[4px] bg-brand-500 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                        Register
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[4px] border border-white/10 bg-[#202023] p-5 sm:p-6">
                <h3 className="mb-4 font-display text-[20px] uppercase tracking-[0.15em] text-white">Past Results</h3>
                <div className="space-y-3">
                  {['Bengaluru Regionals', 'Bengaluru Regionals', 'Bengaluru Regionals'].map((title) => (
                    <div key={title} className="border-b border-white/10 pb-3 last:border-b-0">
                      <p className="text-[16px] font-semibold text-white">{title}</p>
                      <p className="text-sm text-zinc-500">Lorem Ipsum</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#060606] px-0 py-12">
          <div className="rounded-[4px] bg-black px-6 py-10 sm:px-8">
            <div className="text-center">
              <p className="mb-2 text-[13px] uppercase tracking-[0.22em] text-brand-400">User Journey</p>
              <h2 className="font-display text-[28px] uppercase tracking-[0.15em] text-white sm:text-[34px]">Your Path to the League</h2>
              <p className="mt-2 text-sm text-zinc-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {[
                { step: 'Step 1', title: 'Build Your Team', icon: '🛠' },
                { step: 'Step 2', title: 'Compete Across India', icon: '🏰' },
                { step: 'Step 3', title: 'Earn National Ranking & Value', icon: '⟟' },
                { step: 'Step 4', title: 'Join the League', icon: '👥' },
              ].map((item, index) => (
                <div key={item.title} className="relative text-center text-white">
                  {index < 3 ? <div className="absolute left-1/2 top-[54px] hidden h-[2px] w-full bg-brand-500 lg:block" /> : null}
                  <div className="relative mx-auto grid h-[88px] w-[88px] place-items-center rounded-full border-[6px] border-[#2d2d2d] bg-[#0a0a0a] text-[32px] text-white shadow-[0_0_0_3px_rgba(44,28,255,0.8)]">
                    {item.icon}
                  </div>
                  <div className="mx-auto mt-5 h-8 w-px bg-zinc-500/70" />
                  <p className="text-[12px] uppercase tracking-[0.18em] text-brand-400">{item.step}</p>
                  <p className="mt-1 px-2 text-[16px] uppercase leading-5 tracking-[0.08em] text-white">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#19191d] px-0 py-12">
          <div className="grid gap-10 px-2 sm:px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-6">
            <div>
              <h2 className="font-display text-[30px] uppercase tracking-[0.15em] text-white sm:text-[34px]">What is BotLeague?</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  ['1.', 'Structured Events', 'From one-off events to a year-round competitive season.'],
                  ['2.', 'Digital Identity', 'Your professional robotics legacy, tracked and verified.'],
                  ['3.', 'National Ranking', 'Benchmark your skills against the best engineers in India.'],
                  ['4.', 'Career Pathway', 'Turning arena victories into real-world industry opportunities.'],
                ].map(([num, title, copy]) => (
                  <div key={title}>
                    <p className="text-[20px] font-semibold text-brand-400">{num}</p>
                    <p className="text-[20px] uppercase tracking-[0.08em] text-white">{title}</p>
                    <p className="mt-2 max-w-[260px] text-sm leading-5 text-zinc-500">&quot;{copy}&quot;</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid h-[260px] w-[260px] place-items-center rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_30%),linear-gradient(180deg,#1c1c20,#151518)]">
                <div className="grid h-[110px] w-[110px] place-items-center rounded-full border border-white/20 bg-black/40 text-3xl text-white">⚙</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111113] px-0 py-12" id="programs">
          <div className="px-2 sm:px-4 lg:px-6">
            <h2 className="font-display text-[30px] uppercase tracking-[0.15em] text-white sm:text-[34px]">Categories</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((card, index) => (
              <div key={card.title} className={`rounded-[6px] border p-6 ${index === 0 ? 'border-brand-400/60 bg-brand-500/10' : 'border-white/12 bg-white/5'}`}>
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-black/25 text-[32px] text-brand-400">{card.icon}</div>
                <h3 className="mt-5 text-[18px] uppercase tracking-[0.12em] text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-5 text-zinc-500">{card.copy}</p>
                <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-brand-400">Learn More →</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#070707] px-0 py-12">
          <div className="rounded-[4px] bg-black px-6 py-10 sm:px-8">
            <p className="text-[13px] uppercase tracking-[0.22em] text-brand-400">Sports</p>
            <h2 className="font-display text-[30px] uppercase tracking-[0.15em] text-white sm:text-[34px]">Competition Disciplines</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {disciplineCards.map((card) => (
                <div key={card.title} className="overflow-hidden rounded-[6px] border border-white/10 bg-[#18181a]">
                  <div className={`relative h-[115px] bg-gradient-to-br ${card.tone}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.25),transparent_12%),linear-gradient(180deg,transparent,rgba(0,0,0,0.34))]" />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-[15px] text-zinc-200">{card.title}</p>
                  </div>
                </div>
              ))}
              <div className="hidden xl:block" />
              <div className="hidden xl:block" />
            </div>
          </div>
        </section>

        <section className="bg-[#18181c] px-0 py-12" id="ranks">
          <div className="grid gap-10 px-2 sm:px-4 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-6">
            <div>
              <p className="text-[13px] uppercase tracking-[0.22em] text-brand-400">Why Register ?</p>
              <h2 className="font-display text-[30px] uppercase tracking-[0.15em] text-white sm:text-[34px]">The League Advantage</h2>

              <div className="mt-8 space-y-6">
                {[
                  ['National Recognition', "Benchmark your skills on India's official robotics leaderboard."],
                  ['Fair Judging', 'Compete with confidence under standardized, expert-led evaluation.'],
                  ['Career Ops', 'Bridge the gap between arena victories and top-tier tech placements.'],
                  ['High - Energy Eco', 'Join a nationwide community of elite innovators and robotics athletes.'],
                ].map(([title, copy], index) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-1 text-[30px] text-brand-400">{index === 0 ? '🏅' : index === 1 ? '🪓' : index === 2 ? '💼' : '⚡'}</div>
                    <div>
                      <p className="text-[18px] uppercase tracking-[0.08em] text-white">{title}</p>
                      <p className="mt-1 max-w-[330px] text-sm leading-5 text-zinc-500">&quot;{copy}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[250px] rounded-[4px] border border-white/10 bg-[linear-gradient(180deg,#12121a,#0c0c12)] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.5)]">
                <div className="text-center text-[14px] uppercase tracking-[0.2em] text-zinc-200">Leaderboard</div>
                <div className="mt-3 rounded bg-[#23232b] px-2 py-4 text-center text-white">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">#1</div>
                  <div className="mt-1 text-[15px]">Player Name</div>
                  <div className="mt-1 text-[26px] font-semibold">508754</div>
                </div>
                <div className="mt-3 space-y-2">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-between rounded border border-white/10 bg-[#1e1e25] px-2 py-1 text-[10px] text-zinc-200">
                      <span>{String(index + 2).padStart(2, '0')}</span>
                      <span>Player Name</span>
                      <span>{22000 - index * 2100}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-0 py-12" id="community">
          <div className="px-2 sm:px-4 lg:px-6">
            <h2 className="font-display text-[30px] uppercase tracking-[0.15em] text-white sm:text-[34px]">Join the Ecosystem</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {['Become In Judge', 'Volunteer', 'Community Member'].map((title) => (
              <div key={title} className="rounded-[6px] border border-white/10 bg-[#18181b] p-5 sm:p-6">
                <h3 className="font-display text-[18px] uppercase tracking-[0.12em] text-white">{title}</h3>
                <div className="mt-5 space-y-2">
                  {['Name', 'Location', 'Enroll'].map((field) => (
                    <input key={field} readOnly value={field} className="w-full rounded-[4px] border border-white/10 bg-[#222226] px-3 py-2 text-sm text-zinc-400 outline-none" />
                  ))}
                </div>
                <button className="mt-4 w-full rounded-[4px] bg-brand-500 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                  Sign Up
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-[#050505] px-0 py-10">
          <div className="space-y-8 border-t border-white/10 px-4 pt-6 sm:px-5">
            <div>
              <p className="text-[13px] uppercase tracking-[0.22em] text-white">Sponsors</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                {['NIT DELHI', 'INDIAN BIT', 'NIT SILCHAR', 'ROBO COMPANY', 'IIT BOMBAY', 'GENERAL ROBOTICS'].map((name) => (
                  <div key={name} className="rounded-[4px] border border-white/10 bg-white/5 px-3 py-5 text-center text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
              <div>
                <p className="font-display text-[24px] uppercase tracking-[0.18em] text-white">BotLeague</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                  Frontend-only React + TypeScript + Tailwind implementation.
                </p>
              </div>
              <div className="flex gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                <span className="rounded-full border border-white/10 px-4 py-2">Quick Links</span>
                <span className="rounded-full border border-white/10 px-4 py-2">Social Media</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
