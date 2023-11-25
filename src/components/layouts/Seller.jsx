
import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import Shirt from '../../assets/Shirt.png'
import Pants from '../../assets/Pants.png'
import Heading from '../Heading';
import Button from '../Button';
import Paragraph from '../Paragraph';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Seller = () => {
  return (
    <section className="bg-bestsellbg pt-9 pb-[191px] relative ">
     <Container>
      <Flex>
        <div className="w-[457px] ms-[80px]">
          <Heading text="Best Seller Product" as="h2" className="font-frank text-mainHeading font-bold text-white leading-normal px-2.5" />

          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum  sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus." className="font-frank text-[24px] font-bold text-white  px-2.5" />

          <Button text="Learn MORE" className=" text-white font-semibold bg-black py-6 px-[86px] border-none  mt-16" />
        </div> 
        <div className="ms-[31px]">
          <picture>
           <Image className="pt-8" src={Shirt} alt="" />
          </picture>
          <div className="bg-white pb-[7px]">
            <div>
              <Flex className="justify-between pt-[14px] w-[143px] text-starColor ps-5">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </Flex>
            </div>
            <Heading text="Sweater Shirt" as="h4" className="font-pop text-bannerp font-semibold pt-3 ps-5"/>
             <Flex>
               <Paragraph text="$45.99" className="font-pop text-[24px] font-regular text-priceColor ps-5" />
               
               <Paragraph text="$35.99" className="font-pop text-[24px] font-regular ps-11" />
             </Flex>
          </div>
         
        </div>
          <div className="ms-[31px]">
            <picture>
              <Image className="pt-8" src={Pants} alt="" />
            </picture>
          <div className="bg-white pb-[7px]">
            <div>
              <Flex className="justify-between text-starColor pt-[14px] w-[143px] ps-5">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </Flex>
           </div>
           <Heading text="Pants fashion" as="h4" className="font-pop text-bannerp font-semibold pt-3 ps-5"/>
           <Flex>
            <Paragraph text="$55"  className="font-pop text-[24px] font-regular text-priceColor ps-5" />
            <Paragraph text="$44.99" className="font-pop text-[24px] font-regular  ps-14" />
          </Flex>
          </div>
         
        </div>
      </Flex>
      </Container>
    </section>
  )
}

export default Seller