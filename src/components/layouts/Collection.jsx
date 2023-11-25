import React from 'react'
import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import Orangerec from '../../assets/Orangerec.png';
import Sweater from '../../assets/Sweater.png';
import Jeans from '../../assets/Jeans.png';
import Baskets from '../../assets/Baskets.png';
import Heading from '../Heading';
import Button from '../Button';


const Collection = () => {
  return (
    <section className='bg-white pt-[217px] pb-[135px] relative'>
        <Container>
        <picture>
        <Image className="absolute bottom-0 right-0" src={Orangerec} alt=""/>
        </picture>
        <div>
          <Heading text="New Collection" as="h2" className="font-frank text-mainHeading font-bold text-center"/>
        </div>
        <Flex className="pt-[120px] justify-evenly">
          <picture className="relative group">
          <Image  src={Sweater} alt=""/>
          
          <Button text="Sweater" className="font-regular  bg-white py-2.5 px-[105px] rounded-20 text-center border-none absolute bottom-[45px] left-[21px] group-hover:bg-white group-hover:px-[122px] group-hover:left-[1px] duration-[0.5s]" />
          </picture>
          <picture className="relative group">
          <Image  src={Jeans} alt=""/>
          <Button text="Jeans"  className="font-regular bg-white px-[120px] py-2.5 rounded-20 text-center border-none absolute bottom-[45px] left-[21px] group-hover:bg-white group-hover:px-[137px] group-hover:left-[5px] duration-[0.5s]"/>
          </picture>
          <picture className="relative group">
          <Image  src={Baskets} alt=""/>
          <Button text="Baskets" className="font-regular bg-white  px-[130px] py-2.5 rounded-20 text-center border-none absolute bottom-[45px] left-[21px] group-hover:bg-white group-hover:px-[147px] group-hover:left-[3px] duration-[0.5s]"/>
          </picture>
        </Flex>
        </Container>
    </section>
  )
}

export default Collection