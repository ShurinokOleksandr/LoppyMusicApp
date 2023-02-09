import React from 'react';

const Player = () => {
    return (
        <div className='h-[15%] w-full border-t bg-white border-t'>
            <div>
                <div>
                    <input type="range" className={'w-20 appearance-none w-full h-0.5 bg-[#e60000] rounded outline-none slider-thumb'}/>

                </div>
                <div>bot</div>
            </div>
        </div>
    );
};

export default Player;