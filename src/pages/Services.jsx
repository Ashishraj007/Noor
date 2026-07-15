import {
  BrushCleaning,
  Hammer,
  Sofa,
  Building2,
  Paintbrush,
  Sparkles,
  Wrench,
  ShieldCheck,
  ScanSearch,
  House,
  Armchair,
  Droplets,
} from "lucide-react";

const services = [
  {
    title: "Housekeeping Services",
    icon: House,
    desc: "Professional housekeeping staff for offices, apartments and commercial buildings.",
  },
  {
    title: "Office Boy Services",
    icon: Building2,
    desc: "Reliable office assistants for pantry, files, office support and daily operations.",
  },
  {
    title: "Pantry Boy Services",
    icon: Droplets,
    desc: "Experienced pantry staff for tea, coffee, hospitality and pantry management.",
  },
  {
    title: "General Maintenance",
    icon: Wrench,
    desc: "Electrical, plumbing, civil work and complete maintenance solutions.",
  },
  {
    title: "Vacuum Cleaning",
    icon: BrushCleaning,
    desc: "Deep vacuum cleaning for homes, offices and commercial spaces.",
  },
  {
    title: "Carpet Shampoo Cleaning",
    icon: Sparkles,
    desc: "Professional carpet shampooing and stain removal services.",
  },
  {
    title: "Sofa Repair",
    icon: Sofa,
    desc: "Complete sofa repair, foam replacement and new sofa making.",
  },
  {
    title: "Chair Repair",
    icon: Armchair,
    desc: "Office chair, executive chair and furniture repair services.",
  },
  {
    title: "Curtain Services",
    icon: Paintbrush,
    desc: "Curtain stitching, installation, cleaning and maintenance.",
  },
  {
    title: "Marble Grinding",
    icon: Hammer,
    desc: "Professional marble grinding for a smooth premium finish.",
  },
  {
    title: "Marble Polishing",
    icon: ShieldCheck,
    desc: "Restore the natural shine of marble floors with polishing.",
  },
  {
    title: "Tile Buffing & Polishing",
    icon: ScanSearch,
    desc: "Deep tile cleaning, buffing and polishing for long-lasting shine.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase">
            Our Services
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Complete Facility Management Solutions
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Noor Facilities provides professional cleaning,
            housekeeping, maintenance and repair services for homes,
            offices and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-5">
                  <Icon className="text-red-600" size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.desc}
                </p>

                <button className="mt-6 text-red-600 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;