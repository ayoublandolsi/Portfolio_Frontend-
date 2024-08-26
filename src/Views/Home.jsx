import CardImage from "../Components/CardImage/CardImage";
import Footer from "../Components/Footer";
import ServiceProviders from "../Components/Services/ServiceProviders";
import Testemonials from "../Components/testemonials/Testmonials";

export default function Home() {
  return (
    <>

    <div className=" pt-12 px-8 sm:px-6"><CardImage/></div>

        <div className="mx-4 mt-12">
        <ServiceProviders />
      </div>
      <div className="p-12 ">
      <Testemonials/></div>

    </>
  );
}



