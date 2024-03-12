import Image from 'next/image';
import AdvantagesList from './advantages-list';
import ButtonLink from '../button-link';
import { CheckIcon } from '../icons';
import Text from '../text';
import { advantages } from '../../lib/utils/constants/advantages';
import SectionHeading from '../section-heading';

function OurAdvantages() {
  return (
    <section className="pt-6">
      <div className="container max-w-[100vw] md:pl-0">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse">
          <div className="md:pl-[30px] xl:pl-[60px]">
            <div className="">
              <SectionHeading className=" text-left mb-3 lg:text-[36px]">
                Чому ми найкращі?
              </SectionHeading>
              <Text className=" text-gray mb-6">
                Ми пропонуємо найякіснішу їжу з натуральних інгредієнтів, щоб
                забезпечити здоров’я та благополуччя вашого вихованця протягом
                усього життя
              </Text>
              <AdvantagesList advantages={advantages} />
            </div>
          </div>

          <div className=" h-[200px] w-[343px] bg-cover object-top bg-[url('/images/dog-banner-sales-mobile-2x.png')] md:w-[636px] md:h-[523px] md:bg-[url('/images/dog-banner-sales-2x.png')]">
            <div className=" pt-3 pr-1 pb-[6px] pl-[117px] md:pt-[250px] md:pl-[150px] xl:pt-[157px] xl:pr-[46px] xl:pb-[104px] xl:pl-[294px]">
              <p className=" text-white text-base mb-3 xl:mb-[24px]">
                Мега розпродаж<span className="text-yellow"> до -75%</span>
              </p>
              <h1 className=" font-serif text-[36px] leading-[43.6px] font-bold text-white mb-6 xl:mb-[46px]">
                Фінальні
                <span className=" text-yellow"> розпродажі</span>
              </h1>
              <ButtonLink
                href="/programa-loyalnosti"
                className="px-[82px] py-[7px] border-yellow  hover:border-orange  hover:bg-yellow  hover:text-white active:border-cyan"
              >
                Button
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAdvantages;
