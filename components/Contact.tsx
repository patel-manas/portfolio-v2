import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // console.log("formSData", formData);
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center px-10 justify-evenly items-center
    md:text-left md:flex-row max-w-7xl mx-auto snap-center  "
    >
      <h4 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h4>
      <div className="flex flex-col space-y-10 px-6">
        <h4 className="text-4xl font-semibold text-center">
          You can reach me with below details{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(+91)-9437766389</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Banglore, India</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">manas22patel@gmail.com</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            placeholder="Name"
            className="contact-input"
            type="text"
            {...register("name")}
          />
          <input
            placeholder="Email"
            className="contact-input"
            type="email"
            {...register("email")}
          />
        </div>

        <input
          placeholder="Subject"
          className="contact-input"
          type="text"
          {...register("subject")}
        />
        <textarea
          placeholder="Messege fo me."
          className="contact-input"
          {...register("message")}
        />
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
