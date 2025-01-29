import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import ChooseUs from "@/components/ChooseUs";
import GymTestimonials from "@/components/TestimonialCards";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <FeaturedCourses/>
            <ChooseUs/>
            <GymTestimonials/>
        </main>
    )
}
