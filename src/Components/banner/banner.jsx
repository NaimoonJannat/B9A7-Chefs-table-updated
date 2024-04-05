
const Banner = () => {
    return (
        <div>
            <div className="hero lg:h-[500px] rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/QHs89j9/banner-Chef.png)'}}>
  <div className="hero-overlay rounded-3xl bg-opacity-20 text-center"></div>
  <div className="hero-content text-center text-neutral-content lg:p-20">
    <div className="lg:w-2/3">
      <h1 className="lg:mb-5 text-3xl lg:text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-white"> Welcome to a culinary journey like no other!  Whether you're a beginner eager to learn the basics or a seasoned chef looking to refine your techniques, our expert instructors will guide you every step of the way.</p>
      <div className="flex flex-row gap-4 justify-center">
      <button className="btn rounded-full bg-[#0BE58A] text-black px-6">Explore Now</button>
      <button className="btn rounded-full text-white btn-outline px-6 outline-white">Get Started</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;