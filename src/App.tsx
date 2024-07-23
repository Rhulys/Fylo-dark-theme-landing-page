import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [messageType, setMessageType] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setMessage("registration completed successfully");
      setMessageType("success");
    } else {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
    }
  };

  return (
    <div className="bg-Dark_Blue-2 py-10 px-5 flex flex-col gap-10">
      <head className="flex flex-row justify-between">
        <img src="./logo.svg" alt="Fylo" className="w-1/4 lg:w-40" />
        <nav>
          <ul className="flex flex-row gap-5 text-white font-Raleway">
            <li>
              <a href="#" className="hover:font-bold hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold hover:underline">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </head>

      <body className="px-5 items-center flex flex-col gap-32 text-center font-OpenSans text-white">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <img
            src="illustration-intro.png"
            alt="Illustratrion"
            className="relative z-50"
          />
          <h1 className="text-3xl font-semibold">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-xl leading-8">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-cyan-500 p-5 rounded-full font-bold text-xl hover:bg-cyan-200 duration-200">
            Get Started
          </button>
        </div>

        <div className="flex flex-col gap-20 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center">
          <div className="services lg:w-1/3">
            <img
              src="./icon-access-anywhere.svg"
              alt="Access anywhere"
              className="w-16"
            />
            <h2 className="font-bold text-xl">Access your files, anywhere</h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your accont means your files follow you everywhere
            </p>
          </div>

          <div className="services lg:w-1/3">
            <img src="./icon-security.svg" alt="security" className="w-16" />
            <h2 className="font-bold text-xl">Security you can trust</h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          <div className="services lg:w-1/3">
            <img
              src="./icon-collaboration.svg"
              alt="collaboration"
              className="w-16"
            />
            <h2 className="font-bold text-xl">Real-time collaboration</h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div className="services lg:w-1/3">
            <img src="./icon-any-file.svg" alt="any files" className="w-16" />
            <h2 className="font-bold text-xl">Store any tyipe of file</h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 text-left lg:flex-row lg:items-center">
          <img
            src="./illustration-stay-productive.png"
            alt="illustration-stay-productive.png"
          />
          <div className="flex flex-col gap-5  lg:flex-col md">
            <h2 className="text-xl font-bold">
              Stay productive, wherever you are
            </h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="flex flex-row gap-3 items-center w-max pb-2 border-b border-Cyan hover:border-white group">
              <a
                href="#"
                className="text-Cyan whitespace-nowrap group-hover:text-white"
              >
                {" "}
                See how Fylo works
              </a>
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="text-Cyan group-hover:text-white"
              >
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="currentColor" fill-rule="evenodd">
                  <g transform="translate(2 2)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <use fill="currentColor" xlinkHref="#b" />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="#000"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <img src="./bg-quotes.png" alt="quotes" className="max-w-8 lg:max-w-40" />
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="depositions">
              <p className="text-left text-sm">
                Fylo has improved our team productive by an order of magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              <div className="flex flex-row gap-2">
                <img
                  src="./profile-1.jpg"
                  alt="profile"
                  className="depositions_img"
                />
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-sm">Satish Patel</h3>
                  <p className="text-xs">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>

            <div className="depositions">
              <p className="text-left text-sm">
                Fylo has improved our team productive by an order of magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              <div className="flex flex-row gap-2">
                <img
                  src="./profile-2.jpg"
                  alt="profile"
                  className="depositions_img"
                />
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-sm">Bruce McKenzie</h3>
                  <p className="text-xs">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>

            <div className="depositions">
              <p className="text-left text-sm">
                Fylo has improved our team productive by an order of magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              <div className="flex flex-row gap-2">
                <img
                  src="./profile-3.jpg"
                  alt="profile"
                  className="depositions_img"
                />
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-sm">Iva Boyd</h3>
                  <p className="text-xs">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-Dark_Blue-4 rounded-md p-8 text-center flex flex-col gap-4 lg:max-w-xl lg:w-full">
          <h2 className="font-bold text-xl">Get early access today</h2>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex flex-col lg:flex-row gap-2">
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleChange}
              className="rounded-full h-10 pl-5 text-xs text-black lg:w-2/3"
            />
            <button
              onClick={validateEmail}
              className="rounded-full h-10 hover:bg-cyan-200 bg-Cyan font-bold text-sm lg:w-1/3"
            >
              Get Started For Free
            </button>
          </div>
          <p
            className={`mt-2 ${
              messageType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        </div>

        <footer className="flex flex-col gap-12">
          <img src="./logo.svg" alt="logo" className="max-w-48" />

          <div className="flex flex-col gap-12 text-left lg:flex-row">
            <div className="flex flex-col gap-5 lg:flex-row lg:w-2/5">
              <div className="flex flex-row gap-4 lg:w-1/2">
                <img
                  src="icon-location.svg"
                  alt="icon location"
                  className="max-h-5"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex flex-col gap-5 lg:w-1/2">
                <div className="flex flex-row gap-4">
                  <img
                    src="icon-phone.svg"
                    alt="icon phone"
                    className="max-h-5"
                  />
                  <p>+1-543-123-4567</p>
                </div>
                <div className="flex flex-row gap-4">
                  <img
                    src="icon-email.svg"
                    alt="icon email"
                    className="max-h-5"
                  />
                  <p>example@fylo.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:gap-2 lg:w-1/5">
              <a href="#">About Us</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>

            <div className="flex flex-col gap-5 lg:gap-2 lg:w-1/5">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>

            <div className="flex flex-row gap-4 justify-center items-center lg:w-1/5">
              <a href="#" className="border-2 p-2 rounded-full group">
                <svg
                  viewBox="-5 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 group-hover:text-Cyan"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="currentColor"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-385.000000, -7399.000000)"
                      fill="currentColor"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                          id="facebook-[#176]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#" className="border-2 p-2 rounded-full group">
                <svg
                  viewBox="0 -2 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 group-hover:text-Cyan"
                >
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-60.000000, -7521.000000)"
                      fill="currentColor"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#" className="border-2 p-2 rounded-full group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 group-hover:text-Cyan"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
