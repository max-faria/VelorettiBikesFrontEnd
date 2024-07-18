import ContactUsImg from "../assets/contactus.png";
import ContactForm from "../components/ContactForm";

const ContactUs: React.FC = () => {
  

  return (
    <div className="antialiased">
      <div className="flex flex-col gap-10 sm:flex-row w-full sm:justify-center sm:p-10">
       <ContactForm />
        <div className="hidden  sm:flex sm:justify-center sm:my-20">
          <img className="ali" src={ContactUsImg} alt="Man smiling in a bike" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
