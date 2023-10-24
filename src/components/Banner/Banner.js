import React from 'react'
import bannersData from '@/data/banners'
import Item from './Item';

function Banner(props) {

    const Slider = props.Slider

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000
    };
    return (
        <section id='bannerSection' className='relative'>
            <Slider {...settings}>
                {
                    bannersData.map((bannerItem, index) => (
                        <Item
                            key={bannerItem.id}
                            image={bannerItem.image}
                            title={bannerItem.title}
                            description={bannerItem.description}
                            btnText={bannerItem.btnText}
                            btnActive={bannerItem.btnActive}
                            btnUrl={bannerItem.btnUrl}
                            isFirstItem={index === 0}
                        />
                    ))
                }
            </Slider>
            <div className='bg-topTransparent w-full bg-top absolute bottom-0 h-12'></div>
        </section>
    );
}

export default Banner