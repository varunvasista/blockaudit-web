import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/heroimg-removebg-preview.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2" id="herocontainer">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4x2 font-bold leading-snug tracking-tight text-white-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              INDUSTRY LEADING WEB3 SECURITY
            </h1>
            <p className="py-5 text-xl leading-normal text-white-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              BlockAudit is a distributed network of industry-leading security
              researchers tackling the most complex and mission-critical
              protocols across web3.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="x.com"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 bg-brown-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  id="Layer_1"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  
                  
                >
                  <title>Follow on X</title>
                  <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                </svg>
                
                
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div className="">
            <Image
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              src={heroImg}
              width="1000"
              height="800"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              id="herologo"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-white-700 dark:text-white">
            Trusted by <span className="text-indigo-600">100+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <section id="clients" class="scrollbar-hide bg-transparent">
              <div class="relative z-10 my-2 grid grid-cols-3 gap-1 md:gap-3 xl:grid-cols-7 ">
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Morpho logo"
                  href="https://morpho.fi/"
                >
                  <img
                    alt="Morpho logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/morpho.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Olympus logo"
                  href="https://olympusdao.finance/"
                >
                  <img
                    alt="Olympus logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/olympus.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="OpenSea logo"
                  href="https://opensea.io/"
                >
                  <img
                    alt="OpenSea logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/opensea.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Badger logo"
                  href="https://badger.finance/"
                >
                  <img
                    alt="Badger logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/badger.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Alchemy logo"
                  href="https://www.alchemy.com/"
                >
                  <img
                    alt="Alchemy logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/alchemy.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="zkSync logo"
                  href="https://zksync.io/"
                >
                  <img
                    alt="zkSync logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/zkSync.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Velodrome logo"
                  href="https://velo.org/"
                >
                  <img
                    alt="Velodrome logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/velodrome.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Coinbase logo"
                  href="https://www.coinbase.com/"
                >
                  <img
                    alt="Coinbase logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/coinbase.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Redacted logo"
                  href="https://redacted.finance/"
                >
                  <img
                    alt="Redacted logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/redacted.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Kiln logo"
                  href="https://kiln.fi/"
                >
                  <img
                    alt="Kiln logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/kiln.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Base logo"
                  href="https://baseprotocol.org/"
                >
                  <img
                    alt="Base logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/base.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Polygon logo"
                  href="https://polygon.technology/"
                >
                  <img
                    alt="Polygon logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/polygon.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="LI.FI logo"
                  href="https://li.fi/"
                >
                  <img
                    alt="LI.FI logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/lifi.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Optimism logo"
                  href="https://optimism.io/"
                >
                  <img
                    alt="Optimism logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/optimism.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Goldfinch logo"
                  href="https://goldfinch.finance/"
                >
                  <img
                    alt="Goldfinch logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/goldfinch.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Connext logo"
                  href="https://connext.network/"
                >
                  <img
                    alt="Connext logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/connext.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="SudoSwap logo"
                  href="https://sudoswap.xyz/"
                >
                  <img
                    alt="SudoSwap logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/sudoswap.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Uniswap logo"
                  href="https://uniswap.org/"
                >
                  <img
                    alt="Uniswap logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/uniswap.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Liquid Collective logo"
                  href="https://liquidcollective.io/"
                >
                  <img
                    alt="Liquid Collective logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/liquid.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Primitive logo"
                  href="https://primitive.finance/"
                >
                  <img
                    alt="Primitive logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/primitive.svg"
                  />
                </a>
                <a
                  class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  absolute hover:animate-pulse"
                  aria-label="Gauntlet logo"
                  href="https://gauntlet.network/"
                >
                  <img
                    alt="Gauntlet logo"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
                    src="https://spearbit.com/clients/gauntlet.svg"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

function AmazonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="33"
      fill="none"
      viewBox="0 0 110 33"
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          d="M67.776 25.783c-6.323 4.676-15.521 7.167-23.455 7.167-11.114 0-21.079-4.1-28.667-10.923-.575-.536-.077-1.264.651-.843 8.163 4.752 18.243 7.589 28.668 7.589 7.013 0 14.755-1.457 21.884-4.485 1.073-.421 1.954.729.92 1.495z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M70.42 22.756c-.804-1.035-5.365-.499-7.396-.23-.613.076-.728-.46-.153-.844 3.64-2.567 9.581-1.8 10.271-.958.69.843-.192 6.822-3.603 9.658-.536.422-1.034.192-.804-.383.766-1.916 2.49-6.17 1.686-7.243z"
          clipRule="evenodd"
        ></path>
        <path d="M63.139 3.67V1.177c0-.383.268-.613.613-.613h11.115c.345 0 .651.268.651.613v2.108c0 .345-.306.805-.843 1.571l-5.749 8.202c2.146-.038 4.408.268 6.324 1.341.421.23.536.614.575.959v2.644c0 .383-.383.805-.805.575-3.411-1.801-7.972-1.993-11.728.038-.383.192-.805-.191-.805-.575v-2.529c0-.383 0-1.073.422-1.686l6.669-9.543H63.79c-.344 0-.651-.269-.651-.614zm-40.51 15.445h-3.373c-.306-.039-.575-.269-.613-.575V1.217c0-.345.307-.614.652-.614h3.142c.345 0 .575.269.613.575V3.44h.077C23.932 1.255 25.503.22 27.573.22c2.108 0 3.45 1.035 4.369 3.22.805-2.185 2.683-3.22 4.676-3.22 1.418 0 2.95.575 3.909 1.916 1.073 1.457.843 3.565.843 5.443v10.96c0 .346-.306.614-.651.614h-3.335c-.345-.038-.613-.307-.613-.613V9.342c0-.729.077-2.568-.077-3.258-.268-1.15-.996-1.495-1.992-1.495-.805 0-1.687.537-2.032 1.418-.345.882-.306 2.338-.306 3.335v9.198c0 .345-.307.613-.652.613H28.34c-.345-.038-.613-.307-.613-.613V9.342c0-1.917.307-4.791-2.07-4.791-2.414 0-2.337 2.76-2.337 4.79v9.199c-.038.306-.307.575-.69.575zM85.099.22c5.021 0 7.742 4.293 7.742 9.773 0 5.289-2.99 9.505-7.741 9.505-4.906 0-7.589-4.293-7.589-9.658C77.473 4.436 80.194.22 85.1.22zm0 3.564c-2.49 0-2.644 3.411-2.644 5.52 0 2.107-.038 6.63 2.606 6.63 2.606 0 2.76-3.641 2.76-5.864 0-1.457-.077-3.22-.499-4.6-.383-1.226-1.15-1.686-2.222-1.686zm14.22 15.33h-3.373c-.345-.038-.614-.306-.614-.613V1.14a.662.662 0 01.652-.575h3.143c.306 0 .536.23.613.498v2.645h.077c.958-2.376 2.261-3.488 4.599-3.488 1.494 0 2.989.537 3.947 2.031.882 1.38.882 3.718.882 5.404v10.923c-.039.307-.307.537-.652.537h-3.373c-.306-.039-.574-.269-.613-.537V9.15c0-1.916.23-4.676-2.108-4.676-.804 0-1.571.537-1.954 1.38-.46 1.073-.537 2.108-.537 3.296V18.5a.702.702 0 01-.69.614zm-41.622-.038a.693.693 0 01-.805.077c-1.111-.92-1.341-1.38-1.955-2.261-1.84 1.878-3.18 2.453-5.557 2.453-2.836 0-5.059-1.764-5.059-5.251 0-2.76 1.495-4.6 3.603-5.519 1.84-.805 4.407-.958 6.362-1.188v-.422c0-.804.076-1.763-.422-2.452-.421-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.72 2.031-.078.307-.27.614-.576.614l-3.257-.345c-.269-.077-.575-.269-.499-.69.767-3.986 4.331-5.174 7.55-5.174 1.648 0 3.795.421 5.098 1.686 1.648 1.533 1.495 3.603 1.495 5.826v5.25c0 1.571.651 2.261 1.264 3.143.23.307.268.69 0 .881-.728.575-1.954 1.648-2.644 2.223zm-3.411-8.24v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603zm-41.698 8.317c-1.112-.92-1.342-1.38-1.955-2.261-1.84 1.878-3.181 2.453-5.557 2.453-2.836 0-5.06-1.764-5.06-5.251 0-2.76 1.496-4.6 3.603-5.519 1.84-.805 4.408-.958 6.362-1.188v-.422c0-.804.077-1.763-.421-2.452-.422-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.721 2.031-.077.307-.268.614-.575.614L1.128 5.93C.86 5.854.553 5.662.63 5.24 1.397 1.255 4.96.067 8.18.067c1.648 0 3.794.421 5.098 1.686 1.647 1.533 1.494 3.603 1.494 5.826v5.25c0 1.571.652 2.261 1.265 3.143.23.307.268.69 0 .881-.728.575-1.955 1.648-2.644 2.223a.693.693 0 01-.805.077zm-2.568-8.317v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H109.272V33H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Hero;
