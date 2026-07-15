import {
  ShieldCheck,
  Users,
  Clock3,
  BadgeIndianRupee,
  Sparkles,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    desc: "Professional and reliable facility management with quality assurance.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Highly trained housekeeping and maintenance professionals.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    desc: "We always complete our work within the promised timeline.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    desc: "Competitive pricing with no compromise on quality.",
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    desc: "Latest tools and machinery for better cleaning and maintenance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Quick response and customer support whenever you need us.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold uppercase">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Why Customers Trust Noor Facilities
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            We focus on quality workmanship, customer satisfaction,
            professional manpower and affordable pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-red-600 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
                  <Icon size={32} className="text-red-600" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500">500+</h2>
            <p className="mt-3 text-gray-300">Projects Completed</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500">100%</h2>
            <p className="mt-3 text-gray-300">Customer Satisfaction</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500">50+</h2>
            <p className="mt-3 text-gray-300">Professional Staff</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500">24×7</h2>
            <p className="mt-3 text-gray-300">Support Available</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;