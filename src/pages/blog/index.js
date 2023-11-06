import React from 'react'
import Blog from '@/components/Blog/Blog'
import { MetaBlog } from '@/meta/metaBlog';

function BlogPage() {
    return (
        <>
            <MetaBlog/>
            <Blog />
        </>
    )
}

export default BlogPage