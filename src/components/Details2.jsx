import iphones from "../images/illustration-phones.svg";

const Details2 = () => {
  return (
    <div className="body-gradient py-20 mt-48 md:mt-16 rounded-tr-[5rem] rounded-bl-[5rem] p-8 relative md:grid md:grid-cols-2 md:h-[52%] md:mb-24 ">
      <div className="absolute md:relative top-[-14rem]  md:top-[-12rem] mt-12 md:mt-12 p-3 ">
        <img src={iphones} alt="/" />
      </div>
      <div className="py-12 md:py-6 mt-14 md:mt-6 text-center md:text-left flex flex-col gap-3 text-[var(--Grayish-blue)] md:px-6">
        <h1 className="text-3xl font-bold font-primary text-white">
          State of the Art Infrastructure
        </h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};

export default Details2;
