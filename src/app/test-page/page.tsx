import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const page = () => {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[1024px] px-20 py-12 max-md:px-5">
      <img
        loading="lazy"
        src="/Rectangle.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <MaxWidthWrapper className="max-w-8xl">
        <div className="relative self-stretch flex items-center justify-between gap-5 mx-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
          <div className="flex items-stretch justify-between gap-2 my-auto max-md:justify-center">
            <div className="justify-center text-white text-center text-base font-bold leading-6 tracking-wide uppercase whitespace-nowrap">
              Shop{" "}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e6a42411ae3984e99303b432d6c99e17e9d672fcfbbe0d61923573308350a14?"
              className="aspect-[1.6] object-contain object-center w-2 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="justify-center text-white text-center text-base font-bold leading-6 tracking-wide uppercase">
              Learn{" "}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92e4b8ec7ee9af80c369e2b5d2f6eb505abf27fb65b7a0174087526a58a8d582?"
              className="aspect-[1.6] object-contain object-center w-2 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-4 max-md:justify-center">
            <div className="bg-white flex items-center justify-between gap-2.5 pl-4 pr-3 py-3 rounded-lg">
              <div className="justify-center text-neutral-800 text-base font-bold leading-5 tracking-wide uppercase grow whitespace-nowrap my-auto">
                Get Started{" "}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ecda7433862788c3aaefadd600f7e90d7122a0745c65b2a191ecbafc2ac6a32?"
                className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2c0e5f332634e66e974e23ce282b87b72783a8cc20679e2201928ec5a761e94?"
              className="aspect-square object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba33a1ba9890b08b135520f83a7890dba2ca2affa271deb5905af149d026e52?"
              className="aspect-square object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
        </div>
        <div className="relative justify-center text-white text-7xl font-bold leading-[82px] tracking-wider self-stretch max-w-[552px] mt-56 mx-4 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mr-2.5 max-md:mt-10">
          Press play <br />
          on our headphones
        </div>
        <div className="relative justify-center text-white text-3xl font-bold leading-10 tracking-wide self-stretch max-w-[501px] mt-10 mx-4 max-md:max-w-full max-md:mr-2.5">
          Now available in Halloween <br />
          Limited Editions{" "}
        </div>
        <div className="relative bg-orange-500 flex items-center gap-5 ml-4 mt-16 mb-28 pl-10 pr-6 py-8 rounded-2xl self-start max-md:ml-2.5 max-md:my-10 max-md:px-5">
          <div className="justify-center text-white text-2xl font-bold leading-8 tracking-wide uppercase grow whitespace-nowrap my-auto">
            Get Started
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-[25px] overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
