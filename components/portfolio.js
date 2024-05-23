import Image from "next/image";
import React from "react";
import Container from "./container";

const Portfolio = (props) => {
  return (
    <section
      id="portfolio"
      class="group relative z-40 block scroll-mt-32 flex-row md:scroll-mt-60"
    >
      <div class="relative z-50 flex w-full flex-col items-start gap-[24px]">
        <div class="relative flex w-full flex-[0_0_auto] items-center justify-start gap-[24px] self-stretch"></div>
        <div class="z-50 inline-flex w-full max-w-full flex-col items-start justify-center gap-4 rounded-xl bg-black/40 p-6 backdrop-blur-[20px] md:max-w-[928px] md:flex-row md:items-center md:justify-start md:gap-12 md:p-12 lg:w-full lg:max-w-full lg:p-8">
          <a
            class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  h-[80px] min-w-[170px] absolute hover:animate-pulse"
            aria-label="Brahma Security Review logo"
            href="https://brahma.fi/"
          >
            <img
              alt="Brahma Security Review logo"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              data-nimg="1"
              class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
              src="https://spearbit.com/clients/primitive.svg"
            />
          </a>
          <div class="inline-flex shrink grow flex-col items-start justify-center gap-1 md:basis-2/3 lg:contents">
            <div class="relative flex-1 grow self-stretch text-3xl leading-[50px] text-white md:mt-px md:basis-1/4 md:text-4xl lg:mt-px lg:basis-1/4 lg:self-center lg:text-[1.3rem] lg:font-[400] lg:leading-[2rem] ">
              Brahma Security Review
            </div>
            <div class="grow basis-1/5 font-lato text-base font-normal leading-[30px] tracking-wide text-zinc-400 md:text-[22px] lg:shrink-0 lg:text-[0.8rem]">
              November 2023
            </div>
          </div>
          <div class="relative md:contents lg:flex ">
            <div class="grow justify-self-center md:shrink-0">
              <a
                class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[25px] py-[13px] rounded-[6px] shadow-[0px_0px_10px_0px_rgba(107,252,226,0.60)] hover:shadow-[0px_0px_10px_#6bfbe199] select:shadow-[0px_0px_10px_#6bfbe199] bg-Spearmint hover:bg-SpearMintHover shrink-0 flex justify-center items-center transition-all duration-300 ease-out gap-[24px]  absolute hover:animate-pulse"
                href="https://github.com/spearbit/portfolio/blob/master/pdfs/Brahma-Spearbit-Security-Review.pdf"
              >
                <div class="text-Gray950   font-bold  tracking-[0.96px] leading-7">
                  View Report
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="z-50 inline-flex w-full max-w-full flex-col items-start justify-center gap-4 rounded-xl bg-black/40 p-6 backdrop-blur-[20px] md:max-w-[928px] md:flex-row md:items-center md:justify-start md:gap-12 md:p-12 lg:w-full lg:max-w-full lg:p-8">
          <a
            class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  h-[80px] min-w-[170px] absolute hover:animate-pulse"
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
              src="https://spearbit.com/clients/primitive.svg"
            />
          </a>
          <div class="inline-flex shrink grow flex-col items-start justify-center gap-1 md:basis-2/3 lg:contents">
            <div class="relative flex-1 grow self-stretch text-3xl leading-[50px] text-white md:mt-px md:basis-1/4 md:text-4xl lg:mt-px lg:basis-1/4 lg:self-center lg:text-[1.3rem] lg:font-[400] lg:leading-[2rem] ">
              Liquid Collective
            </div>
            <div class="grow basis-1/5 font-lato text-base font-normal leading-[30px] tracking-wide text-zinc-400 md:text-[22px] lg:shrink-0 lg:text-[0.8rem]">
              September 2023
            </div>
          </div>
          <div class="relative md:contents lg:flex ">
            <div class="grow justify-self-center md:shrink-0">
              <a
                class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[25px] py-[13px] rounded-[6px] shadow-[0px_0px_10px_0px_rgba(107,252,226,0.60)] hover:shadow-[0px_0px_10px_#6bfbe199] select:shadow-[0px_0px_10px_#6bfbe199] bg-Spearmint hover:bg-SpearMintHover shrink-0 flex justify-center items-center transition-all duration-300 ease-out gap-[24px]  absolute hover:animate-pulse"
                href="https://github.com/spearbit/portfolio/blob/master/pdfs/LiquidCollectivePR-Spearbit-Security-Review-Sept.pdf"
              >
                <div class="text-Gray950   font-bold  tracking-[0.96px] leading-7">
                  View Report
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="z-50 inline-flex w-full max-w-full flex-col items-start justify-center gap-4 rounded-xl bg-black/40 p-6 backdrop-blur-[20px] md:max-w-[928px] md:flex-row md:items-center md:justify-start md:gap-12 md:p-12 lg:w-full lg:max-w-full lg:p-8">
          <a
            class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[10px] py-[5px] rounded-[3px]  gap-[24px] client-button noSelectColor relative inline-flex min-h-[60px] shrink-0  !animate-none items-center justify-center rounded-md bg-black/40 !p-[15px] hover:z-[10] hover:bg-black md:min-h-[83px] md:!p-[24px]  h-[80px] min-w-[170px] absolute hover:animate-pulse"
            aria-label="Primitive Security Review logo"
            href="https://primitive.finance/"
          >
            <img
              alt="Primitive Security Review logo"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              data-nimg="1"
              class="!h-auto !w-auto shrink-0 fill-white stroke-white !text-white will-change-transform"
              src="https://spearbit.com/clients/primitive.svg"
            />
          </a>
          <div class="inline-flex shrink grow flex-col items-start justify-center gap-1 md:basis-2/3 lg:contents">
            <div class="relative flex-1 grow self-stretch text-3xl leading-[50px] text-white md:mt-px md:basis-1/4 md:text-4xl lg:mt-px lg:basis-1/4 lg:self-center lg:text-[1.3rem] lg:font-[400] lg:leading-[2rem] ">
              Primitive Security Review
            </div>
            <div class="grow basis-1/5 font-lato text-base font-normal leading-[30px] tracking-wide text-zinc-400 md:text-[22px] lg:shrink-0 lg:text-[0.8rem]">
              July 2023
            </div>
          </div>
          <div class="relative md:contents lg:flex ">
            <div class="grow justify-self-center md:shrink-0">
              <a
                class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[25px] py-[13px] rounded-[6px] shadow-[0px_0px_10px_0px_rgba(107,252,226,0.60)] hover:shadow-[0px_0px_10px_#6bfbe199] select:shadow-[0px_0px_10px_#6bfbe199] bg-Spearmint hover:bg-SpearMintHover shrink-0 flex justify-center items-center transition-all duration-300 ease-out gap-[24px]  absolute hover:animate-pulse"
                href="https://github.com/spearbit/portfolio/blob/master/pdfs/Primitive-Spearbit-Security-Review-July.pdf"
              >
                <div class="text-Gray950   font-bold  tracking-[0.96px] leading-7">
                  View Report
                </div>
              </a>
            </div>
          </div>
        </div>
        <a
          class="noSelectColor inline-flex items-center justify-center relative text-[1rem] px-[25px] py-[13px] rounded-[6px] flex justify-center items-center gap-3 border border-zinc-800 shrink-0 bg-neutral-900/40 hover:bg-neutral-900/80 select:bg-neutral-900/80 border-solid gap-[12px]  absolute hover:animate-pulse"
          rel="noopener noreferrer"
          href="https://github.com/spearbit/portfolio"
        >
          <div class="text-white flex not-italic font-bold tracking-[0.96px] leading-7">
            View All
          </div>
          <svg
            class="w-6"
            width="100%"
            height="100%"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.97949C17.5242 2.97949 22 7.4553 22 12.9795C22 18.5037 17.5242 22.9795 12 22.9795C6.47581 22.9795 2 18.5037 2 12.9795C2 7.4553 6.47581 2.97949 12 2.97949ZM7.32258 14.7537H12V17.6126C12 18.044 12.5242 18.2617 12.8266 17.9553L17.4355 13.3222C17.625 13.1327 17.625 12.8303 17.4355 12.6408L12.8266 8.00369C12.5202 7.69723 12 7.91498 12 8.34643V11.2053H7.32258C7.05645 11.2053 6.83871 11.423 6.83871 11.6892V14.2698C6.83871 14.5359 7.05645 14.7537 7.32258 14.7537Z"
              fill="#25F2D0"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
