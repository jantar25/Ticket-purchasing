import chrisImg from '../Assets/chris-brown.webp'
import bruceImg from '../Assets/bruce_melody.jpg'

const tickets = [
    {
        id:1,
        artist: "Bruce Melodi",
        City:"Kigali, Rwanda",
        location: "BK Arena",
        date:"Sat,May-27th 2023",
        time: "04:00pm",
        priceByPosition: {
            VVIP:100,
            VIP:50,
            Normal:30,
            Standards:10
        },
        image:bruceImg
    },
    {
        id:2,
        artist: "Chris Brown",
        City:"Kigali, Rwanda",
        location: "Convetion Center",
        date:"Wed,May-31st 2023",
        time: "07:00pm",
        priceByPosition: {
            VVIP:500,
            Normal:100,
            Standards:50
        },
        image:chrisImg
    }
]

export default tickets