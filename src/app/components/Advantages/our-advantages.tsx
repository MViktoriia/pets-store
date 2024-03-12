import Image from 'next/image';
import AdvantagesList from './advantages-list';
import ButtonLink from '../button-link';
import Text from '../text';
import { advantages } from '../../lib/utils/constants/advantages';
import SectionHeading from '../section-heading';

function OurAdvantages() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <div className="container flex flex-col justify-center items-center md:flex-row-reverse md:gap-6 lg:gap-8">
        <div className="">
          <SectionHeading className=" text-left mb-3 xl:text-xl">
            Чому ми найкращі?
          </SectionHeading>
          <Text className=" text-gray mb-6 xl:text-mdDesc xl:mb-9">
            Ми пропонуємо найякіснішу їжу з натуральних інгредієнтів, щоб
            забезпечити здоров’я та благополуччя вашого вихованця протягом
            усього життя
          </Text>
          <AdvantagesList advantages={advantages} />
        </div>

        <div className=" h-[200px] w-[343px] bg-cover object-top bg-[url('/images/dog-banner-sales-mobile-2x.png')] md:w-1/2 md:h-[620px] lg:w-[566px] lg:h-[523px] md:bg-[url('/images/dog-banner-sales-2x.png')]">
          <div className=" pt-3 pr-1 pb-[6px] pl-[117px] md:pt-[300px] md:pl-[120px] lg:pt-[250px] lg:pl-[150px] xl:pt-[157px] xl:pr-[46px] xl:pb-[104px] xl:pl-[294px]">
            <p className=" text-white text-base mb-3 xl:mb-[24px]">
              Мега розпродаж<span className="text-yellow"> до -75%</span>
            </p>
            <h2 className=" font-serif text-xl leading-[43.6px] font-bold text-white mb-6 xl:mb-[46px]">
              Фінальні
              <span className=" text-yellow"> розпродажі</span>
            </h2>
            <ButtonLink
              href="/programa-loyalnosti"
              className="px-[82px] py-[7px] border-yellow  hover:border-orange  hover:bg-yellow  hover:text-white active:border-cyan"
            >
              Button
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAdvantages;
