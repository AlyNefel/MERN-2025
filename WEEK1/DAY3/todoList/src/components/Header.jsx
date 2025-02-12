import React from 'react'

const Header = (args) => {
    console.log()
  return (
    <div className="container">
{args.first}
 <hr/>
 {args.second}
   
</div>
  )
}

export default Header