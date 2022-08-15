import React from 'react'
import * as Icons from "heroicons-react";
// import { BeakerIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import "./sideNav.scss"
const SideNav = () => {
  return (
    <div className='w-[10%] h-screen  bg-gray-50 overflow-hidden  fixed top-0 '>
           

                <div className='grid justify-stretch'>      
                  
                    <Link to={'/'} className='menu mt-8 hover:border-lime'>
                       
                        <Icons.Home className='mx-auto text-lime-600'/>

                        
                        <strong className=''>Home</strong>
                        
                    </Link >
                    <div className='menu hover:border-teal'>
                        <Icons.ShoppingBag className='mx-auto text-teal-600'/>
                        <strong>Sell</strong>
                    </div>
                    <div className='menu hover:border-blue'> 
                        <Icons.Table className='mx-auto text-blue-600'/>
                        <strong>History</strong>
                    </div>
                    <div className='menu hover:border-orange'>
                        <Icons.DocumentReport className='mx-auto text-orange-600'/>
                        <strong>Reporting</strong>
                    </div>
                    <div className='menu hover:border-purple'>
                        <Icons.Tag className='mx-auto text-purple-600'/>
                        <strong>Products</strong>
                    </div>
                    <Link to={'/user-list'} className='menu hover:border-fuchsia'>
                        <Icons.Users className='mx-auto text-fuchsia-600'/>
                        <strong>Customers</strong>
                    </Link>
                    <div className='menu hover:border-rose'>
                        <Icons.ShoppingCart className='mx-auto text-rose-600'/>
                        <strong>ECommerce</strong>
                    </div>
                    <div className='menu hover:border-gray'> 
                        <Icons.Cog className='mx-auto text-gray-600' />
                        <strong>Setup</strong>
                    </div>
                </div>      
                    
                {/* <Icons.Briefcase />
                <Icons.UserAdd />
                <Icons.UserRemove />
                */}

            </div>
  )
}

export default SideNav