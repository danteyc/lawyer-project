import { FunctionComponent } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Lawyer } from '../services/Lawyer/lawyer.interface';

interface ICard{
  lawyer: Lawyer
}

export const Card: FunctionComponent<ICard> = ({lawyer}) => {
  return (
    <Link to={`/detalle-abogado/${lawyer.id}`}>
    <div className='w-full rounded-lg border border-[#3396D3] overflow-hidden'>
      <div className='w-full bg-[#3396D3] p-2'>
        <p className='text-lg font-bold'>{lawyer.firstName} {lawyer.lastName}</p>
      </div>
      <div className='flex justify-between p-2'>
        <div>
          <p className='text-sm flex items-center gap-1'><FaLocationDot/> <span>{lawyer.City.name}</span></p>
          <p className='text-sm flex items-center gap-1'><FaMobileScreen/> <span>{lawyer.phoneNumber}</span></p>
        </div>
        <img className='rounded-full w-14 h-14 object-cover' 
          src={lawyer?.image ?? "https://headshots-inc.com/wp-content/uploads/2022/07/attorny-headshot-example-1.jpg"}
          alt="Profile Photo Lawyer" />
          
      </div>

    </div>
    </Link>
  )
}
