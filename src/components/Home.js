import { useState } from 'react'
import hotelImg from './SunHeart.jpg'
// import logo from '../Moon.jpg'
import '../App.css'

function Home() {
    const [hotels, setHotels] = useState([

        {
            id: 1,
            name: 'Protea Hotel',
            price: 'R250',
            imgHotel: hotelImg
        },

        {
            id: 2,
            name: 'Kruger Park',
            price: 'R250',
            imgHotel: hotelImg
        },

        {
            id: 3,
            name: 'Protea Hotel',
            price: 'R250',
            imgHotel: hotelImg
        },

        {
            id: 4,
            name: 'Protea Hotel',
            price: 'R250',
            imgHotel: hotelImg
        },

        {
            id: 5,
            name: 'Protea Hotel',
            price: 'R250',
            imgHotel:  hotelImg 
        },


    ])



    return (
        <div className='container'>
            <div>
                <a href='/'
                    style={{ color: '#f47066' }}>Go back</a>
            </div>
            <div className='heading' >
                <label className='headTxt'> Top Views</label>
            </div>


            <div className='scrollCotainer'>
                {hotels.map(( hotel, index ) =>
                (
                    <div key={index} className='bottomCards'>
                        
                        <button className='bottomCard' >
                            
                            <div  style={{ width: 180, flexDirection: 'row', alignSelf:'flex-start',}}>
                                
                                <img src={hotel.imgHotel} alt={hotelImg}
                                    style={{ width: 180, height: 145, borderRadius: 15 }} />    
                                
                                <label style={{ position: 'absolute', maxWidth: 50, padding: 10, fontSize: 18, color: '#f47006' }}>
                                    {hotel.name}
                                </label>
                                <label style={{ position: 'absolute', padding: 10, paddingTop: 55, fontSize: 15, }}>
                                    {hotel.id}Kimberley
                                </label>
                                <label style={{ position: 'absolute', padding: 10, paddingTop: 80 }}>
                                    {hotel.price} /night</label>
                            </div>

                            
                            
                        </button>
                        
                    </div>
                )
                )}

            </div>
        </div>
    )
}


export default Home

    // function List() {
    //     <div className='bottomCards'>
    //         <button className='bottomCard' >
    //             <div>
    //                 <img src={hotelImg} alt={hotelImg} />
    //                 <div>                              
    //                     <h5>fhfhtfhv</h5>
    //                     <h5>fhfhtfhv</h5>
    //                 </div>
    //             </div>
    //         </button>
    //     </div>
    // }