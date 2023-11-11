import React from 'react'
import Link from 'next/link'
import iconMappings from '@/components/Other/IconMappings';

function SocialsItem(props) {
    const Icon = iconMappings[props.iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${props.socialUrl}`}
                title={props.socialName}
                target='_blank'
                className='h-full flex items-center justify-center group px-2'
            >
                <Icon size={24} className=' group-hover:text-site cursor-pointer transition-all group-hover:scale-125' />
            </Link>
        </li>
    )
}

function AboutSocials(props) {
    const Icon = iconMappings[props.iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${props.socialUrl}`}
                title={props.socialName}
                target='_blank'
                className='h-full flex items-center justify-center group gap-x-2 hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
                <span className='lg:text-lg font-semibold'>{props.socialName}</span>
            </Link>
        </li>
    )
}

function FooterSocials(props) {
    const Icon = iconMappings[props.iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${props.socialUrl}`}
                title={props.socialName}
                target='_blank'
                className='h-full flex items-center justify-center group gap-x-2 hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
            </Link>
        </li>
    )
}

function ContactSocials(props) {
    const Icon = iconMappings[props.iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${props.socialUrl}`}
                title={props.socialName}
                target='_blank'
                className='w-full flex items-center justify-start gap-x-4 group hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
                <span className='lg:text-lg font-semibold'>{props.socialName}</span>
            </Link>
        </li>
    )
}

export { SocialsItem, AboutSocials, ContactSocials, FooterSocials }