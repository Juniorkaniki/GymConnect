import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section  className="h-[80vh] lg:h-[912px] " id="home">
      <div className="container mx-auto pt-32 ">
       {/* HERO SLIDER */}
       <HeroSlider />
      </div>
    </section >
  );

}

export default Hero;