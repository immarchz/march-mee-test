import { HeaderSection } from "@/components/molecules/header-section";
import { InfoCard } from "@/components/molecules/info-card";
import { ListSection } from "@/components/molecules/list-section/list-section";
import { TalentProfile } from "@/components/molecules/talent-profile";
import { Hero } from "@/components/organisms/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="  px-4">
        <HeaderSection
          header="PARTNERS"
          title="Lorem Ipsum Dolor"
          description="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab,"
        />
      </div>
      <div className="py-12 md:px-12 px-4">
        <ListSection button={{ variant: "black", children: "Learn More" }}>
          <Image src="/googlepic.png" width={152} height={50} alt="google" />
          <Image src="/microsoft.png" width={152} height={50} alt="google" />
          <Image src="/airbnb.png" width={152} height={50} alt="google" />
          <Image src="/facebook.png" width={152} height={50} alt="google" />
          <Image src="/spotify.png" width={152} height={50} alt="google" />
        </ListSection>
      </div>
      <div className="py-12  px-4">
        <InfoCard
          title="Lorem Ipsum Dolor"
          description="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab,"
          buttonState="black"
          buttonText="Learn More"
          leftImage="/group-2.png"
        />
      </div>

      <div className="py-12 md:px-12 px-4">
        <InfoCard
          title="Lorem Ipsum Dolor"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, a
          b, dolor aperiam nobis cum est eos error ipsum, voluptate cul
          pa nesciunt delectus iste?"
          buttonState="black"
          buttonText="Learn More"
          rightImage="/group-3.png"
        />
      </div>

      <div className="pt-12 md:px-12 px-4 text-center">
        <HeaderSection
          header="team"
          title="Our Talents"
          description="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab,"
        />
      </div>

      <div className="py-12 md:px-12 px-4 ">
        <ListSection button={{ variant: "black", children: "Learn More" }}>
          <TalentProfile name="John Doe" image="/group-1.png" role="Founder" />
          <TalentProfile name="John Doe" image="/group-1.png" role="Founder" />
          <TalentProfile name="John Doe" image="/group-1.png" role="Founder" />
          <TalentProfile name="John Doe" image="/group-1.png" role="Founder" />
        </ListSection>
      </div>
    </div>
  );
}
