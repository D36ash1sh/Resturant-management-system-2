import { Helmet } from "react-helmet-async";
import banner from "../../assets/contact/banner.jpg";
import emo from "../../assets/contact/emo.png";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>{`BISTRO BOSS | Contact Us`}</title>
      </Helmet>

      <div className="min-h-screen bg-base-100">
        {/* Banner */}
        <div
          className="h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="bg-black bg-opacity-50 px-6 py-4 rounded-lg text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest">
              CONTACT US
            </h1>
            <p className="mt-2 text-sm md:text-base uppercase tracking-[0.3em]">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          {/* Text / Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions about reservations, events, or our menu? Send us a
              message and our team will get back to you as soon as possible.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Phone:</span> +91 6082897653


              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                deba7621@gmail.com
              </li>
              <li>
                <span className="font-semibold">Address:</span> park street kolkata
              </li>
            </ul>
          </div>

          {/* Simple contact form / illustration */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex justify-center mb-4">
              <img
                src={emo}
                alt="Contact illustration"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn w-full bg-[#D1A054B2] border-none text-white hover:bg-[#D1A054]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


