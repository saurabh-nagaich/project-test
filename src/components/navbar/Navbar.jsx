import React from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

function Navbar() {
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
                                    label: "Grade 1"
                                },
                                {
                                    label: "Grade 2"
                                },
                                {
                                    label: "Grade 3"
                                },
                                {
                                    label: "Grade 4"
                                },
                                {
                                    label: "Grade 5"
                                },
                                {
                                    label: "Grade 6"
                                },
                            ]
                        },

                    ]
                },
                {
                    label: 'Science',
                    items: [
                        {
                            label: "Grade k to 5"
                        },
                        {
                            label: "Earth Science"
                        },
                        {
                            label: "Physical Science"
                        },
                        {
                            label: "Biology"
                        },
                        {
                            label: "Chemisty"
                        },
                        {
                            label: "Physics"
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