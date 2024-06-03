import { ArrowUp } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="font-sans bg-black text-neutral-300 p-10">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-8 basis-1/2 justify-between md:flex-row">
          <div>
            <table>
              <thead className="text-xl">
                <tr><td>Explorer</td></tr>
              </thead>
              <tbody className="text-sm text-neutral-300/60">
                <tr><td>Eletric Bikes</td></tr>
                <tr><td>City Bikes</td></tr>
                <tr><td>kid's Bikes</td></tr>
                <tr><td>Acessories</td></tr>
                <tr><td>Outlet</td></tr>
                <tr><td>Bussines</td></tr>
                <tr><td>Insurance Eletric</td></tr>
                <tr><td>Size Guide</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead className="text-xl">
                <tr><td>About</td></tr>
              </thead>
              <tbody className="text-sm text-neutral-300/60">
                <tr><td>About Us</td></tr>
                <tr><td>Journal</td></tr>
                <tr><td>Reviews</td></tr>
                <tr><td>Press</td></tr>
                <tr><td>Jobs</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead className="text-xl">
                <tr><td>Help</td></tr>
              </thead>
              <tbody className="text-sm text-neutral-300/60">
                <tr><td>Contact</td></tr>
                <tr><td>FAQ</td></tr>
                <tr><td>Delivery</td></tr>
                <tr><td>Assembly & manuals</td></tr>
                <tr><td>Payment options</td></tr>
                <tr><td>Privacy policy</td></tr>
                <tr><td>Terms & conditions</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col md:flex-1 md:pl-20 gap-5 items-end">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between">
              <p className="text-xl">Join the ride.</p>
              <button
                className="bg-white rounded-full p-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp size={25} color="black" />
              </button>
            </div>
            <p className="text-sm">Sign up for our newsletter.</p>
            <div className="flex max-w-0.8">
              <input
                type="email"
                placeholder="Enter your email address here"
                className="bg-black border border-neutral-300 rounded-full py-3 px-5 text-xs focus:outline-none w-full"
              />
              <button className="bg-neutral-300 text-black rounded-full px-8 text-sm relative right-10">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2.5">
              <input type="checkbox" />
              <p className="text-sm">
                By signing up, I agree to the privacy policy of Veloretti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
