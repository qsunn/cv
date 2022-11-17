import { ListWrapper } from "../ListWrapper";

const items = [
    {
        name: 'Web Studio',
        stack: 'HTML, CSS, SASS, JS, Parcel',
        about: 'Website for a web studio with adaptive layout.',
        linkGit: 'https://github.com/qsunn/goit-hw/tree/main/goit-markup-hw-08',
        linkDeploy: 'https://qsunn.github.io/goit-hw/goit-markup-hw-08/'
    }, {
        name: 'HellEn',
        stack: 'HTML, CSS, npm-packages and SCSS',
        about: 'English courses website. Block development: advantages, problems and guarantee.',
        linkGit: 'https://github.com/Lluppiter/hot-chilli-developers-HellEn',
        linkDeploy: 'https://lluppiter.github.io/hot-chilli-developers-HellEn/'
    }, {
        name: 'Event Booster',
        stack: 'HTML, pure JS, npm-packages and SCSS, API',
        about: 'Event search application. App where you can search for closest events in any country of the world. I wrote code to connect app with backend and for the appearance of cards with events, their design & animation.',
        linkGit: 'https://github.com/AlonaStasyshyna/event-booster',
        linkDeploy: 'https://alonastasyshyna.github.io/event-booster'
    }, {
        name: 'Wallet',
        stack: 'React, Redux, npm-packages and SCSS, API',
        about: 'Virtual wallet application with month summary presented in charts. I wrote code for user authorization and transactions actions logic, I based a navigation routing and structure of app. Also created header and navigation blocks, participated in register/login forms and chart blocks development.',
        linkGit: 'https://github.com/ZVA-23/wallet',
        linkDeploy: 'https://zva-23.github.io/wallet/home'
    }
];

export const Projects = () => (
    <ListWrapper name="Projects" color="black">
        <ul className="grid gap-2">
            {items.map(item => (
                <li key={item.name}>
                    <a href={item.linkDeploy} target="_blank" rel="noreferrer noopener" className="font-bold">
                        {item.name}
                    </a>, <a href={item.linkGit} target="_blank" rel="noreferrer noopener" className="font-bold">
                        GitHub
                    </a> <span className="text-gray-500">[{item.stack}]</span> - <span>{item.about}</span>
                </li>
            ))}
        </ul>
    </ListWrapper>
)
