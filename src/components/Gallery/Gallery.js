import React, { useState } from 'react'
import galleryPhotosData from '@/data/galleryPhotos';
import Item from './Item';
import servicesData from '@/data/services'
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

function Gallery(props) {

    const hizmetler = servicesData.map((item) => item.title).join(', ')

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const Slider = props.Slider

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <section id='gallerySection' className="relative bg-gray-100">
            <div className='container mx-auto lg:px-0 px-4 lg:py-24 pt-14 pb-24 gap-y-8 flex flex-col'>
                <div className="flex flex-col gap-y-3">
                    <h2 className='text-3xl lg:text-5xl font-dancing tracking-wide text-center'>Fotoğraf Galerisi</h2>
                    <p className='text-base lg:text-lg text-gray-500 text-center'>{hizmetler} ve diyet programlarımız ile ideal kilolarına ulaşmak isteyen danışanlarımızın sonuçları</p>
                </div>
                <Slider {...settings}>
                    {galleryPhotosData.map((galleryItem, index) => (
                        <Item
                            key={index}
                            image={galleryItem.image}
                            alt={galleryItem.alt}
                            openLightbox={() => openLightbox(index)}
                        />
                    ))}
                </Slider>
            </div>

            {lightboxOpen && (
                <Lightbox
                    images={galleryPhotosData.map((item) => ({ url: item.image, title: item.alt }))}
                    onClose={closeLightbox}
                    startIndex={currentImage}
                />
            )}
        </section>
    )
}

export default Gallery;
