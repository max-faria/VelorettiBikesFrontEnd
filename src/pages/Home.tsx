import LogoWhite from "../assets/logo-white.svg";
import GuyBike from "../assets/guy-home.png";
import BikeEmployee from "../assets/bike-image.jpeg.png";
import BikeClose from "../assets/bike-close.png";
import BikeCard from "../components/BikeCard/BikeCard";
import EletricAce from "../assets/eletricace.png";
import EletricIvy from "../assets/eletricivycard.png";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="bg-hero-section bg-cover bg-center bg-no-repeat lg:bg-cover lg:h-screen text-white w-full">
        <div className="relative top-24 py-40 px-10 items-start lg:top-60 lg:px-10">
          <div className="w-14 lg:w-28">
            <img src={LogoWhite} alt="" className="w-full" />
          </div>
          <h1 className="text-4xl lg:text-7xl">
            Bike lease plan for employees.
          </h1>
        </div>
      </div>

      <div className=" py-12 px-10 md:flex md:items-center">
        <div className="md:basis-1/2 hidden md:block">
          <img src={GuyBike} alt="" className="w-full relative" />
        </div>
        <div className="md:flex md:flex-col md:basis-1/2 lg:px-36 md:px-16 text-justify md:max-w-xl">
          <h2 className="text-3xl text-black-gray w-50 text-center">
            Bike plans for employees.
          </h2>
          <p className="mt-5 text-sm">
            Veloretti Electrics benefit both the environment and the health of
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>
        </div>
      </div>

      <div className="bg-maintenance-section bg-cover bg-no-repeat lg:bg-cover lg:h-screen text-white">
        <div className="relative top-24 py-40 px-10 items-start lg:top-38 lg:px-10 md:max-w-lg">
          <h2 className="text-4xl lg:text-5xl">
            Service, maintenance and insurance
          </h2>
          <p className="text-sm md:max-w-72 text-justify mt-2">
            The lease includes an all-in service package. Throughout the entire
            36 months, you are fully insured against damage, theft and
            maintenance. In addition, you always have access to roadside
            assistance.
          </p>
        </div>
      </div>

      <div className="py-12 px-10 md:flex md:items-center">
        <div className="md:basis-1/2 hidden md:block md:max-w-xl">
          <img src={BikeEmployee} alt="" className="w-full relative" />
        </div>
        <div className="md:flex md:flex-col md:basis-1/2 lg:px-36 md:px-16">
          <h2 className="text-3xl text-black-gray w-50">
            Free of charge for employers
          </h2>
          <p className="mt-5 text-sm text-justify">
            The bike plan is totally independent of the WKR and is free for you
            as an employer. The employee pays the lease costs and you, as the
            employer, decide whether you want to contribute to the costs.
          </p>
        </div>
      </div>

      <div className="md:py-10 px-10 md:flex md:items-center flex flex-col md:flex-row gap-10">
        <div className="flex flex-col md:basis-1/2 lg:px-36 md:px-16 gap-2">
          <h2 className="text-3xl text-black-gray w-50 mb-5 text-center">
            How it works
          </h2>
          <div>
            <p className="text-xl mb-1">Register your company</p>
            <p className="text-sm mb-3 text-gray-500 text-justify ">
              Fill in our registration form with your company details. After
              your registration, our leasing partner will do a credit check. You
              will hear whether your application has been approved within 24
              hours.
            </p>
          </div>
          <div>
            <p className="text-xl mb-1">Determine the requirements</p>
            <p className="text-sm mb-3 text-gray-500 text-justify">
              You get access to the digital platform. Set the requirements for
              your employees and share the registration link.
            </p>
          </div>
          <div>
            <p className="text-xl mb-1">Ride your bike!</p>
            <p className="text-sm mb-3 text-gray-500 text-justify">
              Let's go! Your employees can choose their bikes and they'll be
              delivered straight to their homes.
            </p>
          </div>
          <div>
            <p className="text-xl mb-1">Administration</p>
            <p className="text-sm mb-3 text-gray-500 text-justify">
              Everything in one place. The digital platform gives you an easy
              overview of all the information for your payroll.
            </p>
          </div>
        </div>
        <div className="md:h-max-fit md:items-center">
          <img src={BikeClose} alt="" className="md:max-w-md" />
        </div>
      </div>

      <div className="px-10 py-10 md:flex-row flex-col flex gap-10 p-5 md:justify-around">
        <BikeCard
          title="Electric Ace"
          price="69,07"
          photo={EletricAce}
          color={["#000000", "#606160", "#DDD9CD"]}
          colorToImage={{
            "#000000": `${EletricAce}`,
            "#606160": `${EletricIvy}`,
            "#DDD9CD": `${EletricAce}`,
          }}
        />

        <BikeCard
          title="Electric Ivy"
          price="69,07"
          photo={EletricIvy}
          color={["#000000", "#606160", "#DDD9CD"]}
          colorToImage={{
            "#000000": `${EletricIvy}`,
            "#606160": `${EletricAce}`,
            "#DDD9CD": `${EletricIvy}`,
          }}
        />
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
