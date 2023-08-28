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
  import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';
import logo from './logo/26logo.png'

export default function Sidebar(){
    return (
      <div className='bg-gray-800 text-white w-1/12 min-h-screen py-5'>
        <div className='flex mx-2 mb-2'>
          <Image
            src={logo}
            unoptimized
            className='h-8 w-8 mr-8'
            sizes='100vw'
            style={{
              width: '80%',
              height: '80%'
            }}
            alt='Logo'
          />
        {/*<h2 className='text-2xl font-bold text-center mb-6'>Base App</h2>*/}
        </div>
        <hr className='mb-2 border-gray-400'/>
        <nav>
          <ul className=''>
          <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <PlusIcon
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <HomeIcon 
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <DashboardIcon 
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <FilePlusIcon 
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <ChatBubbleIcon 
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <BarChartIcon
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
            <li className='flex items-center justify-center hover:bg-gray-700 mb-7'>
              <Link 
              className=''
              href="/">
                <IdCardIcon
                  className='mr-2 w-8 h-8'
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }