import { List } from "../List";
import { ListWrapper } from "../ListWrapper";

const items = [
    'Teamwork',
    'Time management',
    'Creative thinking'
];

export const SoftSkills = () => <ListWrapper name="Soft Skills"><List items={items} /></ListWrapper>;