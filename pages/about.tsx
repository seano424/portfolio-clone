import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="h-[1000px] page-padding container">
        <p className="leading-[1.8] p">
          I am a Frontend Developer based in Kansas City and specialize in
          bringing forth beautiful UI, and I love what I do! I commonly make
          websites and apps with TailwindCSS / SASS, Craft CMS, NextJS / React,
          TypeScript, and JAMstack architecture. I am mostly experienced with
          JavaScript and JS frameworks, but I have also worked in Ruby on Rails.
          If you have any projects in mind feel free to reach out!
        </p>
        {/* <p className="font-black tracking-wide leading-loose">
          I am a Front-end Developer originally from Kansas City. I specialize
          in bringing forth beautiful UI, and I love what I do! I commonly make
          websites that are focused on being user friendly, written with clean
          and readable code, and are simple to use. If you have any projects in
          mind feel free to reach out!
        </p> */}
      </div>
    </Layout>
  )
}

export default About
