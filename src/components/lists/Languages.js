import { List } from "../List";
import { ListWrapper } from "../ListWrapper";

const items = [
    'Ukrainian: native',
    'English: intermediate',
];

export const Languages = () => <ListWrapper name="Languages"><List items={items} /></ListWrapper>;