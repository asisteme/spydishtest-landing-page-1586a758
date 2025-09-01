import React from 'react'

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=I&#39;m%20interested%20in%20SpyDishTest'

const navItems = [
  { text: 'For Diners', href: '#diners' },
  { text: 'For Restaurants', href: '#restaurants' },
  { text: 'Testimonials', href: '#testimonials' }
]

export default function App () {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Diners />
      <Restaurants />
      <Testimonials />
      <Footer />
    </div>
  )
}

/* ---------- Header ---------- */
function Header () {
  return (
    <header className="bg-spy-bg sticky top-0 z-50">
      <nav className="section-container flex items-center justify-between py-4">
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <img
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
            alt="SpyDishTest logo"
            className="w-8 h-8"
          />
          <span className="text-spy-blue">SpyDishTest</span>
        </a>
        <ul className="hidden md:flex gap-6">
          {navItems.map(item => (
            <li key={item.text}>
              <a
                href={item.href}
                className="hover:text-spy-blue transition-colors"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener"
          className="inline-block bg-spy-blue text-white px-4 py-2 rounded-md shadow-md hover:bg-spy-purple transition"
        >
          Start Now
        </a>
      </nav>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero () {
  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="section-container relative py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          An Innovative Solution for <span className="text-spy-blue">Restaurants</span> &amp; <span className="text-spy-blue">Diners</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          SpyDishTest is an intelligent WhatsApp bot that connects diners with restaurants while
          optimizing restaurant management through powerful data analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener"
            className="bg-spy-blue px-6 py-3 rounded-md font-semibold hover:bg-spy-purple transition shadow-lg"
          >
            Chat on WhatsApp
          </a>
          <a
            href="#restaurants"
            className="bg-white text-spy-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition shadow-lg"
          >
            Restaurant Pro Plan
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Diners Section ---------- */
function Diners () {
  return (
    <section id="diners" className="section-container py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        For Diners
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ul className="space-y-6 text-lg">
          <li className="flex gap-3">
            <IconCheck />
            <span>Explore restaurants based on your taste &amp; location.</span>
          </li>
          <li className="flex gap-3">
            <IconCheck />
            <span>Discover featured dishes and trending menus near you.</span>
          </li>
          <li className="flex gap-3">
            <IconCheck />
            <span>Read reviews, rankings &amp; popularity analyses for dishes.</span>
          </li>
        </ul>
        <div className="card-hover border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://images.pexels.com/photos/2956951/pexels-photo-2956951.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Chat example"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------- Restaurants Section ---------- */
function Restaurants () {
  const features = [
    {
      title: 'Competitor Pricing Intelligence',
      desc: 'Compare menu prices with local competitors in real-time.'
    },
    {
      title: 'Dish Ranking & Sentiment',
      desc: 'See how your dishes rank and what customers really think.'
    },
    {
      title: 'Diner Interest Heatmaps',
      desc: 'Identify peak demand by time & location to optimize resources.'
    },
    {
      title: 'AI Campaign Optimization',
      desc: 'Personalized recommendations & smart advertising budgets.'
    },
    {
      title: 'Weekly Executive Reports',
      desc: 'Stay updated on price movements, reviews & key trends.'
    }
  ]

  return (
    <section id="restaurants" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          For Restaurants
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="card-hover p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-spy-blue">
                {f.title}
              </h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener"
            className="bg-spy-blue text-white px-8 py-4 rounded-md font-semibold hover:bg-spy-purple transition shadow-lg"
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Testimonials ---------- */
function Testimonials () {
  const testimonials = [
    {
      quote: 'SpyDishTest helped us adjust prices and boosted our weekend reservations by 30%!',
      name: 'Maria R.',
      role: 'Restaurant Owner'
    },
    {
      quote: 'I discovered my new favorite sushi place through SpyDishTest recommendations.',
      name: 'Daniel C.',
      role: 'Food Enthusiast'
    },
    {
      quote: 'The weekly reports are gold. We spot trends before our competitors even notice.',
      name: 'Angela P.',
      role: 'Operations Manager'
    }
  ]

  return (
    <section id="testimonials" className="section-container py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">What People Are Saying</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map(t => (
          <blockquote
            key={t.name}
            className="card-hover bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full"
          >
            <p className="flex-1 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            <footer className="text-sm font-medium text-spy-blue">
              {t.name} &nbsp;<span className="text-gray-500">– {t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer () {
  return (
    <footer className="bg-spy-purple text-gray-200 py-10">
      <div className="section-container grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">SpyDishTest</h3>
          <p>An innovative WhatsApp bot connecting diners &amp; restaurants.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2">
            <li><a href="#diners" className="hover:text-white">For Diners</a></li>
            <li><a href="#restaurants" className="hover:text-white">For Restaurants</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p>Email: <a href="mailto:dasdas@gmail.com" className="underline hover:text-white">dasdas@gmail.com</a></p>
          <p className="mt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
              className="bg-spy-blue text-white px-4 py-2 rounded-md inline-block mt-4 hover:bg-white hover:text-spy-blue transition"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SpyDishTest. All rights reserved.
      </div>
    </footer>
  )
}

/* ---------- Icons ---------- */
function IconCheck () {
  return (
    <svg
      className="w-6 h-6 text-spy-blue shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
