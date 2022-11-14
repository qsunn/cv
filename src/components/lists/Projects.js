import { ListWrapper } from "../ListWrapper";

const items = [
    {
        name: 'Web Studio',
        stack: 'HTML, CSS, SASS, JS, Parcel',
        about: 'Website for a web studio',
        linkGit: 'https://github.com/AlonaStasyshyna/event-booster',
        linkDeploy: 'https://alonastasyshyna.github.io/event-booster'
    }, {
        name: 'HellEn',
        stack: 'HTML, CSS, npm-packages and SCSS',
        about: 'English courses website',
        linkGit: 'https://github.com/AlonaStasyshyna/event-booster',
        linkDeploy: 'https://alonastasyshyna.github.io/event-booster'
    }, {
        name: 'Event Booster',
        stack: 'HTML, pure JS, npm-packages and SCSS, API',
        about: 'Event search application',
        linkGit: 'https://github.com/AlonaStasyshyna/event-booster',
        linkDeploy: 'https://alonastasyshyna.github.io/event-booster'
    },
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
