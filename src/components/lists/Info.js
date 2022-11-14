import { List } from "../List"
import { ListWrapper } from "../ListWrapper";

const items = [
    'Lviv, Ukraine',
    '096 808 11 28',
    'qsunnv@gmail.com',
    'LinkedIn',
    'GitHub',
];

export const Info = () => <ListWrapper name="Info"><List items={items} /></ListWrapper>;