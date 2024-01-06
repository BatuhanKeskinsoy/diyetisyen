import React from 'react'
import Link from 'next/link'
import iconMappings from '@/components/Other/IconMappings';

interface SocialItemsProps {
    socialUrl: string;
    iconName: any;
    socialName: string;
}

function SocialsItem({ socialUrl, iconName, socialName} : SocialItemsProps) {
    const Icon = iconMappings[iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${socialUrl}`}
                title={socialName}
                target='_blank'
                className='h-full flex items-center justify-center group px-2'
            >
                <Icon size={24} className=' group-hover:text-site cursor-pointer transition-all group-hover:scale-125' />
            </Link>
        </li>
    )
}

function AboutSocials({ socialUrl, iconName, socialName} : SocialItemsProps) {
    const Icon = iconMappings[iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${socialUrl}`}
                title={socialName}
                target='_blank'
                className='h-full flex items-center justify-center group gap-x-2 hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
                <span className='lg:text-lg font-semibold'>{socialName}</span>
            </Link>
        </li>
    )
}

function FooterSocials({ socialUrl, iconName, socialName} : SocialItemsProps) {
    const Icon = iconMappings[iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${socialUrl}`}
                title={socialName}
                target='_blank'
                className='h-full flex items-center justify-center group gap-x-2 hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
            </Link>
        </li>
    )
}

function ContactSocials({ socialUrl, iconName, socialName} : SocialItemsProps) {
    const Icon = iconMappings[iconName]
    return (
        <li className='list-none'>
            <Link
                href={`${socialUrl}`}
                title={socialName}
                target='_blank'
                className='w-full flex items-center justify-start gap-x-4 group hover:text-site transition-all'
            >
                {Icon && <Icon size={36} />}
                <span className='lg:text-lg font-semibold'>{socialName}</span>
            </Link>
        </li>
    )
}

export { SocialsItem, AboutSocials, ContactSocials, FooterSocials }