"use client"
import Image from "next/image";
import Tab from "../../../components/common/Tab"

//swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import placeholder from "../../../resources/images/placeholder.jpg";
import Title from "../../../Typography/Title";

export default function page() {
  return (
    <main className="bg-white ">
       <div className="px-5 sm:p-10 sm:min-w-full sm:flex gap-5">
        <div className="left sm:w-1/2">
          <Title className="text-3xl font-bold py-9" primitive="h1">Trip title</Title>
          <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="w-[]" 
            Navigation 
            Scrollbar>
            <SwiperSlide> 
              <Image className="w-[370px] sm:w-[700px]" src={placeholder} width={500} alt="" />
            </SwiperSlide>
            <SwiperSlide> 
              <Image className="w-[370px] sm:w-[700px]" src={placeholder} width={500} alt="" />
            </SwiperSlide>
            <SwiperSlide> 
              <Image className="w-[370px] sm:w-[700px]" src={placeholder} width={500} alt="" />
            </SwiperSlide>
            <SwiperSlide> 
              <Image className="w-[370px] md:w-[700px]" src={placeholder} width={500} alt="" />
            </SwiperSlide>
            
          </Swiper>
        </div>
        <div className="right sm:w-1/2">
            <div className="h-28 p-5">

            </div> 
            <div className="border-t mb-6">
              <div className="py-5">abcbaj</div>
              <div className="flex gap-4 flex-col  ">
                <Tab>planaddad 1</Tab>
                <Tab>plan asdasd1</Tab>
                <Tab>plan asdasd1</Tab>
              </div>
            </div>
            <div className="border-t mb-6">
              <div className="py-5">abcbaj</div>
              <div className="flex gap-4 flex-col  ">
                <Tab>planaddad 1</Tab>
                <Tab>plan asdasd1</Tab>
              </div>
            </div>
           
            
        </div>
       </div>
       
    </main>
  )
}
