import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import Bannerimage from '../../assets/Bannerimage.png'
import Grouppoints from '../../assets/Grouppoints.png'
import Heading from '../Heading';
import Button from '../Button';
import Paragraph from '../Paragraph';


const Banner = () => {
  return (
    <section className=" bg-bannerbgColor pt-28 pb-36 rounded-b-20">
        <Container>
         <Flex className="relative">
         <div className="w-1/2">
        <Heading text="Find The Best Fashion Style 
          For You" as="h1" className="font-pop text-mainHeading font-semibold  pl-2.5 pe-32"/>

        <Paragraph className="text-bannerp font-regular pt-9 pl-2.5 pr-36" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." />

        <Button text="SHOP NOW" className="text-white bg-black border-none py-6 px-24 ml-2.5 mt-[76px]" />
          
      </div>
      <div className="w-1/2">
        <Image className="absolute right-5 z-40" src={Bannerimage} alt=""/>
      </div>
      <Image className="absolute top-[420px] left-[660px] z-10" src={Grouppoints} alt=""/>
         </Flex>
        </Container>
    </section>
  )
}

export default Banner