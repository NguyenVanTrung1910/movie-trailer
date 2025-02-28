import ImageRating from '../assets/rating.png'
import ImageRatingHalf from '../assets/rating-half.png'
import ItemTemp from '../assets/temp-1.jpeg'
import ItemPlay from '../assets/play-button.png'
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-center bg-banner 
    bg-no-repeat bg-cover">
        <div className="absolute w-full bg-black h-[600px] left-0 opacity-40 z-1"/>
        <div className="w-full h-full flex items-center 
        justify-center space-x-[30px] p-4 relative z-10">
            <div className='flex w-[50%] flex-col space-y-5 items-baseline'>
                <div className="text-white bg-gradient-to-r 
                from-red-600 to-red-300 py-1 px-4">TV SHOW</div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
                    <div className="flex items-center space-x-3">
                        <img className='w-8 h-8' src={ImageRating}/>
                        <img className='w-8 h-8' src={ImageRating}/>
                        <img className='w-8 h-8' src={ImageRating}/>
                        <img className='w-8 h-8' src={ImageRating}/>
                        <img className='w-8 h-8' src={ImageRatingHalf}/>
                    </div>
                </div>
                <p className='text-white'>
                Tải xuống và sử dụng miễn phí 1.000.000+ ảnh lưu trữ 
                về Hình Nền Full Hd. Hàng ngàn ảnh mới mỗi ngày 
                Sử dụng hoàn toàn miễn phí Video và ảnh chất lượng cao từ Pexels.
                Tải xuống và sử dụng miễn phí 1.000.000+ ảnh lưu trữ 
                về Hình Nền Full Hd. Hàng ngàn ảnh mới mỗi ngày 
                Sử dụng hoàn toàn miễn phí Video và ảnh chất lượng cao từ Pexels.
                </p>
                <div className='flex items-center space-x-4'>
                    <button className='p-2 text-white bg-black font-bold text-lg'>Chi tiết</button>
                    <button className='p-2 text-white bg-red-600 font-bold text-lg'>Xem phim</button>
                </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <div className='w-[300px] h-[500px] relative group cursor-pointer'>
                    <img src={ItemTemp} alt='temp' className='w-full 
                    h-full object-cover'/>
                    <div className='w-full h-full absolute top-0 left-0 
                    flex items-center justify-center backdrop-blur-sm
                    opacity-0 group-hover:opacity-100 duration-500 ease-in-out'>
                        <img src={ItemPlay} className='w-16 h-16' alt='play' />

                    </div>
                </div>
            </div>    
        </div>    
    </div>
  )
}

export default Banner