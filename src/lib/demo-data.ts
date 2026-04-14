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
    "id": 1,
    "name": "Sarah M.",
    "role": "Customer",
    "text": "Link Plumbing fixed our burst pipe at midnight. Fast, professional, and the price was exactly what they quoted. Highly recommend!",
    "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
    "rating": 5,
    "description": "Link Plumbing fixed our burst pipe at midnight. Fast, professional, and the price was exactly what t",
    "designation": "Customer",
    "profileImage": "https://randomuser.me/api/portraits/women/11.jpg",
    "jobtitle": "Homeowner"
  },
  {
    "id": 2,
    "name": "John T.",
    "role": "Customer",
    "text": "Blocked drain sorted within the hour. The technician was friendly and left the area spotless. Will definitely use again.",
    "avatar": "https://randomuser.me/api/portraits/men/12.jpg",
    "rating": 5,
    "description": "Blocked drain sorted within the hour. The technician was friendly and left the area spotless. Will d",
    "designation": "Customer",
    "profileImage": "https://randomuser.me/api/portraits/men/12.jpg",
    "jobtitle": "Homeowner"
  },
  {
    "id": 3,
    "name": "Emma R.",
    "role": "Customer",
    "text": "Hot water system replaced same day. Great communication and fair pricing. Five stars from me.",
    "avatar": "https://randomuser.me/api/portraits/women/13.jpg",
    "rating": 5,
    "description": "Hot water system replaced same day. Great communication and fair pricing. Five stars from me.",
    "designation": "Customer",
    "profileImage": "https://randomuser.me/api/portraits/women/13.jpg",
    "jobtitle": "Homeowner"
  }
];

export const demoLogos = [
  {
    "src": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    "alt": "Google"
  },
  {
    "src": "https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg",
    "alt": "Trustpilot"
  },
  {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hipages_logo.svg/320px-Hipages_logo.svg.png",
    "alt": "hipages"
  },
  {
    "src": "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Gas_Safe_Register_logo.svg/320px-Gas_Safe_Register_logo.svg.png",
    "alt": "Licensed & Insured"
  }
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
