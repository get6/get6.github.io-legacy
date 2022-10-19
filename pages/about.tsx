import { NextSeo } from 'next-seo'
import Image from 'next/image'
import bg from '/public/assets/bg_cloud1.jpg'
import profile from '/public/assets/my_profile.jpg'

const About = () => {
  return (
    <div className="flex flex-col">
      <NextSeo title="About me" description="저를 소개합니다." />
      <div
        className="h-96 w-full bg-cover bg-local bg-[left_calc(0%)_top_calc(80%)]"
        style={{
          backgroundImage: `url(/assets/bg_cloud1.jpg)`,
        }}
      ></div>
      <h1 className="mx-auto -mt-8 ml-8 rounded-lg bg-white px-4 py-2 text-4xl font-bold drop-shadow-xl">
        ☁️ About me
      </h1>
      <br />
    </div>
  )
}

export default About
