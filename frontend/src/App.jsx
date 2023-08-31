import { useEffect, useState } from "react";

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    // fetch data from api
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const count = JSON.parse(data.body).visitor_count;
      setVisitorCount(count);
    };
    fetchData().then(() => setIsFetching(false));
  }, []);

  return (
    <main className="font-firasans hyphens-manual">
      <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 print:bg-white bg-gray-100">
        <header className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary pb-px">
              JOHN KEVIN LOSITO
            </h1>
            <ul className="flex flex-wrap gap-3 mt-1.5">
              <li className="leading-normal text-gray-700 text-sm">
                <a
                  href="https://johnkevinlosito.com"
                  className="align-middle"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    className="w-5 h-5 mr-1 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  johnkevinlosito.com
                </a>
              </li>
              <li className="leading-normal text-gray-700 text-sm">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  viewBox="0 0 128 128"
                >
                  <g fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>

                <a
                  href="https://github.com/johnkevinlosito"
                  className="align-middle"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  github.com/johnkevinlosito
                </a>
              </li>
              <li className="leading-normal text-gray-700 text-sm">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="currentColor"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>

                <a
                  href="https://linkedin.com/in/johnkevinlosito"
                  className="align-middle"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  linkedin.com/in/johnkevinlosito
                </a>
              </li>
            </ul>
          </div>
          <div className="print:hidden flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
            </svg>

            {!isFetching ? (
              <span className="text-sm" id="visit-count">
                {visitorCount} views
              </span>
            ) : (
              ""
            )}
          </div>
        </header>
        <div className="md:columns-2 print:columns-2 gap-x-[2.1875rem] md:h-letter-col print:h-letter-col col-fill-auto">
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                SUMMARY
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <p className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Highly motivated and skilled Frontend Developer. Bringing a
                  strong background in frontend and web development, and a
                  passion for cloud technologies, I am eager to leverage my
                  skills and experience to design, deploy, and manage scalable
                  cloud solutions.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                EXPERIENCE
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                    ConnectOS
                  </h3>
                  <p className="leading-normal text-sm text-gray-600">
                    August 2022 - Present | Frontend Engineer
                  </p>
                </header>
                <ul className="list-inside list-disc">
                  <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                    Collaborate closely with the backend developer to build
                    dynamic web and mobile apps using ReactJS, NextJS, Flutter,
                    Tailwind, and VueJS, and other technologies. Dedicated to
                    staying updated on emerging technologies for optimal,
                    high-performance solutions.
                  </li>
                </ul>
              </section>
            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  xDNA Digital Agency Inc.
                </h3>
                <p className="leading-normal text-sm text-gray-600">
                  June 2021 - August 2022 | Frontend Developer
                </p>
              </header>
              <ul className="list-inside list-disc">
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Led web application development, applying industry best
                  practices and cutting-edge technologies.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Established a streamlined CI/CD workflow with Gitlab, boosting
                  efficiency and team collaboration.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Pioneered innovative solutions through client engagement,
                  driving customer satisfaction and business growth.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Ensured optimal database performance and scalability while
                  collaborating with cross-functional teams to deliver
                  high-quality results within project timelines.
                </li>
              </ul>
            </section>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  Groworx Philippines
                </h3>
                <p className="leading-normal text-sm text-gray-600">
                  August 2019 - June 2021 | Developer Analyst
                </p>
              </header>
              <ul className="list-inside list-disc">
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Provided exceptional Level 2 application support, resolving
                  end-user issues promptly through effective problem-solving and
                  analytical skills.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Conducted thorough troubleshooting, identifying root causes
                  and implementing efficient solutions for timely resolution.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Improved testing efficiency and accuracy by leveraging
                  TestCafe for automation testing.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Collaborated seamlessly with cross-functional Level 3 team
                  (SRE, QA, Scrum master, etc.) for effective incident
                  management and issue resolution, fostering a collaborative
                  work environment.
                </li>
              </ul>
            </section>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  SwitchConnect
                </h3>
                <p className="leading-normal text-sm text-gray-600">
                  October 2018 - July 2019 | Full Stack Developer
                </p>
              </header>
              <ul className="list-inside list-disc">
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Developed and maintained the company's financial platform,
                  ensuring its functionality, user-friendliness, and
                  performance.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Integrated proprietary and third-party APIs (Merchant Warrior,
                  Stripe) for seamless payment processing and enhanced
                  functionality.
                </li>
                <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Optimized the website's performance and user experience
                  through proactive identification of opportunities and API
                  integrations.
                </li>
              </ul>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                EDUCATION
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                    Trimex Colleges
                  </h3>
                  <p className="leading-normal text-sm text-gray-600">
                    2015 - 2018 | BS Computer Science
                  </p>
                </header>
                <ul className="list-inside list-disc">
                  <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                    Best in Thesis
                  </li>
                  <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                    Programmer of the Year
                  </li>
                  <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                    Academic Excellence Award
                  </li>
                  <li className="mt-2.1 text-sm text-gray-700 leading-normal">
                    President - ACTS(Association of Computer Technology
                    Students) - A.Y. 2017-2018
                  </li>
                </ul>
              </section>
            </div>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                PROJECTS
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://resume.johnkevinlosito.com/"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      CloudResumeChallenge
                      <span className="inline-block text-gray-500 print:hidden font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                </header>
                <p className="mt-2.1 text-sm text-gray-700 leading-normal">
                  This project showcases the deployment of a serverless static
                  website, a visitor counter API, and continuous
                  integration/continuous deployment (CI/CD) using AWS services,
                  infrastructure as code, and GitHub Actions.
                </p>
              </section>
            </div>
            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  <a
                    href="https://pokedex.johnkevinlosito.com/"
                    className="group"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Pokedex
                    <span className="inline-block text-gray-500 print:hidden font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </h3>
              </header>
              <p className="mt-2.1 text-sm text-gray-700 leading-normal">
                This is a personal project I made when learning React JS. It
                fetches its data from https://pokeapi.co/ which is a free and
                open to use consumption-only API.
              </p>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                CERTIFICATIONS
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://www.credly.com/badges/b54bb0cc-0020-40ed-b287-5a1a64888360/public_url"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      AWS Certified Solutions Architect - Associate
                      <span className="inline-block text-gray-500 print:hidden font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-sm text-gray-600">
                    March 2021 - March 2024
                  </p>
                </header>
              </section>
            </div>
            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  <a
                    href="https://www.credly.com/badges/0db3a24e-b5f2-4101-ae32-194e3ca7647c/public_url"
                    className="group"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AWS Certified SysOps Administrator - Associate
                    <span className="inline-block text-gray-500 print:hidden font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </h3>
                <p className="leading-normal text-sm text-gray-600">
                  June 2020 - June 2023
                </p>
              </header>
            </section>
            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  <a
                    href="https://www.credly.com/badges/24d19465-53d6-4c45-8a40-5ff8fa5352bc/public_url"
                    className="group"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AWS Certified Cloud Practitioner
                    <span className="inline-block text-gray-500 print:hidden font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </h3>
                <p className="leading-normal text-sm text-gray-600">
                  February 2020 - March 2024
                </p>
              </header>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                SKILLS
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                    Languages & Framework
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-sm leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      HTML
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      Javascript
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      Tailwind
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      ReactJS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      NextJS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      Flutter
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      PHP
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      Laravel
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                      MySQL
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  Infrastructure and Tools
                </h3>
              </header>
              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-sm leading-relaxed -mr-1.6 -mb-1.6">
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Amazon Web Services (AWS)
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Docker
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Git
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Gitlab
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Github
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                  Soft Skills
                </h3>
              </header>
              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-sm leading-relaxed -mr-1.6 -mb-1.6">
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Team player
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Strong problem solver
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-sm text-gray-700 bg-gray-200">
                    Good time management
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
