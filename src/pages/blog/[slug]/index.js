import React, { useState, useEffect } from 'react'
import blogsData from '@/data/blogs'
import { BlogDetail } from '@/components/Detail/Detail'
import { useRouter } from 'next/router'

function Page() {

    const router = useRouter()
    const { slug } = router.query
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (slug) {
          const filteredBlogData = blogsData.find(blog => blog.url === slug)
    
          if (filteredBlogData) {
            setData(filteredBlogData)
            setIsLoading(false)
          } else {
            // Navigate to the 404 page manually
            router.push('/404')
          }
        }
      }, [slug])

    if (isLoading) {
        return <div className='w-full h-96 font-gemunu text-3xl flex items-center justify-center'>Yükleniyor...</div>;
    }
    if (!data) {
        return null; // Eğer veri bulunamazsa veya yönlendirme yapılırsa `null` döndürün
    }

    return (
        <BlogDetail
            title={data.title}
            image={data.image}
            contentText={data.contentText}
            description={data.description}
            tags={data.tags} url={data.url}
            isRecipe={data.isRecipe}
            showAllUrl={'/blog'}
        />
    )
}

export default Page