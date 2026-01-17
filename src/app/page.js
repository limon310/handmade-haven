import ArtisanSpotlight from "@/component/home/ArtisanSpotlight";
import FeaturedCategories from "@/component/home/FeaturedCategories";
import HeritageStory from "@/component/home/HeritageStory";
import HeroBanner from "@/component/home/HeroBanner";
import Newsletter from "@/component/home/Newsletter";
import Testimonials from "@/component/home/Testimonials";
import Trending from "@/component/home/Trending";
import WhyChooseUs from "@/component/home/WhyChooseUs";

export default function Home() {
  return (
    <>
    {/* banner */}
      <HeroBanner />

    {/* feature category */}
    <FeaturedCategories />

    {/* trendign items */}
    <Trending />

    {/* ArtisanSpotlight section */}
    <ArtisanSpotlight />

    {/* HeritageStory section */}
    <HeritageStory />

    {/* WhyChooseUs section */}
    <WhyChooseUs />

    {/* Testimonials section */}
    <Testimonials />

    {/* Newsletter */}
    <Newsletter />
  </>
  );
}
