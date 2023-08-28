import { 
    IdCardIcon, 
    HomeIcon,
    BellIcon, 
    BadgeIcon, 
    BoxIcon, 
    PlusCircledIcon,
    DashboardIcon,
    ChatBubbleIcon,
    BarChartIcon,
    Cross1Icon,
    Cross2Icon,
    PlusIcon,
    FilePlusIcon
  } from '@radix-ui/react-icons';
  import Link from 'next/link'
export default function BottomNav(){
    return (
      <nav className='bg-gray-800 text-white fixed bottom-0 left-0 right-0 p-2 md:hidden'>
        <ul className='flex justify-around'>
          <li>
            <Link 
            className='hover:text-blue-500'
            href="/"><HomeIcon/></Link>
          </li>
          <li>
            <Link 
            className='hover:text-blue-500'
            href="/"><PlusCircledIcon/></Link>
          </li>
          <li>
            <Link 
            className='hover:text-blue-500'
            href="/"><BellIcon/></Link>
          </li>
        </ul>
      </nav>
    );
  }