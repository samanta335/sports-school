import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../popularInstructors/PopularInstructor";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div data-theme="dark">
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <ExtraSection></ExtraSection>
      <div className="text-center">
        <Link className="btn btn-warning" to="/error">
          Want to Know More?
        </Link>
      </div>
    </div>
  );
};

export default Home;
