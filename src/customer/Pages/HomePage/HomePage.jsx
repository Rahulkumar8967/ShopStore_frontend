import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/mens_kurta';

const HomePage = () => {
    return (
      <div>
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomSectionCarousel data={mens_kurta} sectionName={"Men's kurta"} />
          <HomSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
          <HomSectionCarousel data={mens_kurta} sectionName={"Men's Saree"} />
          <HomSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
        </div>
      </div>
    );
}

export default HomePage