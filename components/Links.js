<<<<<<< HEAD
import React from "react";
import Link from "next/link";

const Links = (props) => {
  return (
    <li
      className={`text-lg md:text-xl mr-10 my-2 font-semibold ${props.active} transform transition hover:scale-110 duration-300 ease-in-out`}
    >
      <Link
        href={props.dir}
        className={`inline-block py-2 px-4 font-bold no-underline`}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default Links;
=======
import React from "react";
import Link from "next/link";

const Links = (props) => {
  return (
    <li
      className={`text-lg md:text-xl mr-10 my-2 font-semibold ${props.active} transform transition hover:scale-110 duration-300 ease-in-out`}
    >
      <Link
        href={props.dir}
        className={`inline-block py-2 px-4 font-bold no-underline`}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default Links;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
