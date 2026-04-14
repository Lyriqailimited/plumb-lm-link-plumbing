// Server component — no "use client" at top
import dynamic from "next/dynamic";
import { TestimonialsSection } from "@/components/testimonials-1";
import Footer4Col from "@/components/footer-column";
import {
  Phone, Clock, Shield, Star, CheckCircle,
  Wrench, Droplets, Flame, Zap, Home, AlertTriangle, Bot, ChevronDown,
} from "lucide-react";

const AnimatedShaderHero = dynamic(
  () => import("@/components/animated-shader-hero"),
  { ssr: false }
);
const LogoCloud = dynamic(
  () => import("@/components/logo-cloud-4").then((m) => ({ default: m.LogoCloud })),
  { ssr: false }
);

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME   || "Link Plumbing";
const CITY    = process.env.NEXT_PUBLIC_COMPANY_CITY   || "Sydney";
const PHONE   = "0412 056 027";
const EMAIL   = "info@linkplumbing.com.au";
const PRIMARY = process.env.NEXT_PUBLIC_PRIMARY_COLOR  || "#6EC1E4";
const RATING  = process.env.NEXT_PUBLIC_REVIEWS_RATING || "4.9";
const COUNT   = process.env.NEXT_PUBLIC_REVIEWS_COUNT  || "50";

const LOGOS = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",                                              alt: "Google",     width: 80  },
  { src: "https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg",                                                          alt: "Trustpilot", width: 100 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hipages_logo.svg/320px-Hipages_logo.svg.png",                 alt: "hipages",    width: 90  },
];

const TESTIMONIALS = [
  { name: "Sarah M.", role: "Homeowner, Sydney", text: "Link Plumbing fixed our burst pipe at midnight. Fast, professional, and the price was exactly what they quoted. Highly recommend!", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5 },
  { name: "John T.",  role: "Homeowner, Sydney", text: "Blocked drain sorted within the hour. The technician was friendly and left the area spotless. Will definitely use again.",          avatar: "https://randomuser.me/api/portraits/men/32.jpg",   rating: 5 },
  { name: "Emma R.",  role: "Homeowner, Sydney", text: "Hot water system replaced same day. Great communication and fair pricing. Five stars from me.",                                    avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5 },
];

const SERVICES = [
  { icon: AlertTriangle, title: "Emergency Plumbing",   desc: "24/7 rapid response for burst pipes, major leaks, and plumbing emergencies across Sydney." },
  { icon: Droplets,      title: "Blocked Drains",       desc: "Professional drain clearing with CCTV inspection. No mess, no guesswork."                  },
  { icon: Flame,         title: "Hot Water Systems",    desc: "Same-day hot water repairs and replacements. All brands, all models."                       },
  { icon: Wrench,        title: "General Plumbing",     desc: "Taps, toilets, pipes and fittings. Quality workmanship with an on-time guarantee."          },
  { icon: Home,          title: "Residential Plumbing", desc: "Full residential plumbing for renovations, new builds, and ongoing maintenance."            },
  { icon: Zap,           title: "Leak Detection",       desc: "Non-invasive electronic leak detection to find hidden leaks before they cause damage."      },
];

