import { useParams } from "react-router-dom"
import HeroSection from "../home/components/HeroSection"
import "./CategoryPage.scss"
import React from 'react'
import { CATEGORY_SLUG, CATEGORY_VIEW_SLUG } from "./../../config/routes/routes"

function CategoryPage() {
    const { [CATEGORY_SLUG]: subCategoryId, [CATEGORY_VIEW_SLUG]: categorySlug } = useParams()
    return (
        <div className="CategoryPage">
            <HeroSection title={subCategoryId.toUpperCase().replace("_", " ")} />
        </div>
    )
}

export default CategoryPage