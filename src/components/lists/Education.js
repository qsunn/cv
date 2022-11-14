import { ListWrapper } from "../ListWrapper";

const items = [
    {
        name: 'B. degree in Publishing and Printing (2014-2018)',
        university: 'Lviv Polytechnic National University',
        institute: 'Institute of Computer Science and Information Technologies'
    }, {
        name: 'B. degree in Management (2013-2017)',
        university: 'Lviv Institute of Management',
        institute: 'Institute of Management and Marketing'
    }
];

export const Education = () => (
    <ListWrapper name="Education" color="black">
        <ul className="grid gap-2">
            {items.map(item => (
                <li key={item.name}>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.university}</p>
                    <p>{item.institute}</p>
                </li>
            ))}
        </ul>
    </ListWrapper>
)
