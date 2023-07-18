import type { NextPage } from "next";
import Image from "next/image";
import PurpleButton from "../../components/buttons/BaseButton";

import { Teams } from "../../utils/dataTeams";

const Description = () => (
  <section className="container-base pt-[30px] md:pt-[60px]">
    <div className="">
      <div
        className=" 
        md:grid md:grid-cols-2 md:grid-rows-3 md:grid-flow-row auto-rows-auto
      "
      >
        <h3
          className="section-title mb-5 text-[28px]
          md:mb-0
          lg:text-[40px]
          xl:text-[50px]
        "
        >
          Привет,<br></br> мы CyberDOGS
        </h3>

        <div
          className="relative h-[266px] mb-8 
          md:row-span-2 md:h-full
          lg:row-span-3
          self-start
        "
        >
          <Image
            src="/images/LogoPng.png"
            objectFit="contain"
            layout="fill"
            alt="logo"
          />
        </div>
        <div
          className="mb-10
          
        "
        >
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
            ab non magnam sequi earum quaerat ex, autem odio consequatur
            nesciunt quo voluptatum porro commodi quam assumenda at ut vitae.
          </p>
          <p>
            В ряду наших студентов есть спортсмены играющие в высших лигах,
            таких как: Dpc(worms), Fpl(AHAHAH) и другие
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OurTeams = () => {
  return (
    <section
      className="container-base pb-[32px]
              md:pb-[60px]
            "
    >
      <div className="hidden md:block">
        <div className="grid grid-cols-4">
          {Teams.map((item) => (
            <div key={item.name} className="relative [&>span]:align-bottom">
              <Image
                src={item.imageDesktop}
                width="330"
                height="330"
                objectFit="cover"
                alt=""
              />
            </div>
          ))}
          <div className="col-span-2 py-[18px] px-6">
            <h3 className="font-heading text-[16px] leading-[1em] mb-6">
              сборные ВУЗа по дисциплинам
            </h3>
            <ul className="font-heading text-[16px] leading-[1em] flex flex-col justify-between gap-[0.5em]">
              {Teams.map((item) => (
                <div key={item.name}>{item.name}</div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HistoryOfClub = () => {
  return (
    <div
      className="py-[32px]
      md:py-[60px]
    "
    >
      <section className="lg:container-base">
        <div className="container-base lg:px-0">
          <h3
            className="font-heading text-[18px] leading-[1em] mb-[24px]
          md:text-[24px] md:mb-[40px]
          "
          >
            История клуба развития киберспорта
          </h3>
          <h2
            className="font-heading text-[28px] leading-[1em] mb-8
          md:text-[50px] md:mb-[60px]
        "
          >
            От простого клуба<br></br> до организации Wild Griffins
          </h2>
        </div>

        <div className="md:flex md:gap-10">
          <div className="container-base md:max-w-none md:mx-0 lg:px-0 basis-1/2 ">
            <p className="font-text leading-6 mb-[32px] lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              soluta nihil illum quod fuga distinctio assumenda laborum
              molestiae, repellendus quas aliquid, minus reiciendis consequuntur
              animi totam numquam ducimus debitis dolor.
            </p>
          </div>

          <div
            className="pt-[24px] bg-purpule ml-auto
            lg:bg-main-bg lg:pt-0
          "
          >
            <div
              className="relative 
              lg:pl-10 lg:pb-10"
            >
              <div
                className="font-heading 
                  lg:block lg:w-[500px] lg:h-[500px] lg:bg-purpule lg:rounded-[50%]
              "
              >
                <ul className="mb-[24px] [&>li]:mb-3 [&>li]:text-white [&>li]:text-center lg:pt-[10%]">
                  <li>Илья {"НЕ ФИШ"} Коробкин</li>
                  <li>Роман {"ластхитпоперхоти"} Кушнарев</li>
                  <li>Антон {"mydach0"} Шкредов</li>
                  <li>Алексей {"322"} Березин</li>
                  <li>Амер {"миракл миракл просто..."} Аль..</li>
                </ul>
              </div>
              <div
                className="[&>span]:align-bottom flex items-center justify-center
                lg:absolute lg:bottom-0 lg:left-0
              "
              ></div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

const Additionals = () => {
  return (
    <div className="">
      <section
        className="container-base py-[32px]
        md:py-[60px]
      
      "
      >
        <h2
          className="font-heading text-[28px] leading-[1em] mb-8
          md:text-[50px] md:mb-[60px]
        "
        >
          АГАГАГАГ
        </h2>
        <p className="md:max-w-[536px]">
          orem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          accusantium voluptates doloribus, a in veritatis! Nihil,
        </p>
      </section>

      <LabelScroll />
      <section
        className="container-base py-[32px]
        md:py-[60px]
        lg:flex
        "
      >
        <div className="lg:basis-1/2">
          <h2
            className="font-heading text-[28px] leading-[1em] mb-8
          md:text-[50px] md:mb-[60px]
        "
          >
            Lorem ipsum.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            accusantium voluptates doloribus, a in veritatis! Nihil, voluptatum
            possimus adipisci ad temporibus, eaque dolore nisi harum dolores
            excepturi quam mollitia esse?
          </p>
        </div>

        <div
          className="py-[32px] flex items-center justify-center
          lg:ml-auto
          "
        >
          <div className="relative w-[375px]">
            <div className="absolute top-0 right-0">
              <Image
                src={"/images/about/rectangle.png"}
                width={154}
                height={154}
                alt=""
              />
            </div>
            <div className="[&>span]:align-bottom">
              <Image
                src={"/images/about/logoPolygon.png"}
                alt=""
                width={249}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LabelScroll = () => {
  return (
    <div className="hidden md:block relative h-[50px] overflow-hidden">
      <div className="w-[200%] flex items-center gap-[1em] absolute top-0 h-full animate-scrollLine">
        <span className="section-title block text-purpule whitespace-nowrap">
          Двигаю киберспорт СГТУ в соло |
        </span>
        <span className="section-title block text-purpule whitespace-nowrap">
          Не тир 50 тимы |
        </span>
        <span className="section-title block text-purpule whitespace-nowrap">
          Они точно выйгают инт|
        </span>
      </div>
    </div>
  );
};

const JoinUs = () => {
  return (
    <section
      className="py-8 bg-white
      md:py-[60px]
    "
    >
      <div
        className="container-base 
        md:grid md:grid-cols-2 md:gap-x-10
      "
      >
        <h2
          className="section-title leading-[1em] mb-[24px] text-main-bg
          order-2 md:mb-[40px]
        "
        >
          Присоединяйся к нашей команде
        </h2>
        <div
          className="md:row-span-2 mb-[32px]
          md:mb-0
        "
        >
          <p className="text-main-bg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            suscipit volupta
          </p>
          <p className="text-main-bg">
            s, vel delectus ad labore quaerat dolorum tenetur eos aliquid
            dolores dolor voluptatibus autem illum iste vero ipsum. Inventore,
            placeat!
          </p>
          <p className="text-main-bg">
            s, vel delectus ad labore quaerat dolorum tenetur eos aliquid
            dolores dolor voluptatibus autem illum iste vero ipsum. Inventore,
            placeat!t
          </p>
        </div>
        <PurpleButton className="order-2 md:max-w-[275px] hover:text-purple-dark hover:font-semibold">
          <a href="" target="_blank" rel="noreferrer">
            Стать участником
          </a>
        </PurpleButton>
      </div>
    </section>
  );
};

const About: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Description />
      <OurTeams />
      <HistoryOfClub />
      <Additionals />
      <JoinUs />
    </div>
  </>
);

export default About;
