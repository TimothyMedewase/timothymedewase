import React from "react";

const Footer = () => {
  return (
    <div className=" px-12">
      <div className="mt-20 mb-2 text-xl ">Contact Me.</div>
      <div className="mt-5 mb-3 text-md ">
        <span className="text-lg">Reach out to me: </span>
        <a
          className="underline underline-offset-4"
          href="mailto:tmedewas@forum.montevallo.edu"
        >
          tmedewas@forum.montevallo.edu<span>↗</span>,
        </a>{" "}
        <a
          className="underline underline-offset-4"
          href="mailto:medewaset@gmail.com"
        >
          medewaset@gmail.com <span>↗</span>
        </a>
      </div>
      <div className=" mb-5 text-md">
        <a
          className="underline underline-offset-4"
          href="https://www.github.com/timothymedewase "
          target="_blank"
        >
          GitHub
          <span>↗</span>
        </a>{" "}
        <a
          className="underline underline-offset-4"
          href="https://www.linkedin.com/in/timothy-medewase"
          target="_blank"
        >
          Linkedin
          <span>↗</span>
        </a>{" "}
        <a
          className="underline underline-offset-4"
          href="https://x.com/timothymedewase"
          target="_blank"
        >
          X<span>↗</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
