import React from 'react';

/**
 * `COMPONENT`
 * ## Bookmark
 * @param props Contains the following attributes: `label`, `twAddonStyles`
 * @returns `React.ReactElement`
 */
const Bookmark = (props: {
    label: string;
    twAddonStyles?: {
        bookmark?: string;
    };
}): React.ReactElement => {
    return (
        <div className={`flex items-center bg-[#5655C6] w-[195px] ${props.twAddonStyles?.bookmark}`}>
            <svg className="w-5 h-5 ml-[-4px]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="20" height="22" fill="#5655C6" />
                <path d="M18.7677 12L4.69182 22.3923L4.69182 1.6077L18.7677 12Z" fill="white" />
            </svg><div className={`text-white text-sm font-bold`}>
                {props.label}
            </div>
        </div>
    );
};

export default Bookmark;
