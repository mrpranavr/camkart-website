const styles = {
    boxWidth: "xl:max-w-[1280px] w-full mx-auto",
  
    heading2: "font-poppins font-bold xs:text-[52px] text-[40px] text-darkBlue xs:leading-[70.8px] leading-[63.8px] w-full",
    paragraph: "font-poppins font-normal text-textBlack text-[20px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    paddingXs: 'xs:pt-4 xs:pb-[140px]',
    paddingSs: 'ss:pt-16 ss:pb-[140px]',
    paddingSm: 'sm:pt-16 sm:pb-[140px]',
    paddingMd: 'md:pt-16 md:pb-[140px]',
    paddingLg: 'lg:pt-16 lg:pb-[140px]',
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;