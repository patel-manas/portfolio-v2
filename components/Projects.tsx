import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto 
    justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, idx) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen"
            >
              <img
                src={
                  "https://cdn.dribbble.com/users/136707/screenshots/4755781/days.png?compress=1&resize=800x600&vertical=top"
                }
                alt={"case study image"}
                className="w-[300px] h-[300px] object-cover border rounded-l"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {idx + 1} of {projects.length}:
                  </span>{" "}
                  Netflix Clone
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  facere iste commodi expedita laborum nostrum eum repellendus
                  adipisci illo voluptates sequi consequuntur provident quaerat
                  mollitia rem, animi porro numquam qui. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laboriosam in qui quidem
                  ratione nostrum aperiam doloribus exercitationem. Ratione quos
                  repellendus earum nam id quod perferendis atque, voluptas
                  eaque mollitia corporis.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
