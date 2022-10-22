import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { BsGithub, BsInstagram, BsMailbox } from 'react-icons/bs'
import Card from '../components/Card'
import Profile from '/public/assets/my_profile.jpg'
import Background from '/public/assets/bg_cloud1.jpg'

const About = () => {
  const Links = [
    {
      href: 'https://github.com/get6',
      title: 'GitHub',
      username: 'get6',
      children: <BsGithub />,
    },
    {
      href: 'https://www.instagram.com/hwang_sung_jun93',
      title: 'Instagram',
      username: 'hwang_sung_jun93',
      children: <BsInstagram />,
    },
    {
      href: 'mailto:ittae.com@gmail.com',
      title: 'Gmail',
      username: 'ittae.com@gmail.com',
      children: <BsMailbox />,
    },
  ]

  return (
    <div className="flex flex-col">
      <span className="fixed inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <NextSeo title="About me" description="저를 소개합니다." />
      <div
        className="h-96 w-full bg-cover bg-local bg-[left_calc(0%)_top_calc(80%)]"
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      />
      <div className="mx-20 flex flex-col space-y-5">
        <h1 className="mr-auto -mt-8 flex-auto rounded-lg bg-white px-4 py-2 text-4xl font-bold drop-shadow-xl">
          ☁️ About me
        </h1>
        <div className="relative inline-flex flex-auto flex-col space-y-4 overflow-hidden rounded-lg border border-gray-100 p-8">
          <div className="flex w-full">
            <h3 className="text-xl font-bold text-gray-900">
              Hi&nbsp;👋&nbsp;&nbsp;I&apos;m Seong Jun, Hwang
            </h3>
          </div>
          <div className="flex w-full space-x-4 sm:inline-flex">
            <div className="flex flex-col">
              <div className="hidden flex-shrink-0 sm:block">
                <Image
                  alt="Paul Clapton"
                  src={Profile}
                  className="rounded-lg object-cover shadow-sm"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="text-gray-500">
                I&apos;m currently studying at
                <a
                  className="text-blue-500"
                  href="https://42seoul.kr/seoul42/main/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;42 SEOUL
                </a>
                &nbsp;as a 6th cadet.
                <br /> If you are 42 cadet, you can access&nbsp;
                <a
                  className="text-blue-500"
                  href="https://profile.intra.42.fr/users/sunhwang"
                  target="_blank"
                  rel="noreferrer"
                >
                  my 42 profile. 😃
                </a>
                <br />
                Please say hello to me at the cluster.
              </p>
              <p className="text-gray-500">
                <br /> I&apos;m Flutter enthusiast. My favorite framework is
                Flutter now!
                <br /> It helps to make it easy to create any app.
                <br />
                That&apos;s why I love Flutter.
              </p>
            </div>
            <div className="flex flex-col justify-evenly space-y-4">
              <p className="text-gray-500">
                Anyone who wants to meet me can contact me using the below list.
                🙌
              </p>
              <div className="inline-flex w-full justify-around space-x-4">
                {Links.map(({ href, title, username, children }, index) => (
                  <Card
                    key={index}
                    href={href}
                    title={title}
                    username={username}
                  >
                    {children}
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* <dl className="mt-6 flex">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div className="ml-3 flex flex-col-reverse sm:ml-6">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl> */}
        </div>
      </div>
    </div>
  )
}

export default About
