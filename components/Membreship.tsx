 "use client";
 import{motion} from "framer-motion";
 import { fadeIn } from "@/lib/variants";
 import MembershipSlider from "./MembershipSlider";

const Membreship = () => {
  return (
    <section  className="py-8 xl:py-0 lg:h-[95vh] bg-[url('/assets/img/membership/bg.jpg')] bg-cover bg-center" id="prices">
      <div  className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20 ">
        <h2 className="h2 text-white text-center mb-8">Membership Plans</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section >
  );

}

export default Membreship;