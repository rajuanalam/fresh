import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import Grouptwo from '../../assets/Grouptwo.png'
import Bestfashion from '../../assets/bestfashion.png'
import Groupthree from '../../assets/Groupthree.png'
import Heading from '../Heading';
import Paragraph from '../Paragraph';


const Fashion = () => {
  return (
    <section className="bg-white pt-[100px] pb-[115px]">
        <Container>
      <Flex>
      <div className="w-[775px] relative">
      <picture>
        <Image className="absolute top-[-60px] left-[570px] z-20" src={Grouptwo} alt="" />
      </picture>  
      <picture >
        <Image className="absolute left-0 z-30" src={Bestfashion} alt="" />
      </picture>
      </div>

      <div className="w-[545px]">
        <Heading text="Best Fashion Since 2010" as="h2" className="font-frank text-mainHeading font-bold pl-[10px] pt-[50px]" />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." className="font-pop text-2xl font-semibold pt-16 pr-[90px]"/>
      </div>
      </Flex>
      <div className="bg-fashionCounter w-[793px] py-[71px] ps-[75px] pe-[45px] ml-[540px] mt-[140px] rounded-20">
        <Flex className="justify-between">
          <div>
          <Heading text="2010" as="h4" className="font-Podkova text-mainHeading font-bold leading-none relative after:content-[''] after:absolute after:h-[143px] after:w-[2px] after:bg-black after:top-[-5px] after:right-[-27px]" />
          <Paragraph text="Founded" className="text-[28px] font-medium leading-none pt-7 ps-2" />
          </div>
          <div>
          <Heading text="5000+" as="h4" className="font-Podkova text-mainHeading font-bold leading-none relative after:content-[''] after:absolute after:h-[143px] after:w-[2px] after:bg-black after:top-[-5px] after:right-[-27px]" />
          <Paragraph text="Product Sold" className="text-[28px] font-medium  leading-none pt-7" />
          </div>
          <div>
          <Heading text="4500+" as="h4" className="font-Podkova text-mainHeading font-bold leading-none" />
          <Paragraph text="Best Reviews" className="text-[28px] font-medium  leading-none pt-7" />
          </div>
        </Flex>
          
      </div>
      <div className="relative">
      <picture>
        <Image className="absolute bottom-[-150px] left-[200px]" src={Groupthree} alt="" />
      </picture> 
      </div>
      </Container>
    </section>
  )
}

export default Fashion