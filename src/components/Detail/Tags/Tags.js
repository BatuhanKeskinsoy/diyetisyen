import React from 'react'
import Item from './Item'

function Tags(props) {
    return (
        <>
            {props.tags.length > 0 && (
                <div className="flex flex-col gap-y-2 items-start">
                    <span className='font-dancing tracking-wide text-3xl mt-6 mb-2'>Etiketler</span>
                    <ul className="tags flex flex-wrap gap-3">
                        {props.tags.length > 0 ? (
                            props.tags.slice(0, 6).map((tag, key) => (
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