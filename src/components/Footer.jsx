const Footer = () => {
  return (
    <div className="bg-[var(--Very-darkblack-blue)] text-[var(--Grayish-blue)] rounded-tr-[5rem] text-center p-8 mt-8 flex flex-col md:flex-row w-full justify-center gap-24">
      <div className="text-3xl text-white font-bold mb-6">Blogr</div>
      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold font-primary">Product</h1>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold font-primary">Company</h1>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold font-primary">Product</h1>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Integrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
