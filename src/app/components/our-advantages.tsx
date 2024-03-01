import Image from 'next/image';
import AdvantagesList from './advantages-list';
import ButtonLink from './button-link';
import { CheckIcon } from './icons';

function OurAdvantages() {
  return (
    <section className="pt-6">
      <div className="">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse">
          <div className="container md:pl-[60px]">
            <div className="">
              <h2 className="font-serif text-[24px] text-center font-normal mb-3 lg:text-[36px]">
                Чому ми найкращі?
              </h2>
              <p className=" text-gray text-base mb-6">
                Ми пропонуємо найякіснішу їжу з натуральних інгредієнтів, щоб
                забезпечити здоров’я та благополуччя вашого вихованця протягом
                усього життя
              </p>
              <ul className=" md:flex">
                <div className="mr-[23px]">
                  <li className=" mb-6">
                    <div className="flex justify-start items-center mb-3">
                      <CheckIcon className=" fill-yellow mr-3" />
                      <h3 className=" text-base font-bold">Безпечна оплата</h3>
                    </div>
                    <p>
                      Важливі кроки для захисту транзакції від ризику порушення
                    </p>
                  </li>
                  <li className=" mb-6">
                    <div className="flex justify-start items-center mb-3">
                      <CheckIcon className=" fill-yellow mr-3" />
                      <h3 className=" text-base font-bold">
                        Безкоштовна доставка
                      </h3>
                    </div>
                    <p>
                      Купуйте товар на суму понад 1000 грн та отримайте
                      безкоштовну пропозицію доставки додому
                    </p>
                  </li>
                </div>
                <div>
                  <li className=" mb-6">
                    <div className="flex justify-start items-center mb-3">
                      <CheckIcon className=" fill-yellow mr-3" />
                      <h3 className=" text-base font-bold">Краща якість</h3>
                    </div>
                    <p>
                      Ми пообіцяли забезпечити найкращу якість їжі для домашніх
                      тварин
                    </p>
                  </li>
                  <li className=" mb-6">
                    <div className="flex justify-start items-center mb-3">
                      <CheckIcon className=" fill-yellow mr-3" />
                      <h3 className=" text-base font-bold">
                        Політика легкого повернення
                      </h3>
                    </div>
                    <p>
                      Право повернути його протягом 30 днів і отримати
                      відшкодування, якщо він несправний
                    </p>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className=" h-[200px] w-[343px] bg-cover object-top bg-[url('/images/dog-banner-sales-mobile-2x.png')] md:w-[636px] md:h-[523px] md:bg-[url('/images/dog-banner-sales-2x.png')]">
            <div className=" pt-3 pr-1 pb-[6px] pl-[117px] xl:pt-[157px] xl:pr-[46px] xl:pb-[104px] xl:pl-[294px]">
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
