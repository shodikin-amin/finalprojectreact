import React from "react";

const Footer = () => {
  return (
    <footer className="bg-hijau1 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-row gap-2 mt-5 ml-5 ">
        <img
          className="shrink-0 size-16 md:size-24 xl:size-32 "
          src="./src/assets/img/logo/asqolanlogo.png"
          alt="Logo SMP ISLAM ASQOLAN"
        />
        <div className=" text-sm md:text-lg lg:text-2xl ">
          <h2 className="font-bold">SMP ISLAM ASQOLAN</h2>
          <h2 className="font-bold">BOARDING SCHOOL</h2>
          <p>Komplek Sekumpul Hill, Jl.P. Suryanata Bukit Pinang, Samarinda</p>
        </div>
      </div>
      <div className="m-5">
        <iframe className="lg:w-[40vw] h-[20vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.696769555475!2d117.11397447372273!3d-0.44724043528205276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df679399c8fc8b5%3A0x3f6852183a8af335!2sSMP%20Islam%20Asqolan!5e0!3m2!1sid!2sid!4v1711117876716!5m2!1sid!2sid"></iframe>{" "}
      </div>
    </footer>
  );
};

export default Footer;
