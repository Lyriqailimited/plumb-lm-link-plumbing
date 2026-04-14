"use client";

import { useEffect } from "react";

// Heroes
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ShaderShowcase from "@/components/hero";
import AnimatedShaderHero from "@/components/animated-shader-hero";

// Backgrounds / decorative
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Boxes } from "@/components/ui/background-boxes";
import { Sparkles } from "@/components/ui/sparkles";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { ParticleTextEffect } from "@/components/particle-text-effect";
import { renderCanvas } from "@/components/ui/canvas";

// Social proof / logos
import { LogoCloud } from "@/components/logo-cloud-4";
import { CustomersSection } from "@/components/ui/customers-section";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Features / layout
import FeatureSection from "@/components/stack-feature-section";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import StickyTabs from "@/components/ui/sticky-section-tabs";
import ScrollAreaDemo from "@/components/scroll-area-1";
import { Scroller } from "@/components/scroller-1";
import { Spinner } from "@/components/spinner-1";

// Pricing
import { PricingSection } from "@/components/pricing";
import { LoopsPricingSlider } from "@/components/pricing-slider-loops";
import { PricingInteraction } from "@/components/ui/pricing-interaction";
import { PricingCard } from "@/components/pricing-card-1";

// Testimonials
import { TestimonialsSection } from "@/components/testimonials-1";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { Component as BookTestimonial } from "@/components/3d-book-testimonial";
import { TestimonialCarousel } from "@/components/ui/testimonial";

// Footers
import FooterSection from "@/components/footer";
import Footer4Col from "@/components/footer-column";

// Navigation (Aceternity demos)
import NavbarDemo from "@/components/resizable-navbar-demo";
import FloatingDockDemo from "@/components/floating-dock-demo";
import SidebarDemo from "@/components/sidebar-demo";
import FloatingNavDemo from "@/components/floating-navbar-demo";

// Widget
import VoiceWidget from "@/components/voice-widget";

