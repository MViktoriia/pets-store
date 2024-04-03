import Image from 'next/image';
import ButtonLink from '@/app/components/button-link';
import Text from '@/app/components/text';
import Cats from '/public/images/three-cats-hero-section-2x.png';
import Dog from '/public/images/dog-hero-2x.png';
import SectionHeading from '../section-heading';
import SideContactPanel from '../SideContactsPanel/side-contact-panel';

function Hero() {
  return (
    <section className=" h-[248px] pt-3 bg-cyan relative md:h-[42vw] md:pt-[32px] xl:h-[521px]">
      <div className="container h-full">
        <div className="relative w-full h-full">
          <div
            className={`flex flex-col justify-center items-center absolute top-[14px] right-20 w-[260px] h-[110px] bg-yellow rounded-[40px] after:content-triangleMob after:absolute after:bottom-[-7%] after:translate-x-[50%] after:translate-y-[50%] md:right-[40%] md:bottom-2/3 md:w-[31vw] md:h-[15vw] md:after:translate-x-[150%] lg:after:translate-x-[200%] xl:w-[539px] xl:h-[242px] xl:top-[20px] xl:right-[534px] xl:after:w-[70px] xl:after:content-triangle xl:after:translate-x-[430%] xl:after:translate-y-[-45%]`}
          >
            <SectionHeading className="mb-5 md:text-[2vw] xl:mb-[47px]">
              Програма лояльності
            </SectionHeading>
            <ButtonLink
              href="/programa-loyalnosti"
              className=" border-cyan px-8 py-2 xl:px-[88px] xl:py-[13px] hover:border-orange  hover:text-orange active:text-yellow "
            >
              Button
            </ButtonLink>
          </div>
          <div className="w-[163px] h-[151px] absolute bottom-0 right-0 md:w-[37vw] md:h-[34vw] xl:w-[459px] xl:h-[426px]">
            <Image src={Dog} fill={true} alt="A dog in glasses" />
          </div>
        </div>
        <div className="w-[122px] h-[79px] absolute bottom-0 md:w-[33vw] md:h-[21vw] lg:w-[36vw] lg:h-[23vw] xl:w-[445px] xl:h-[287px]">
          <Image src={Cats} fill={true} alt="three cats sitting" />
        </div>
        <SideContactPanel />
      </div>
    </section>
  );
}

export default Hero;
