import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { mensShoesPage1 } from "../Data/shoes";
import {mens_kurta} from "../Data/Men/men_kurta"
import { lehngacholiPage2 } from "../Data/Saree/lenghaCholiPage2";
import {mensPantsPage1} from "../Data/pants/men_page1"
import Bestseller from "../customer/Components/Bestseller/Bestseller"

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      
      <div className="space-y-1 ">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} path={"mens_kurta"}/>
        <HomeProductSection data={sareePage1} section={"Saree"} path={"saree"}/>
        <Bestseller/>
        <HomeProductSection data={mensPantsPage1} section={"Men's Kurta"} path={"men_phants"}/>
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} path={"shoe"} />
        <HomeProductSection data={lehngacholiPage2} section={"Lengha Choli"} path={"lengha_choli"}/>
        <HomeProductSection data={dressPage1} section={"Tops"} path={"tops"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} path={"gouns"}/>
      </div>

      
    </div>
  );
};

export default Homepage;
