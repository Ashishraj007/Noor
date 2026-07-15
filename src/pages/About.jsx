import {
  CheckCircle,
  Users,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
            alt="Cleaning Services"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            About Noor Facilities
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Trusted Facility Management Company
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Noor Facilities provides complete housekeeping, maintenance,
            cleaning and manpower solutions for residential, commercial
            and industrial properties.
          </p>

          <p className="text-gray-600 mt-4 leading-8">
            Our experienced professionals ensure every project is completed
            with quality, safety and customer satisfaction.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <div className="flex gap-3">
              <CheckCircle className="text-red-600" />
              <div>
                <h3 className="font-semibold">Professional Staff</h3>
                <p className="text-sm text-gray-500">
                  Skilled & trained manpower
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-red-600" />
              <div>
                <h3 className="font-semibold">Quality Service</h3>
                <p className="text-sm text-gray-500">
                  Premium workmanship
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Users className="text-red-600" />
              <div>
                <h3 className="font-semibold">Experienced Team</h3>
                <p className="text-sm text-gray-500">
                  Dedicated professionals
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <BadgeCheck className="text-red-600" />
              <div>
                <h3 className="font-semibold">Customer Satisfaction</h3>
                <p className="text-sm text-gray-500">
                  Trusted by many clients
                </p>
              </div>
            </div>

          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="text-center bg-white shadow-lg rounded-xl p-5">
              <h2 className="text-3xl font-bold text-red-600">10+</h2>
              <p className="text-gray-500 text-sm">
                Years Experience
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-xl p-5">
              <h2 className="text-3xl font-bold text-red-600">500+</h2>
              <p className="text-gray-500 text-sm">
                Projects
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-xl p-5">
              <h2 className="text-3xl font-bold text-red-600">100%</h2>
              <p className="text-gray-500 text-sm">
                Satisfaction
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;