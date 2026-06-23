import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xkgpbqvk");

  if (state.succeeded) {
    return (
      <>
        <InfoBubble
          icon={<FaDiscord />}
          title="Mon Discord"
          color="text-purple-400"
        >
          <p className="text-gray-300">
            Si vous voulez parler finance, projets ou juste échanger quelques
            idées ? Vous pouvez aussi venir discuter avec moi sur Discord :{" "}
            <span className="font-semibold text-purple-300 select-all">
              amaroke
            </span>
          </p>
        </InfoBubble>
        <InfoBubble
          icon={<FaEnvelope />}
          title="Message envoyé !"
          color="text-green-400"
        >
          <p className="leading-relaxed">
            Merci pour votre message. Je vous répondrai dès que possible.
          </p>
        </InfoBubble>
      </>
    );
  }

  return (
    <>
      <InfoBubble
        icon={<FaDiscord />}
        title="Mon Discord"
        color="text-purple-400"
      >
        <p className="text-gray-300">
          Vous voulez parler finance, projets ou juste échanger quelques idées ?
          Venez discuter avec moi sur Discord :{" "}
          <span className="font-semibold text-purple-300 select-all">
            amaroke
          </span>
          <br />
          Autrement vous pouvez aussi m'envoyer un message via le formulaire
          ci-dessous.
        </p>
      </InfoBubble>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InfoBubble
          icon={<FaEnvelope />}
          title="Contactez-moi"
          color="text-blue-400"
        >
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <label htmlFor="email" className="font-medium text-gray-200">
              Votre email (pour que je puisse vous répondre uniquement)
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="px-3 py-2 rounded bg-[#1e1e2a] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-400"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message" className="font-medium text-gray-200">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="px-3 py-2 rounded bg-[#1e1e2a] min-h-50 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-400"
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
    </>
  );
};

const Contact: React.FC = () => {
  return (
    <PageLayout
      title="Me contacter"
      description="Une question, une suggestion ou une correction ? Contacte-moi via le formulaire ou Discord."
    >
      <Container gap="sm">
        <ContactForm />
      </Container>
    </PageLayout>
  );
};

export default Contact;
