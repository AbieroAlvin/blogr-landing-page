import editorMobile from "../images/illustration-editor-mobile.svg";
import editorDesk from "../images/illustration-editor-desktop.svg";

const Details1 = () => {
  return (
    <div className="text-center mt-12 p-2">
      <h1 className="text-3xl font-primary text-[var(--Very-dark-blue)] font-bold">
        Designed for the future
      </h1>

      <div className="md:grid md:grid-cols-2 items-center">
        <div className="p-2 mt-4 md:col-start-2">
          <img src={editorMobile} alt="/" className="md:hidden" />
          <img src={editorDesk} alt="/" className="md:flex hidden" />
        </div>
        <div className="flex flex-col gap-12 mt-8 p-5 md:text-left md:col-start-1 md:row-start-1 md:pl-8  md:ml-8">
          <div>
            <h1 className="text-3xl text-[var(--Very-dark-blue)] font-primary font-bold">
              Introducing an extensible editor
            </h1>
            <p className="mt-4 leading-7 text-[var(--Very-dark-grayish-blue)]">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-[var(--Very-dark-blue)] font-primary font-bold">
              Robust content management
            </h1>
            <p className="mt-4 leading-7 text-[var(--Very-dark-grayish-blue)]">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              youâ€™re in full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details1;
