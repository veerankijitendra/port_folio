import React, { useContext } from "react";
import { MainContext } from "../contexts/Contexts";
import { Chrono } from "react-chrono";

const Education = () => {
  const { educationData } = useContext(MainContext);
  if (!educationData) return <></>;
  console.log(educationData.education);
  return (
    <div>
      <h2 className="text-4xl font-bold py-8 text-center">Education</h2>
      <div className="w-full h-fit">
        <Chrono
          hideControls={true}
          allowDynamicUpdate
          useReadMore={false}
          disableToolbar={true}
          cardHeight={150}
          mode={"VERTICAL_ALTERNATING"}
          items={educationData.education}
        >
          {/* {educationData.education.map((item) => (<div>{item.}</div>))} */}
        </Chrono>
      </div>
    </div>
  );
};

export default Education;
