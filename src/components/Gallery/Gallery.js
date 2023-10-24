import React from 'react'
import galleryPhotosData from '@/data/galleryPhotos';
import Item from './Item';

function Gallery(props) {

    const Slider = props.Slider

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };
    return (
        <section id='gallerySection' className="relative bg-gray-200">
            <div className='container mx-auto lg:px-0 px-4 lg:pt-24 lg:pb-36 pt-14 pb-24 gap-y-8 flex flex-col'>
                <h2 className='text-3xl lg:text-5xl font-dancing tracking-wide'>Fotoğraf Galerisi</h2>
                <Slider {...settings}>

                    {
                        galleryPhotosData.map((galleryItem, key) => (

                            <Item
                                key={key}
                                image={galleryItem.image}
                                alt={galleryItem.alt} />

                        ))
                    }

                </Slider>
            </div>
        </section>
    )
}

export default Gallery