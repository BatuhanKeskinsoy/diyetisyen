import React from 'react'
import blogsData from '@/data/blogs'
import { BlogDetail } from '@/components/Detail/Detail'
import { useRouter } from 'next/router'
import { MetaBlogDetay } from '@/meta/metaBlogDetay'

function Page({ metaFilteredBlogs }) {

  const router = useRouter()
  const { slug } = router.query

  const filteredBlogs = slug ? blogsData.find(blog => blog.url === slug) : null

  if (!filteredBlogs) {
    return null;
  }

  return (
    <>
      <MetaBlogDetay slug={slug} data={metaFilteredBlogs} />

      <BlogDetail
        title={filteredBlogs.title}
        image={filteredBlogs.image}
        contentText={filteredBlogs.contentText}
        description={filteredBlogs.description}
        tags={filteredBlogs.tags} url={filteredBlogs.url}
        isRecipe={filteredBlogs.isRecipe}
        showAllUrl={'/blog'}
      />
    </>
  )
}


export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  let metaFilteredBlogs = null;

  if (slug) {
    metaFilteredBlogs = blogsData.find(blog => blog.url === slug);

    if (!metaFilteredBlogs) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      metaFilteredBlogs,
    },
  };
}


export default Page