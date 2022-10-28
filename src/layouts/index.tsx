import React, {FunctionComponent} from 'react'

import {NextSeo} from 'next-seo'
import Head from 'next/head'

import Footer from '../components/footer'

type LayoutProps = {
  frontMatter: any
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({
  children,
  frontMatter,
}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage,
  } = frontMatter
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
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
      <div className="min-h-screen min-w-screen px-8 md:px-12 pt-12">
        <div className="max-w-custom w-full pt-8 m-auto prose xs:prose-lg lg:prose-xl 2xl:prose-2xl pb-16">
          <img
            className="w-full"
            style={{maxWidth: '100px', textAlign: 'center'}}
            src="/images/logo.png"
          />
          <h1 className="m-0 p-0 mt-4">{title}</h1>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
