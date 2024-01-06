import React from 'react'
import Item from './Item'

interface ITagsProps {
    tags : string[]
}

function Tags({tags} : ITagsProps) {

    return (
        <>
            {tags.length > 0 && (
                <div className="flex flex-col gap-y-2 items-start">
                    <span className='font-dancing tracking-wide text-3xl mt-6 mb-2'>Etiketler</span>
                    <ul className="tags flex flex-wrap gap-3">
                        {tags.length > 0 ? (
                            tags.slice(0, 6).map((tag : string, key : number) => (
                                <Item tag={tag} key={key} />
                            ))
                        ) : null}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Tags