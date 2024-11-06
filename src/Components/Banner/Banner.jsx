import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='hero bg-[#9538E2] p-10 rounded-xl relative bottom-6' >
                <div className='w-full flex justify-center text-center'>
                    <div className='w-7/12 '>
                        <h2 className='text-5xl text-[#FFFFFF] font-semibold mb-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                        <div className='flex justify-center'>
                            <p className='text-[#FFFFFF] text-center w-10/12 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        </div>
                        <Link to='/dashboard'><button className='btn rounded-3xl mb-64 text-[#9538E2] text-xl font-semibold'>Shop Now</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center relative -top-56 rounded-xl '>
                <div className='w-8/12 hero-overlay p-4 rounded-xl'>
                    <img className='rounded-xl w-full' src="/src/assets/banner.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;