import { sanityClient, urlFor } from '../sanity'

import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10 ">
          <h1 className="max-w-xl font-serif text-6xl ">
            <span className="docoration-black docoration-4 underline">
              Medium
            </span>{' '}
            is a place to read write and connect
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
            asperiores incidunt similique pariatur facilis nihil quod repellat,
            excepturi dignissimos sapiente sunt sit quaerat vitae ea minima odio
            quisquam delectus.
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium"
        />
      </div>

      {/* posts */}

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post.${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden"> 
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="main image" />
              <div  className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt="author image"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
 
    _id ,
    title,
    description,
    mainImage,
    slug,
    author ->{
    name,
    image
  }  
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts: posts,
    },
  }
}
