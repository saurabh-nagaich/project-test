import { useParams } from "react-router-dom"
import HeroSection from "../home/components/HeroSection"
import "./CategoryPage.scss"
import React from 'react'
import { CATEGORY_SLUG, CATEGORY_VIEW_SLUG } from "./../../config/routes/routes"
import { Accordion, AccordionTab } from 'primereact/accordion';
import CategoryHeroContainer from "./components/CategoryHeroContainer"
import { subCategoryData } from "./category.config"



function CategoryPage() {
    const { [CATEGORY_SLUG]: subCategoryId, [CATEGORY_VIEW_SLUG]: categorySlug } = useParams()
    return (
        <div className="CategoryPage">
            <CategoryHeroContainer data={subCategoryData[categorySlug][subCategoryId] ?? {}} title={subCategoryId.toUpperCase().replace("_", " ")} />
            <div className="Content py-5">
                <p className="text-center ">Content will reflect soon...</p>
            </div>
            <div className="ContentArea px-8">
                <Accordion activeIndex={0}>
                    <AccordionTab header="Capter I">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Capter II">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Capter III">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}

export default CategoryPage