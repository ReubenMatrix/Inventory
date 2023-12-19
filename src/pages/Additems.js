import React, { useState } from 'react'
import InputForm1 from '../components/InputForm1'
import InputForm2 from '../components/InputForm2'
import InputForm3 from '../components/InputForm3'
import InputForm4 from '../components/InputForm4'
import InputForm5 from '../components/InputForm5'
import Additemnavbar from '../components/Additemnavbar'
import InputForm from '../components/InputForm'


function Additems() {
  return (
    <main className="relative bg-lightcyan  w-full h-[1200px] text-left text-sm text-black font-inter">
      <Additemnavbar />
      <section
        className="absolute top-[20px]  left-[0px] w-[1148px] h-[381px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm />
      </section>
       <section
        className="absolute top-[290px]  left-[128px] w-[1148px] h-[381px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm1 />
      </section>

      <section
        className="absolute  top-[400px] left-[128px] w-[1148px] h-[381px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm2 />
      </section>

      <section
        className="absolute top-[520px] left-[128px] w-[1148px] h-[381px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm3 />
      </section>

      <section
        className="absolute  top-[640px] left-[128px] w-[1148px] h-[381px] overflow-hidden text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm4 />
      </section>

      <section
        className="absolute top-[760px] left-[128px] w-[1148px] h-[1500px] overflow-hidden  text-left text-xl text-black font-inter"
        id="input"
      >
        <InputForm5 />
      </section> 
</main>

    

  )
}

export default Additems
