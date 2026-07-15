import { PhoneCall, ClipboardCheck, FileText, CheckCircle2 } from "lucide-react";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4?w=600",
    title: "Office Housekeeping",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
    title: "Deep Cleaning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
    title: "Corporate Maintenance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Commercial Building",
  },
];

const process = [
  {
    icon: PhoneCall,
    title: "Call Us",
    desc: "Contact our team and tell us your requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Site Inspection",
    desc: "Our experts inspect the site and understand the work.",
  },
  {
    icon: FileText,
    title: "Free Quotation",
    desc: "Receive a transparent and affordable quotation.",
  },
  {
    icon: CheckCircle2,
    title: "Work Completed",
    desc: "Our professionals complete the work on time.",
  },
];

const WorkGallery = () => {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Gallery */}

        <div className="text-center mb-14">

          <span className="text-red-600 font-semibold uppercase">
            Our Work
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Recent Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse of our professional housekeeping,
            maintenance and cleaning services.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white group"
            >
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-5">

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* Process */}

        <div className="mt-24">

          <div className="text-center mb-16">

            <span className="text-red-600 font-semibold uppercase">
              Work Process
            </span>

            <h2 className="text-4xl font-bold mt-3">
              How We Work
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {process.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
                >

                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">

                    <Icon className="text-red-600" size={36} />

                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkGallery;