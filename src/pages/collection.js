import React from 'react';
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
import Image from "next/image";
const Collection = () => {
    return (
        <div>
            <div>
                <h2>Плейлисты</h2>
                <div>
                    <div className={'bg-gradient-to-r from-blue-800 to-blue-300'}>
                        <Image src={lol} alt={'avatar'}/>
                        <div>
                            <h2>Name playlist</h2>
                        </div>
                    </div>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Collection;