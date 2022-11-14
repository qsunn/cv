import { ListWrapper } from "../ListWrapper";

const items = [
    {
        name: 'Fullstack Developer',
        by: 'GoIT',
        year: '2022'
    }, {
        name: 'Advanced Frontend',
        by: 'Cursor Education',
        year: '2022'
    }, {
        name: 'Basic Frontend',
        by: 'Cursor Education',
        year: '2021'
    },
];

export const Courses = () => (
    <ListWrapper name="Courses" color="black">
        <ul className="grid gap-2">
            {
                items.map(item => <li key={item.name}>
                    <b>{item.name}</b> by {item.by} ({item.year})
                </li>)
            }
        </ul>
    </ListWrapper>
)
