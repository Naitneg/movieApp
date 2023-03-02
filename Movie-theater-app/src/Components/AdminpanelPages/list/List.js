import React from 'react'
import { Datatable } from '../../Adminpanel/datatable/Datatable';
import Navbar from '../../Adminpanel/navbar/Navbar'
import Sidebar from '../../Adminpanel/sidebar/Sidebar'
import "./list.css";

function List({columns}) {
  return (
    <div className='list1'>
      <Sidebar/>
      <div className="listContainer1">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List