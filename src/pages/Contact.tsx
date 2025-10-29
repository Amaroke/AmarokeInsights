import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xkgpbqvk");

  if (state.succeeded) {
    return (
      <InfoBubble
        icon={<FaEnvelope />}
        title="Message envoyé !"
        color="text-green-400"
      >
        <p className="leading-relaxed">
          Merci pour votre message. Je vous répondrai dès que possible.
        </p>
      </InfoBubble>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InfoBubble
        icon={<FaEnvelope />}
        title="Contactez-moi"
        color="text-blue-400"
      >
        <div className="flex flex-col space-y-3">
          <label htmlFor="email" className="font-medium text-gray-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="px-3 py-2 rounded bg-[#1e1e2a] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="font-medium text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="px-3 py-2 rounded bg-[#1e1e2a] min-h-[200px] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-400"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Envoyer
          </button>
        </div>
      </InfoBubble>
    </form>
  );
};

const Contact: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Contact;
