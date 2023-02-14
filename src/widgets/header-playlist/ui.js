import React from 'react';
import Image from "next/image";
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
const HeaderPlaylist = ({children}) => {
    return (
        <div className={'p-10 bg-[#f1f2fb] '}>
            <div className={' justify-center  '}>
                <div className={''}>
                    <h1 className={' text-[#5b647d] font-bold text-4xl mb-6'}>{children}</h1>
                </div>
                <div className={'flex  text-[#5b647d]  font-bold'}>
                    <Image src={lol}  className={'w-[300px] mr-10 object-cover rounded-2xl '} alt={'avatar playlist'}/>
                    <p className={'text-sm overflow-auto'}>
                        <div className={'mb-7'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad commodi est fuga placeat recusandae veritatis? A ad aspernatur aut ea eaque, earum, explicabo id inventore ipsa ipsam libero non nulla obcaecati pariatur quis quo repudiandae, rerum sint velit vitae. Accusamus culpa eligendi exercitationem, illum laborum numquam quam quisquam soluta!
                        </div>
                        <div className={'font-bold'}>
                            190 треков
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderPlaylist;