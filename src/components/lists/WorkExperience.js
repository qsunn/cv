import { ListWrapper } from "../ListWrapper"

const items = [
    {
        name: 'Frontend Developer in Zhorben Inc.',
        date: '01.2023-till now',
        responsibilities: []
    },
    {
        name: 'Frontend Developer in Lvivity',
        date: '03.2022-12.2022',
        responsibilities: []
    },
    {
        name: 'Freelance Graphic Designer',
        date: '07.2017-03.2022',
        responsibilities: []
    },
];

export const WorkExperience = () => (
    <ListWrapper name="Work Experience" color="black">
        <ul className="grid gap-2">
            {items.map(item => (
                <li key={item}>
                    <p className="font-bold">{item.name} ({item.date})</p>
                    <ul className="grid gap-1">
                        {item.responsibilities.map(item => <li key={item}>- {item}</li>)}
                    </ul>
                </li>
            ))}
        </ul>
    </ListWrapper>
)
