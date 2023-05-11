<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

const Section = (props) => {
  return (
    <div className={`max-w-screen-lg ${props.spacing} mx-auto px-3 pt-6`}>
      {(props.title || props.description) && (
        <div className="mt-5 text-center">
          {props.title && (
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {/* {props.children} */}
    </div>
  );
};

export default Section;
=======
import React from "react";

const Section = (props) => {
  return (
    <div className={`max-w-screen-lg ${props.spacing} mx-auto px-3 pt-6`}>
      {(props.title || props.description) && (
        <div className="mt-5 text-center">
          {props.title && (
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {/* {props.children} */}
    </div>
  );
};

export default Section;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
=======
import React from "react";

const Section = (props) => {
  return (
    <div className={`max-w-screen-lg ${props.spacing} mx-auto px-3 pt-6`}>
      {(props.title || props.description) && (
        <div className="mt-5 text-center">
          {props.title && (
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {/* {props.children} */}
    </div>
  );
};

export default Section;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
