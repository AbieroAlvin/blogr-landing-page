import laptopDesk from "../images/illustration-laptop-desktop.svg";
import laptopMobile from "../images/illustration-laptop-mobile.svg";

const Details3 = () => {
  return (
    <div className="text-center my-12 md:grid md:grid-cols-[1fr_1fr] md:text-left md:pr-12 md:mt-16 p-2">
      <div className="md:translate-x-[-12rem]">
        <img src={laptopDesk} alt="/" className="hidden md:flex" />
        <img src={laptopMobile} alt="/" className="md:hidden flex" />
      </div>
      <div className="flex flex-col gap-12 mt-8 md:pr-8 py-4 px-3">
        <div className="">
          <h1 className="text-3xl text-[var(--Very-dark-blue)] font-primary font-bold">
            Free, open, simple
          </h1>
          <p className="mt-4 leading-7 text-[var(--Very-dark-grayish-blue)]">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h1 className="text-3xl text-[var(--Very-dark-blue)] font-primary font-bold">
            Powerful tooling
          </h1>
          <p className="mt-4 leading-7 text-[var(--Very-dark-grayish-blue)]">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details3;
