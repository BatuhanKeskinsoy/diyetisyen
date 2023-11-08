import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import blogsData from '@/data/blogs';
import Link from 'next/link';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import { usePathname } from 'next/navigation'

function Blog(props) {

    const pathname = usePathname()

    const PAGE_SIZE_MOBILE = 6;
    const PAGE_SIZE_DESKTOP = 15;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isRecipe, setIsRecipe] = useState(false);
    const [recipeCount, setRecipeCount] = useState(0);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const countTotalRecipes = () => {
        return blogsData.filter(blogItem => blogItem.isRecipe).length;
    };

    const recipeActive = () => {
        setIsRecipe(current => !current);
    };

    useEffect(() => {
        setRecipeCount(countTotalRecipes());
    }, []);

    useEffect(() => {
        const filterBlogs = blogsData
            .sort((a, b) => b.id - a.id)
            .filter(blogItem => (isRecipe ? blogItem.isRecipe : true))
            .filter(blogItem => {
                const lowercaseTitle = blogItem.title.toLocaleLowerCase('tr-TR');
                const lowercaseSearchTerm = searchTerm.toLocaleLowerCase('tr-TR');
                return lowercaseTitle.includes(lowercaseSearchTerm) || searchTerm.length < 3;
            });

        setFilteredBlogs(filterBlogs);
        setCurrentPage(1); // Filtreler değiştiğinde sayfayı sıfırla
    }, [searchTerm, isRecipe]);

    // Sayfa boyutuna göre PAGE_SIZE belirleme
    const pageSize = typeof window !== 'undefined' && window.innerWidth < 768 ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
    const totalPageCount = Math.ceil(filteredBlogs.length / pageSize);
    const paginatedBlogs = props.forHome ? filteredBlogs.slice(0, 4) : filteredBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        if (currentPage < totalPageCount) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInputChange = e => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    return (
        <section className='relative z-20'>
            {props.topTransparent && <div className='bg-topTransparent w-full bg-top absolute bottom-full h-12'></div>}
            <div className='container mx-auto lg:px-0 px-4 lg:py-28 py-8'>
                <div className='flex lg:flex-row flex-col justify-between items-center mb-6 lg:gap-y-0 gap-y-4'>
                    {
                        props.forHome ? (
                            <h2 className='text-3xl lg:text-5xl font-dancing tracking-wide'>Blog</h2>
                        ) : (
                            <h1 className='text-3xl lg:text-5xl font-dancing tracking-wide'>Blog</h1>
                        )
                    }
                    <div className='flex flex-row gap-x-6 lg:w-fit w-full'>
                        {filteredBlogs.some(blogItem => blogItem.isRecipe) && (
                            <button
                                onClick={recipeActive}
                                className={`shadow-lg py-2 px-4 rounded-lg font-gemunu outline-none focus:outline-none lg:hover:bg-site lg:hover:text-white lg:hover:shadow-site/30 lg:hover:border-site/30 transition-all lg:w-fit w-full text-xl overflow-hidden group ${isRecipe ? 'bg-site text-white' : 'bg-white text-black'
                                    }`}
                            >
                                Tarifler ({recipeCount})
                            </button>
                        )}
                        <input
                            type='text'
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder='Blog Arayın...'
                            className='shadow-lg py-2 px-4 rounded-lg font-gemunu outline-none focus:outline-none focus:shadow-site/30 focus:border-site/30 transition-all lg:w-fit w-full text-xl'
                        />
                    </div>
                </div>

                <div className='flex flex-wrap gap-y-4'>
                    {paginatedBlogs.length > 0 ? (
                        paginatedBlogs.map((blogItem, key) => (
                            <Item
                                title={blogItem.title}
                                description={blogItem.description}
                                image={blogItem.image}
                                url={blogItem.url}
                                date={blogItem.date}
                                isRecipe={blogItem.isRecipe}
                                forHome={props.forHome}
                                pathnameBlog={pathname}
                                key={key}
                            />
                        ))
                    ) : (
                        <div className='font-gemunu tracking-wider text-4xl h-96 flex justify-center items-center text-center w-full'>
                            Blog Bulunamadı...
                        </div>
                    )}
                </div>

                {props.forHome && (
                    <Link
                        title='Tüm Bloglar'
                        href='/blog'
                        className='flex items-center gap-x-2 px-6 py-3 my-4 bg-white shadow-lg hover:bg-site hover:text-white font-gemunu text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:w-fit lg:justify-center justify-between mx-auto'
                    >
                        Tüm Bloglar
                        <AiOutlineDoubleRight />
                    </Link>
                )}

                {!props.forHome && (
                    <div className='flex justify-center mt-4 lg:gap-x-4 gap-x-2 lg:w-fit w-full mx-auto'>
                        {currentPage > 1 && (
                            <button
                                onClick={handlePrevPage}
                                className='flex items-center gap-x-2 lg:px-6 px-3 py-3 my-4 bg-white shadow-lg lg:hover:bg-site active:bg-site lg:hover:text-white  active:text-white font-gemunu text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:w-fit lg:justify-center justify-between mx-auto'
                            >
                                <AiOutlineDoubleLeft />
                                Önceki Sayfa
                            </button>
                        )}

                        {currentPage < totalPageCount && (
                            <button
                                onClick={handleNextPage}
                                className='flex items-center gap-x-2 lg:px-6 px-3 py-3 my-4 bg-white shadow-lg lg:hover:bg-site active:bg-site lg:hover:text-white  active:text-white font-gemunu text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:w-fit lg:justify-center justify-between mx-auto'
                            >
                                Sonraki Sayfa
                                <AiOutlineDoubleRight />
                            </button>
                        )}
                    </div>
                )}
            </div>

            {props.botTransparent && <div className='bg-botTransparent w-full bg-bottom absolute top-full h-12'></div>}
        </section>
    );
}

export default Blog;
