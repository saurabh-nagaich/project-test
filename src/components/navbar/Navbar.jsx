import React from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()

    const items = [
        {
            label: 'Subject',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Maths',
                    items: [
                        {
                            label: 'Elementary',
                            items: [
                                {
                                    label: "Grade 1",
                                    command: () => navigate(`math/grade_1`)
                                },
                                {
                                    label: "Grade 2",
                                    command: () => navigate(`math/grade_2`)

                                },
                                {
                                    label: "Grade 3",
                                    command: () => navigate(`math/grade_3`)

                                },
                                {
                                    label: "Grade 4",
                                    command: () => navigate(`math/grade_4`)

                                },
                                {
                                    label: "Grade 5",
                                    command: () => navigate(`math/grade_5`)

                                },
                                {
                                    label: "Grade 6",
                                    command: () => navigate(`math/grade_6`)

                                },
                            ]
                        },

                    ]
                },
                {
                    label: 'Science',
                    items: [
                        {
                            label: "Grade k to 5",
                            command: () => navigate(`science/grade_k_to_5`)
                        },
                        {
                            label: "Earth Science",
                            command: () => navigate(`science/earth_science`)
                        },
                        {
                            label: "Physical Science",
                            command: () => navigate(`science/physical_science`)
                        },
                        {
                            label: "Biology",
                            command: () => navigate(`science/biology`)
                        },
                        {
                            label: "Chemisty",
                            command: () => navigate(`science/chemisty`)
                        },
                        {
                            label: "Physics",
                            command: () => navigate(`science/physics`)
                        },
                    ]
                },
            ]
        },
    ];

    const start = <img alt="logo" src="https://w7.pngwing.com/pngs/748/144/png-transparent-person-holding-book-india-student-loan-education-study-free-miscellaneous-text-logo.png" height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;

    return (
        <div className='Navbar'>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    )
}

export default Navbar