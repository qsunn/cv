import { ListWrapper } from "../ListWrapper"

const items = [
    {
        name: 'Trainee Frontend Developer in Lvivity',
        date: '03.2022-12.2022',
        responsibilities: []
    },
    {
        name: 'Freelance Graphic Designer',
        date: '07.2017-03.2022',
        responsibilities: [
            'Prepare and produce proposals and presentations for clients',
            'Design and develop custom logos, media materials and printed design for clients',
            'Interpret brand and marketing needs from client briefings and meetings, using clarifying questions to determine exact requirements, leading to fewer revision requests',
            'Understanding the needs of clients'
        ]
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
