'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ cities }) {
  const pages = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
  ]

  console.log('cities', cities)
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <img
                      className='hidden h-8 lg:block w-auto'
                      src='/khojnear_logo.png'
                      alt='Khoj Near'
                    />
                  </Link>
                </div>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {pages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-center'>
                <div className='max-w-lg w-full lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
                {/* Dropdown input to select city */}
                <div className='ml-4 relative flex items-center'>
                  <div>
                    <input
                      id='city'
                      name='city'
                      className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='City'
                      type='search'
                    />
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        className='h-5 w-5 text-gray-400'
                        data-todo-x-description='Heroicon name: solid/chevron-down'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          data-todo-x-description="Dropdown arrow, toggle open: '-rotate-180', closed: 'rotate-0'"
                          vectorEffect='non-scaling-stroke'
                          strokeWidth={2}
                          d='M7 7l3-3 3 3m0 6l-3 3-3-3'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center'>
                <button
                  type='button'
                  className='flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-4 relative flex-shrink-0'>
                  <div>
                    <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as='a'
                href='#'
                className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// fetch cities on server side
export async function getServerSideProps() {
  console.log('getServerSideProps')
  try {
    const { rows } = await sql`SELECT * from cities`;
    console.log('getCities', rows)
    const cities = rows.map((city) => {
      return { name: city.name }
    })
    return {
      props: {
        cities
      }
    }
  } catch (error) {
    console.log('error', error)
    return {
      props: {
        cities: []
      }
    }
  }
}