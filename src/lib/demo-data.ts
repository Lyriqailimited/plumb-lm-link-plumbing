export const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Company";
export const COMPANY_CITY = process.env.NEXT_PUBLIC_COMPANY_CITY || "Brisbane";
export const PRIMARY_COLOR =
  process.env.NEXT_PUBLIC_PRIMARY_COLOR || "#3b82f6";
export const REVIEWS_COUNT = process.env.NEXT_PUBLIC_REVIEWS_COUNT || "127";
export const REVIEWS_RATING = process.env.NEXT_PUBLIC_REVIEWS_RATING || "4.9";
export const WIDGET_URL =
  process.env.NEXT_PUBLIC_WIDGET_URL || "https://widget-conrad-martens.vercel.app";
export const BOOKING_LINK =
  process.env.NEXT_PUBLIC_BOOKING_LINK || "#contact";

export const demoTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Operations Manager",
    text: "This AI voice assistant caught leads we'd have missed overnight. Booking rate jumped 34% in the first month.",
    avatar: "https://i.pravatar.cc/100?img=1",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    description:
      "This AI voice assistant caught leads we'd have missed overnight. Booking rate jumped 34% in the first month.",
    designation: "Operations Manager",
    profileImage: "https://i.pravatar.cc/200?img=1",
    jobtitle: "Operations Manager",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, PlumbPro",
    text: "Callers get their questions answered 24/7. I used to miss 6 calls a day after hours. Now I miss zero.",
    avatar: "https://i.pravatar.cc/100?img=12",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    description:
      "Callers get their questions answered 24/7. I used to miss 6 calls a day after hours. Now I miss zero.",
    designation: "Founder, PlumbPro",
    profileImage: "https://i.pravatar.cc/200?img=12",
    jobtitle: "Founder, PlumbPro",
  },
  {
    id: 3,
    name: "Marcus Webb",
    role: "Service Director",
    text: "Our customers cannot tell it's AI. The voice sounds natural and it qualifies leads better than my old receptionist.",
    avatar: "https://i.pravatar.cc/100?img=14",
    image: "https://i.pravatar.cc/100?img=14",
    rating: 5,
    description:
      "Our customers cannot tell it's AI. The voice sounds natural and it qualifies leads better than my old receptionist.",
    designation: "Service Director",
    profileImage: "https://i.pravatar.cc/200?img=14",
    jobtitle: "Service Director",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Lead",
    text: "ROI within 2 weeks. The widget turned our website into a 24-hour sales rep that never sleeps.",
    avatar: "https://i.pravatar.cc/100?img=5",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    description:
      "ROI within 2 weeks. The widget turned our website into a 24-hour sales rep that never sleeps.",
    designation: "Marketing Lead",
    profileImage: "https://i.pravatar.cc/200?img=5",
    jobtitle: "Marketing Lead",
  },
  {
    id: 5,
    name: "James Thornton",
    role: "Owner",
    text: "Best investment I made this year. Setup was 20 minutes. Results showed up the next day.",
    avatar: "https://i.pravatar.cc/100?img=7",
    image: "https://i.pravatar.cc/100?img=7",
    rating: 5,
    description:
      "Best investment I made this year. Setup was 20 minutes. Results showed up the next day.",
    designation: "Owner",
    profileImage: "https://i.pravatar.cc/200?img=7",
    jobtitle: "Owner",
  },
  {
    id: 6,
    name: "Amelia Foster",
    role: "Customer Success",
    text: "Clients love the instant response. No more voicemail tag — questions get answered the moment they ask.",
    avatar: "https://i.pravatar.cc/100?img=9",
    image: "https://i.pravatar.cc/100?img=9",
    rating: 5,
    description:
      "Clients love the instant response. No more voicemail tag — questions get answered the moment they ask.",
    designation: "Customer Success",
    profileImage: "https://i.pravatar.cc/200?img=9",
    jobtitle: "Customer Success",
  },
];

export const demoLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nike-Logo.svg",
    alt: "Nike",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM",
  },
];

export const demoCustomers = demoLogos.map((l) => ({
  src: l.src,
  alt: l.alt,
  height: 32,
}));

export const demoPlans = [
  {
    name: "Starter",
    info: "For small teams just getting started",
    price: { monthly: 29, yearly: 24 },
    features: [
      { text: "AI voice widget on 1 site" },
      { text: "Up to 500 calls / month" },
      { text: "Email + SMS notifications" },
      { text: "Google Calendar booking" },
    ],
    btn: { text: "Start free trial", href: "#contact" },
  },
  {
    name: "Pro",
    info: "For growing service businesses",
    price: { monthly: 79, yearly: 59 },
    features: [
      { text: "Everything in Starter" },
      { text: "Up to 2,500 calls / month" },
      { text: "Custom voice + brand" },
      { text: "CRM integration" },
      { text: "Priority support" },
    ],
    btn: { text: "Start free trial", href: "#contact" },
    highlighted: true,
  },
  {
    name: "Scale",
    info: "For multi-location operators",
    price: { monthly: 199, yearly: 149 },
    features: [
      { text: "Everything in Pro" },
      { text: "Unlimited calls" },
      { text: "Multi-location routing" },
      { text: "Dedicated success manager" },
      { text: "SLA + uptime guarantee" },
    ],
    btn: { text: "Contact sales", href: "#contact" },
  },
];

export const demoAreaChart = Array.from({ length: 24 }).map((_, i) => {
  const t = new Date();
  t.setDate(t.getDate() - (23 - i));
  return {
    date: t.toISOString().slice(0, 10),
    value: Math.round(40 + Math.sin(i / 3) * 15 + i * 2 + Math.random() * 8),
  };
});
