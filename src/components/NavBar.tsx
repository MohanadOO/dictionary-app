import { Fragment, useEffect, useState } from 'react'
import { BiBookBookmark, BiMoon, BiChevronDown, BiSun } from 'react-icons/bi'
import { Switch, Menu, Transition } from '@headlessui/react'

export default function NavBar() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setEnabled(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setEnabled(false)
    }
  }, [])

  function handleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }

    setEnabled((enable) => !enable)
  }

  return (
    <nav className='w-full mb-10'>
      <ul className='flex items-center gap-2'>
        <li>
          <BiBookBookmark className='w-8 h-8' />
        </li>
        <li className='ml-auto relative'>
          <Menu>
            <Menu.Button className='flex items-center gap-2'>
              <span className='font-semibold'>Serif</span>
              <BiChevronDown className='w-7 h-7 fill-cyan-400' />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='flex flex-col gap-2 items-start absolute right-1 top-8 w-32 py-2 px-2  shadow-md rounded-md font-bold z-50 bg-white dark:text-black'>
                <Menu.Item>
                  <button className='hover:bg-cyan-600 hover:text-white w-full rounded-md text-start py-1 px-4'>
                    Font 1
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className='hover:bg-cyan-600 hover:text-white w-full rounded-md text-start py-1 px-4'>
                    Font 1
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <div className='border border-gray-200 w-7 h-full rotate-90 rounded-sm' />
        <li className='flex gap-2 group'>
          <Switch
            checked={enabled}
            onChange={handleTheme}
            className={`${
              enabled ? 'bg-cyan-400' : 'bg-gray-600'
            } relative inline-flex h-6 w-12 items-center rounded-full`}
          >
            <span className='sr-only'>Enable Dark Theme</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          {enabled ? (
            <BiMoon title='Dark Theme' className='w-7 h-7 fill-gray-400' />
          ) : (
            <BiSun title='Light Theme' className='w-7 h-7 fill-gray-400' />
          )}
        </li>
      </ul>
    </nav>
  )
}
