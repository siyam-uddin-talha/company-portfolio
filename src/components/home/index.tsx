import Banner from "./Banner";
import AboutShow from "./AboutShow";
import AboutUs from "./AboutUs";
import Offers from "./Offers";
import ClientCount from "./ClientCount";
import CaseStudies from "./CaseStudies";
import WhyChoseUs from "./WhyChoseUs";
import Testimonial from "./Testimonial";
import CompanyReviewVideo from "./CompanyReviewVideo";
import UseCountryService from "../hooks/UseCountryService";
import UseItThumb from "../hooks/UseItThumb";
import Footer from "../hooks/Footer";
import UseTrustedCompnays from "../hooks/UseTrustedCompnays";
import Random3Blogs from "../blog/Random3Blogs";

const Index = () => {
  return (
    <>
      <Banner />
      <AboutShow />
      <AboutUs />
      <Offers />
      <UseTrustedCompnays />
      <ClientCount />
      <CaseStudies />
      <WhyChoseUs />
      <Testimonial />
      <Random3Blogs title="Read our blogs" />
      <CompanyReviewVideo />
      <UseCountryService />
      <UseItThumb />
      <Footer />
    </>
  );
};

export default Index;
