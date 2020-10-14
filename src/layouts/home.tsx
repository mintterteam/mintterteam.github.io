import Link from 'next/link'
import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Footer from '../components/footer'

type LayoutProps = {
  frontMatter: any
}

const Home: FunctionComponent<LayoutProps> = ({children, frontMatter}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage,
  } = frontMatter
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <div className="min-h-screen min-w-screen bg-gray-100 px-4 md:px-6">
        <div className="max-w-3xl w-full pt-8 prose xs:prose-lg lg:prose-xl 2xl:prose-2xl pb-32">
          <h1 className="m-0 p-0">{title}</h1>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
