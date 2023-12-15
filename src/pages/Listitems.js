import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Details from '../components/Details';
import Navbar2 from '../components/Navbar2';
import Footerbuttons from '../components/Footerbuttons';
import Table from '../components/Table';

function Listitems() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      console.log("Button clicked!");
      navigate("/additem");
    };
  return (
    <main className="relative bg-lightcyan  w-full h-[1024px] overflow-hidden text-left text-sm text-black font-inter">
      <Navbar2 />
      <section className="absolute top-[180px] left-[144px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1151px] h-[100px] overflow-hidden text-left text-mini text-black font-inter">
        <Details />
      </section>

      <section className="absolute top-[282px] left-[144px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1151px] h-[400px] overflow-hidden text-left text-mini text-black font-inter">
        <Table />
      </section>

      <section
        className="absolute  top-[730px] left-[132px] w-[1148px] h-[390px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <Footerbuttons />
      </section>
    </main>

  )
}

export default Listitems