const FAQS = [
  { q: "What areas do you cover?",         a: "We cover all of Sydney metro area including the CBD, Eastern Suburbs, North Shore, Western Sydney, and the Hills District." },
  { q: "Do you offer emergency callouts?", a: "Yes — 24 hours a day, 7 days a week. Call 0412 056 027 for immediate dispatch."                                             },
  { q: "Are you licensed and insured?",    a: "Fully licensed plumbers with $20M public liability insurance. All work is guaranteed."                                      },
  { q: "Do you charge for quotes?",        a: "No. We provide free upfront quotes and confirm the price before any work begins — no surprises."                            },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-bold tracking-tight" style={{ color: PRIMARY }}>
            {COMPANY}
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#reviews"  className="hover:text-white transition-colors">Reviews</a>
            <a href="#faq"      className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact"  className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            <Phone size={14} />
            {PHONE}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-16">
        <AnimatedShaderHero
          trustBadge={{ text: `${RATING}\u2605 Google \u2022 ${COUNT}+ Reviews \u2022 24/7 Emergency` }}
          headline={{ line1: "Sydney Emergency", line2: "Plumbers" }}
          subtitle={`On-time guarantee \u2022 Upfront pricing \u2022 Licensed & Insured\nCall now: ${PHONE}`}
          buttons={{
            primary:   { text: "Book a Plumber" },
            secondary: { text: `Call ${PHONE}`  },
          }}
        />
      </div>

      {/* Trust strip */}
      <section className="border-y border-white/10 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
          {[
            { icon: Clock,       label: "24/7 Emergency",          sub: "Always available"        },
            { icon: Star,        label: `${RATING}\u2605 Google`,  sub: `${COUNT}+ reviews`       },
            { icon: Shield,      label: "Licensed & Insured",       sub: "$20M public liability"   },
            { icon: CheckCircle, label: "On-Time Guarantee",        sub: "Or we discount the job"  },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={20} style={{ color: PRIMARY }} />
              <span className="font-semibold text-white">{label}</span>
              <span className="text-white/50 text-xs">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="bg-[#0d0d0d] py-8">
        <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
          Trusted by Sydney homeowners &amp; verified on
        </p>
        <LogoCloud logos={LOGOS} />
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${PRIMARY}22`, color: PRIMARY }}
            >
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {CITY} Plumbing Services
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              From burst pipes at 2am to routine maintenance, Link Plumbing covers every job with the same upfront pricing and on-time guarantee.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#111111] p-6 hover:border-[#6EC1E4]/40 transition-all duration-200"
              >
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${PRIMARY}20` }}
                >
                  <Icon size={20} style={{ color: PRIMARY }} />
                </div>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 border-y border-white/10 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why {CITY} Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "On-Time Guarantee", body: "We arrive in the window we promise, or we discount the job. Your time is valuable."     },
              { title: "Upfront Pricing",   body: "You see the full price before we start. No hidden fees, no surprise invoices."           },
              { title: "Fully Licensed",    body: "All technicians are licensed plumbers carrying $20M public liability insurance."         },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="mt-1 h-5 w-1 flex-none rounded-full" style={{ backgroundColor: PRIMARY }} />
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-[#0a0a0a]">
        <TestimonialsSection
          badgeText="Customer Reviews"
          title={`What ${CITY} Homeowners Say`}
          subtitle={`${RATING} stars across ${COUNT}+ verified Google reviews.`}
          testimonials={TESTIMONIALS}
        />
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${PRIMARY}22`, color: PRIMARY }}
            >
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-white/10 bg-[#111111] px-5 py-4 open:border-[#6EC1E4]/30"
              >
                <summary className="flex cursor-pointer items-center justify-between font-medium text-white list-none select-none">
                  {q}
                  <ChevronDown size={16} className="flex-none text-white/40 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AI Receptionist callout */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border-l-4 bg-[#111111] p-7" style={{ borderColor: PRIMARY }}>
            <div className="flex items-start gap-4">
              <div
                className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Bot size={20} style={{ color: PRIMARY }} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Meet Your AI Receptionist</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Available 24/7, our AI receptionist can answer questions, provide estimates, and book
                  appointments instantly &mdash; no hold music.
                </p>
                <p className="mt-3 text-xs text-white/40">
                  Tap the button at the bottom-right corner to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section id="contact" className="py-16 px-4 bg-[#0d0d0d] border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: `${PRIMARY}22`, color: PRIMARY }}
          >
            24/7 Emergency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Plumbing Emergency?<br />
            <span style={{ color: PRIMARY }}>We&apos;re Ready Right Now.</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Burst pipe, blocked drain, no hot water &mdash; call now for rapid dispatch across {CITY}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#0a0a0a] hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: PRIMARY }}
            >
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer4Col />

    </main>
  );
}
