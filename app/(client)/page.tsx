'use client';
import Image from "next/image";
import heroImgSrc from "./assets/login_01.png";
import thumbnail01 from "./assets/card_01.jpg";
import thumbnail02 from "./assets/card_02.jpg";
import thumbnail03 from "./assets/card_03.jpg";
import thumbnail04 from "./assets/card_05.jpg";

import SearchBox from "@/src/components/inputs/SearchBox";
import { useState } from "react";
import Footer from "@/src/layouts/Footer";
import { SectionText } from "@/src/components/built-in/Typography";
import Card from "@/src/components/surfaces/Card";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LifeAtCompany />
      <Footer />
    </div>
  )
}

function Hero() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <section className="bg-grey">
      <div className="container flex justify-between">
        <div className="flex-shrink-0 flex flex-col justify-center">
          <h2 className="mb-9 text-4xl font-medium">Tạo ra tương lai bạn muốn</h2>
          <p className="mb-2 text-xl">Tìm công việc tiếp theo của bạn tại <span className="text-greensea font-bold">TeS</span></p>
          <SearchBox
            value={searchValue}
            placeholder="Search by job title, or keyword..."
            onChange={(value) => setSearchValue(value)}
            onSearch={() => {}}
          />
        </div>
        <div className="w-1/2">
          <Image
            src={heroImgSrc}
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  )
}

function LifeAtCompany() {
  return (
    <section className="py-12">
      <div className="container flex flex-col gap-4">
        <SectionText>Cuộc sống tại TeS</SectionText>
        <div className="flex gap-5">
          <Card
            title="Benefit"
            shortContent="Explore TeS benefits designed to help you and your family live well "
            thumnailSrc={thumbnail01}
          />
          <Card
            title="Culture"
            shortContent="We will only achieve our mission if we live our culture, which starts with applying a growth mindset."
            thumnailSrc={thumbnail02}
          />
          <Card
            title="Diversity and inclusion"
            shortContent="We are committed to celebrating the diversity around us and its power to drive us forward together."
            thumnailSrc={thumbnail03}
          />
          <Card
            title="Flexible work"
            shortContent="At Microsoft, we value flexibility as part of our hybrid workplace so that you can feel empowered to do your best work. "
            thumnailSrc={thumbnail04}
          />
        </div>
      </div>
    </section>
  )
}