// Data
import {
  demoTestimonials,
  demoLogos,
  demoCustomers,
  demoPlans,
} from "@/lib/demo-data";

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-4">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    try {
      renderCanvas();
    } catch {
      /* canvas element not mounted on this page */
    }
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Hero — Shape Landing */}
      <HeroGeometric
        badge="Lead Magnet"
        title1="Capture leads"
        title2="Around the clock"
      />

      {/* Hero — Animated Shader */}
      <SectionLabel title="Animated Shader Hero" />
      <AnimatedShaderHero
        headline={{ line1: "24/7 AI voice widget", line2: "Never miss a lead" }}
        subtitle="Turn your website into a 24-hour sales rep that books appointments while you sleep."
      />

      {/* Hero — Shader Showcase */}
      <SectionLabel title="Shader Showcase" />
      <ShaderShowcase />

      {/* Aurora Background */}
      <SectionLabel title="Aurora Background" />
      <AuroraBackground>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Beautiful aurora backgrounds</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Add ambient motion to any section with a drop-in wrapper.
          </p>
        </div>
      </AuroraBackground>

      {/* Background Boxes */}
      <SectionLabel title="Background Boxes" />
      <div className="relative h-[40rem] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h2 className="relative z-30 text-white text-3xl md:text-5xl font-bold">
          Interactive backgrounds
        </h2>
      </div>

      {/* Sparkles */}
      <SectionLabel title="Sparkles" />
      <div className="relative h-96 w-full overflow-hidden bg-black flex items-center justify-center">
        <Sparkles className="absolute inset-0 w-full h-full" color="#ffffff" density={500} />
        <h2 className="relative z-10 text-white text-3xl md:text-5xl font-bold">
          Sparkle over anything
        </h2>
      </div>

      {/* Gooey Text */}
      <SectionLabel title="Gooey Text Morphing" />
      <div className="h-[30rem] flex items-center justify-center bg-background">
        <GooeyText texts={["Capture", "Qualify", "Convert", "Book"]} />
      </div>

      {/* Particle Text */}
      <SectionLabel title="Particle Text Effect" />
      <div className="relative isolate w-full overflow-hidden bg-black [&>div]:!min-h-0 [&>div]:py-12">
        <ParticleTextEffect words={["LEADS", "CALLS", "BOOKINGS", "24/7"]} />
      </div>

      {/* Infinite Slider */}
      <SectionLabel title="Infinite Logo Slider" />
      <div className="relative isolate w-full overflow-hidden bg-background py-12">
        <InfiniteSlider gap={48} duration={40}>
          {demoLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto dark:invert"
            />
          ))}
        </InfiniteSlider>
      </div>

      {/* Logo Cloud */}
      <SectionLabel title="Logo Cloud" />
      <div className="relative isolate w-full overflow-hidden py-8">
        <LogoCloud logos={demoLogos} />
      </div>

      {/* Customers Section */}
      <CustomersSection customers={demoCustomers} />

      {/* Stack Feature Section */}
      <SectionLabel title="Feature Stack" />
      <FeatureSection />

      {/* Container Scroll */}
      <SectionLabel title="Container Scroll Animation" />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold">
            Scroll-based <br />
            <span className="text-4xl md:text-[6rem] font-bold leading-none">
              Reveals
            </span>
          </h1>
        }
      >
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl">
          <span className="text-white text-3xl font-bold">Your content here</span>
        </div>
      </ContainerScroll>

      {/* Sticky Section Tabs */}
      <SectionLabel title="Sticky Section Tabs" />
      <StickyTabs>
        <StickyTabs.Item id="1" title="Capture">
          <p className="text-lg">AI voice widget greets visitors the moment they land.</p>
        </StickyTabs.Item>
        <StickyTabs.Item id="2" title="Qualify">
          <p className="text-lg">Asks the right questions to filter quality leads.</p>
        </StickyTabs.Item>
        <StickyTabs.Item id="3" title="Book">
          <p className="text-lg">Drops booked appointments straight into your calendar.</p>
        </StickyTabs.Item>
      </StickyTabs>

      {/* Scroll Area + Scroller */}
      <SectionLabel title="Scroll Area" />
      <div className="flex justify-center py-8">
        <ScrollAreaDemo />
      </div>

      <SectionLabel title="Scroller" />
      <div className="mx-auto max-w-lg py-8">
        <Scroller overflow="y" height={240} withButtons>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-4 border-b">
              Scroll item #{i + 1}
            </div>
          ))}
        </Scroller>
      </div>

      {/* Spinner */}
      <SectionLabel title="Spinner" />
      <div className="flex justify-center py-8">
        <Spinner size={32} />
      </div>

      {/* Pricing — Section */}
      <SectionLabel title="Pricing" />
      <PricingSection
        heading="Plans that scale with you"
        description="Simple pricing. Cancel anytime."
        plans={demoPlans}
      />

      {/* Pricing — Card */}
      <SectionLabel title="Pricing Card" />
      <div className="mx-auto max-w-md px-6 py-12">
        <PricingCard
          title="Pro"
          price="$79"
          priceDescription="per month"
          description="Everything you need to scale your voice AI widget."
          features={[
            "Unlimited calls",
            "Custom voice + brand",
            "CRM integration",
            "Priority support",
          ]}
          buttonText="Start free trial"
        />
      </div>

      {/* Pricing — Slider */}
      <SectionLabel title="Pricing Slider" />
      <LoopsPricingSlider />

      {/* Pricing — Interaction */}
      <SectionLabel title="Pricing Interaction" />
      <div className="flex justify-center py-12">
        <PricingInteraction
          starterMonth={29}
          starterAnnual={24}
          proMonth={79}
          proAnnual={59}
        />
      </div>

      {/* Testimonials — Cards */}
      <TestimonialsSection
        title="Loved by service businesses"
        subtitle="Real results from real operators."
        badgeText="Testimonials"
        testimonials={demoTestimonials}
      />

      {/* Testimonials — Columns */}
      <SectionLabel title="Testimonials Columns" />
      <div className="flex justify-center gap-6 py-12 overflow-hidden max-h-[600px]">
        <TestimonialsColumn
          testimonials={demoTestimonials.map((t) => ({
            text: t.text,
            image: t.image,
            name: t.name,
            role: t.role,
          }))}
          duration={15}
        />
        <TestimonialsColumn
          className="hidden md:block"
          testimonials={demoTestimonials.map((t) => ({
            text: t.text,
            image: t.image,
            name: t.name,
            role: t.role,
          }))}
          duration={19}
        />
      </div>

      {/* Testimonials — 3D Book */}
      <SectionLabel title="3D Book Testimonials" />
      <BookTestimonial
        testimonials={demoTestimonials.map((t) => ({
          image: t.avatar,
          text: t.text,
          name: t.name,
          jobtitle: t.jobtitle,
          rating: t.rating,
        }))}
      />

      {/* Testimonials — Carousel */}
      <SectionLabel title="Testimonial Carousel" />
      <div className="flex justify-center py-12">
        <TestimonialCarousel
          testimonials={demoTestimonials.map((t) => ({
            id: t.id,
            name: t.name,
            avatar: t.avatar,
            description: t.description,
          }))}
        />
      </div>

      {/* Navigation — Resizable Navbar */}
      <SectionLabel title="Resizable Navbar" />
      <NavbarDemo />

      {/* Navigation — Floating Dock */}
      <SectionLabel title="Floating Dock" />
      <FloatingDockDemo />

      {/* Navigation — Sidebar */}
      <SectionLabel title="Sidebar" />
      <div className="px-6 py-8">
        <SidebarDemo />
      </div>

      {/* Navigation — Floating Navbar */}
      <SectionLabel title="Floating Navbar" />
      <FloatingNavDemo />

      {/* Footers */}
      <SectionLabel title="Footer Column" />
      <Footer4Col />

      <SectionLabel title="Footer" />
      <FooterSection />

      {/* Voice Widget */}
      <VoiceWidget />
    </main>
  );
}
