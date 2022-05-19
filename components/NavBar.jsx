import React from 'react'

export default function NavBar() {
  return (
    <div className='flex gap-4 px-5 justify-end text-white py-3 bg-slate-900 backdrop-blur border-2 border-slate-800'>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">search</div>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">docs</div>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">github</div>

    </div>
  )
}
