import React from 'react'

const NavBar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand few-blod fs-2" href="#">La collection</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">produts</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
       <div className='buttons'>
         <a href='' className='btn btn-outline-dark'>
           <i className='fa fa-sing-in me-1'></i>login</a>
           <a href='' className='btn btn-outline-dark ms-2'>
           <i className='fa fa-sing-in'></i>register</a> 
           <a href='' className='btn btn-outline-dark ms-2'>
           <i className='fa fa-shopping-cart me-1'></i>carte</a> 
           
           

       </div>
       
      </div>
    </div>
  </nav></div>
  )
}

export default NavBar