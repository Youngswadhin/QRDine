import {  AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
export default function Footer() {
  return (
    <div className="bg-zomato-whiteGray/30 mt-8 px-4 py-8 md:p-8 md:divide-y md:divide-gray-300">
      <div className="flex justify-between items-center max-width pb-4">
        <h1 className="text-2xl md:text-4xl font-black">QRDine</h1>
        <div className="flex space-x-2 items-center">
          <a
            href="https://www.linkedin.com/in/swadhin-kumar-muduli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-2xl cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-2xl cursor-pointer" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterSquare className="text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="max-width pt-4 hidden md:block">
        <p className="text-sm font-normal text-center">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2022 © Swadhin. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
