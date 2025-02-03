import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import ChooseUs from "@/components/ChooseUs";
import GymTestimonials from "@/components/TestimonialCards";
import GymSchoolContactUs from "@/components/ContactUs";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <FeaturedCourses/>
            <ChooseUs/>
            <GymTestimonials/>
            <GymSchoolContactUs/>
            <Footer/>
        </main>
    )
}
