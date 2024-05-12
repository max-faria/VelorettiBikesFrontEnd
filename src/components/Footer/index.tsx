const Footer: React.FC = () => {
  return (
    <footer className="font-sans bg-black text-neutral-300 p-10">
      <div className="flex">
        <div className="flex basis-1/2 justify-between">
          <div>
            <table>
              <thead className="text-xl">
                <tr>Explorer</tr>
              </thead>
              <br />
              <tbody className="text-sm text-neutral-300/60">
                <tr>Eletric Bikes</tr>
                <tr>City Bikes</tr>
                <tr>kid's Bikes</tr>
                <tr>Acessories</tr>
                <tr>Outlet</tr>
                <tr>Bussines</tr>
                <tr>Insurance Eletric</tr>
                <tr>Size Guide</tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead className="text-xl">
                <tr>About</tr>
              </thead>
              <br />
              <tbody className="text-sm text-neutral-300/60">
                <tr>About Us</tr>
                <tr>Journal</tr>
                <tr>Reviews</tr>
                <tr>Press</tr>
                <tr>Jobs</tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead className="text-xl">
                <tr>Help</tr>
              </thead>
              <br />
              <tbody className="text-sm text-neutral-300/60">
                <tr>Contact</tr>
                <tr>FAQ</tr>
                <tr>Delivery</tr>
                <tr>Assembly & manuals</tr>
                <tr>Payment options</tr>
                <tr>Privacy policy</tr>
                <tr>Terms & conditions</tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col flex-1 pl-20 gap-5 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xl">Join the ride.</p>
            <p className="text-sm">Sign up for our newsletter.</p>
            <div className="flex">
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
