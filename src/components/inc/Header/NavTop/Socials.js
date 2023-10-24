import React from 'react'
import { SocialsItem } from '@/components/inc/Header/Items/SocialItem'

function NavTopSocials(props) {
    const SocialsData = props.SocialsData
    return (
        <div id="socials" className='flex h-full'>
            {
                SocialsData.map((data, key) => (
                    <SocialsItem socialUrl={data.socialUrl} iconName={data.iconName} key={key} />
                ))
            }
        </div>
    )
}

export default NavTopSocials