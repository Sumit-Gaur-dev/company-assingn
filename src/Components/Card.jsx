import React from 'react'


function Card({data}) {
    const gender =data.gender;
    const image =data.picture;
    const name =data.name;
    const userName = data.login;
    const email=data.email;
    const phone=data.phone;
    const birth = data.dob;

    const convertedDate = new Date(birth.date);
    const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    };
    const formattedDate = convertedDate.toLocaleDateString('en-US', options);
    


  return (
    <div className=' mt-10 shadow-black shadow-2xl  flex bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg border-2 border-sky-900 w-[400px] h-60'>
        
         <div className=' w-[40%] flex justify-center items-center'>
            <div className=''>
              <img src={image.large} className='rounded-lg border-2 border-purple-400'/>
              <h1 className='text-center text-white font-semibold'>{`${userName.username}`}</h1>
            </div>
         </div>
        
         <div className='flex-col items-center w-[60%]'>
            <div className='flex justify-center mt-10 '>
               <h1 className='font-bold text-white hover:drop-shadow-2xl text-xl'><span>{name.title}</span> {name.first} <span>{name.last}</span></h1>
            </div>
            <div className='flex justify-center font-serif text-sm mt-1'>
              {gender}
            </div>

            <div className='pl-1 mt-3 text-gray-100'>
                    <ul className='gap-2 flex-col '>
                        <li className=' flex text-sm items-center'><span className='w-12 text-base text-black font-semibold'>Dob</span>: {formattedDate} </li>
                        <li className=' flex text-sm items-center'><span className='w-12 text-base text-black font-semibold'>Email</span>: {email}</li>
                        <li className=' flex text-sm items-center'><span className='w-12 text-base text-black font-semibold'>Phone</span>: {phone} </li>
                    </ul>
            </div>
         </div>

    </div>
  )
}

export default Card