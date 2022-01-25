import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" />
        </Link>
      </div>
    </header>
  )
}

export default Header
