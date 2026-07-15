import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-500 uppercase font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Get A Free Quote Today
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Looking for professional housekeeping, maintenance or
            facility management services? Contact Noor Facilities today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <div className="bg-slate-800 rounded-2xl p-6 mb-6 flex gap-5">

              <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center">
                <Phone />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Phone Number
                </h3>

                <p className="text-gray-300">
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mb-6 flex gap-5">

              <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center">
                <Mail />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Email Address
                </h3>

                <p className="text-gray-300">
                  info@noorfacilities.com
                </p>

              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 flex gap-5">

              <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center">
                <MapPin />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Office Address
                </h3>

                <p className="text-gray-300">
                  Your Office Address Here
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl p-8 text-black shadow-xl">

            <h3 className="text-3xl font-bold mb-8">
              Request A Quote
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-4 outline-none focus:border-red-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-4 outline-none focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-4 outline-none focus:border-red-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
                className="w-full border rounded-lg p-4 outline-none focus:border-red-500"
              ></textarea>

              <button
                className="bg-red-600 text-white px-8 py-4 rounded-lg w-full hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;