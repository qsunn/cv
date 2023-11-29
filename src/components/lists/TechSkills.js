import { List } from "../List"
import { ListWrapper } from "../ListWrapper";

const items = [
    'HTML/CSS/SASS',
    'Tailwind',
    'Material UI',
    'GIT',
    'Webpack',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Next.js',
    'REST API'
]

export const TechSkills = () => <ListWrapper name="Tech Skills"><List items={items} /></ListWrapper>;