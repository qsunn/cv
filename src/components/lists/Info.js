import { List } from "../List"
import { ListWrapper } from "../ListWrapper";

const createLink = href => {
    return <a href={href === 'GitHub' ? 'https://github.com/qsunn' : 'https://www.linkedin.com/in/boychyshyn/'} target="_blank" rel="noreferrer noopener">{href}</a>
}

const items = [
    'Lviv, Ukraine',
    '096 808 11 28',
    'qsunnv@gmail.com',
    createLink('LinkedIn'),
    createLink('GitHub'),
];

export const Info = () => <ListWrapper name="Info"><List items={items} /></ListWrapper>;