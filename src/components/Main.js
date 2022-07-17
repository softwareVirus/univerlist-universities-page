import React,{Fragment} from "react";
import Footer from "./Footer";
import FirstMain from "./main/FirstMain";
import SectionCart from "./main/SectionCarts/SectionCart";
import SecondSectionCart from "./SecondSectionCart";
import SliderComponent from "./SliderComponent";
import { data } from "../CarouselData";
import { useTheme, useMediaQuery } from '@mui/material'
import SectionCartMobile from "./main/SectionCarts/SectionCartMobile";

export default function Main() {
    const theme = useTheme()
    const width = useMediaQuery(theme.breakpoints.up('md'))
    return(
        <Fragment>
            <FirstMain />
            {
                width
                ?
                <SectionCart bgSrc={'https://univerlist.com/static/site/images/newDesign/compare.jpg'} bgColor={'#f1d4cc'} title={'Compare your favorite universities'} buttonTitle={'Compare'}/>
                :
                <SectionCartMobile bgSrc={'https://univerlist.com/static/site/images/newDesign/compare-mobile.jpg'} title={'Compare your favorite universities'} buttonTitle={'Compare'} />
            }
            <SliderComponent title={'the United Kingdom'} isCountry={false} data={data.universitiesInUK} isArticle={false}/>
            <SliderComponent title={'the United State of America'} isCountry={false} paddingTop={0} data={data.universitiesInUSA} isArticle={false}/>
            {
                width
                ?
                <SecondSectionCart />
                :
                <SectionCartMobile bgSrc={'https://univerlist.com/static/site/images/newDesign/pillow_banner.png'} title={<Fragment>Find your dream<br/>Master Degree</Fragment>} buttonTitle={'Find now!'} bgColor={'#d2c8f1'} />
            }
            <SliderComponent title={'Countries'} isCountry={true} data={data.countries} isArticle={false}/>
            <SliderComponent title={'Article'} data={data.article} isArticle={true}/>
            <Footer />
        </Fragment>
    )
}