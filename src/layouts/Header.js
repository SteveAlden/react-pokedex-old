import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Header() {
  return (
    <div className='center-navbar'>
      {/* <Navbar bg='dark' variant='dark'> */}
      <Navbar
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(20,20,20,0.7)',
          paddingBottom: '15px'
          // marginBottom: '100px'
          // marginBottom: '100px'
        }}
        variant='dark'
        // fixed='top'
      >
        <Navbar.Brand>
          <img
            alt=''
            // https://www.pikpng.com/pngl/m/59-590020_pokeball-png-photo-clipart.png
            // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/950cb3ae-f4e7-486e-9058-724c66bd7961/d7e57f0-a56ceb42-3c44-48d9-97dd-9b288b2c3e07.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MGNiM2FlLWY0ZTctNDg2ZS05MDU4LTcyNGM2NmJkNzk2MVwvZDdlNTdmMC1hNTZjZWI0Mi0zYzQ0LTQ4ZDktOTdkZC05YjI4OGIyYzNlMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6Y_fhBzzr2RnT2gX2PC7AWMNzw7BtULrxOmSQkd9BpA
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/950cb3ae-f4e7-486e-9058-724c66bd7961/d7e57f0-a56ceb42-3c44-48d9-97dd-9b288b2c3e07.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MGNiM2FlLWY0ZTctNDg2ZS05MDU4LTcyNGM2NmJkNzk2MVwvZDdlNTdmMC1hNTZjZWI0Mi0zYzQ0LTQ4ZDktOTdkZC05YjI4OGIyYzNlMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6Y_fhBzzr2RnT2gX2PC7AWMNzw7BtULrxOmSQkd9BpA'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          {'  '}
          Pokédex
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
export default Header;
