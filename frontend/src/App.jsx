import { useEffect, useState } from "react";

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
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
    fetchData();
  }, []);

  return (
    <main className="font-firasans hyphens-manual">
      <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 print:bg-white bg-gray-100">
        <header className="flex justify-between mb-8 md:mb-11">
          <h1 className="text-2xl font-bold text-primary pb-px">
            JOHN KEVIN LOSITO
          </h1>
          <div className="print:hidden flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
            </svg>

            <span className="text-sm">{visitorCount} views</span>
          </div>
        </header>
        <div className="md:columns-2 print:columns-2 gap-x-[2.1875rem] md:h-letter-col print:h-letter-col col-fill-auto">
          <section className="mt-8 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-4 font-bold tracking-widest text-sm2 text-primary">
                CONTACT
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li className="mt-1.5 leading-normal text-gray-700 text-sm">
                    <a
                      href="https://johnkevinlosito.com"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      johnkevinlosito.com
                      <span className="inline-block text-gray-500 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li className="mt-1.5 leading-normal text-gray-700 text-sm">
                    <a
                      href="https://twitter.com/johnkevinlosito"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      twitter.com/johnkevinlosito
                      <span className="inline-block text-gray-500 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li className="mt-1.5 leading-normal text-gray-700 text-sm">
                    <a
                      href="https://linkedin.com/in/johnkevinlosito"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      linkedin.com/in/johnkevinlosito
                      <span className="inline-block text-gray-500 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
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
                <p className="mt-2.1 text-sm text-gray-700 leading-normal">
                  Collaborate closely with the backend developer to build
                  dynamic web and mobile apps using ReactJS, NextJS, Flutter,
                  Tailwind, and VueJS, and other technologies. Dedicated to
                  staying updated on emerging technologies for optimal,
                  high-performance solutions.
                </p>
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
                      href="https://pokedex.johnkevinlosito.com/"
                      className="group"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Pokedex
                      <span className="inline-block text-gray-500 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
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
            </div>
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
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      HTML
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      Javascript
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      Tailwind
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      ReactJS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      NextJS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      PHP
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                      Laravel
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
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
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Amazon Web Services (AWS)
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Docker
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Git
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Gitlab
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
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
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Team player
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
                    Strong problem solver
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-700 print:border-inset bg-gray-200">
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
