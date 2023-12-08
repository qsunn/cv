import { ListWrapper } from "../ListWrapper";

const items = [
  {
    name: "Event Booster",
    stack: "HTML, pure JS, npm-packages and SCSS, API",
    about:
      "Event search application. App where you can search for closest events in any country of the world. I wrote code to connect app with backend and for the appearance of cards with events, their design & animation.",
    iDid: ["Developed responsive landing pages", "Developed animations"],
    linkDeploy: "https://alonastasyshyna.github.io/event-booster",
  },
  {
    name: "Wallet",
    stack: "React, Redux Toolkit, npm-packages and SCSS, API",
    about:
      "Virtual wallet application with month summary presented in charts. I wrote code for user authorization and transactions actions logic, I based a navigation routing and structure of app. Also created header and navigation blocks, participated in register/login forms and chart blocks development.",
    iDid: [
      "Developed responsive and user-friendly UI",
      "Developed a web application to interact with Backend (TypeScript, React, Redux Toolkit)",
      "Integrated a third-party API",
      "Integrated graphs (Chart.js)",
    ],
    linkDeploy: "https://zva-23.github.io/wallet/home",
  },
  {
    name: "HeavyTech",
    stack: "Next.js, React, Tailwind, REST API",
    about:
      "HeavyTech is an MRO operator offering aircraft and component maintenance.",
    iDid: [
      "Developed the website with responsive and interactive UI",
      "Developed own design system",
    ],
    linkDeploy: "https://www.heavytechmro.com/",
  },
  {
    name: "Genteel Jet",
    stack: "Next.js, React, Tailwind, REST API",
    about:
      "Genteel Jet provides comprehensive aircraft care, including routine inspections, repairs, avionics installation and more.",
    iDid: [
      "Developed the website with responsive and interactive UI",
      "Developed own design system",
    ],
    linkDeploy: "https://genteeljet.com/",
  },
  {
    name: "Yurico",
    stack: "Next.js, React, Tailwind, REST API",
    about: "Global Multi-Service Aviation Holding",
    iDid: [
      "Developed the website with responsive and interactive UI",
      "Developed own design system",
    ],
    linkDeploy: "https://yurico.cy/",
  },
  {
    name: "GenZero",
    stack: "Next.js, React, Tailwind, REST API",
    about:
      "GenZero is a coalition-based climate action campaign and community to address the environmental challenges of our time through collective action.",
    iDid: [
      "Developed a web application to interact with Backend",
      "Developed the website with responsive and interactive UI",
      "Developed own design system",
    ],
    linkDeploy: "https://app.genzeroaction.com",
  },
];

export const Projects = () => (
  <ListWrapper name="Projects" color="black">
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.linkDeploy}
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold"
          >
            {item.name}
          </a>{" "}
          <span className="text-gray-500">[{item.stack}]</span> -{" "}
          <span>{item.about}</span>
          <div className="grid grid-flow-row gap-1 mt-1">
            {item.iDid.map((t) => (
              <p className="text-sm">- {t}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </ListWrapper>
);
