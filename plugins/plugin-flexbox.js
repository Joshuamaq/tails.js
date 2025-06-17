// Flexbox Plugin - Flex direction, wrap, grow/shrink, justify/align
export default () => ({
  // === FLEX DIRECTION ===
  ".flex-row": { "flex-direction": "row" },
  ".flex-row-reverse": { "flex-direction": "row-reverse" },
  ".flex-col": { "flex-direction": "column" },
  ".flex-col-reverse": { "flex-direction": "column-reverse" },
  
  // === FLEX WRAP ===
  ".flex-wrap": { "flex-wrap": "wrap" },
  ".flex-nowrap": { "flex-wrap": "nowrap" },
  ".flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },
  
  // === FLEX ===
  ".flex-1": { flex: "1 1 0%" },
  ".flex-auto": { flex: "1 1 auto" },
  ".flex-initial": { flex: "0 1 auto" },
  ".flex-none": { flex: "none" },
  
  // === GROW ===
  ".grow": { "flex-grow": "1" },
  ".grow-0": { "flex-grow": "0" },
  
  // === SHRINK ===
  ".shrink": { "flex-shrink": "1" },
  ".shrink-0": { "flex-shrink": "0" },
  
  // === FLEX BASIS - SPACING VALUES ===
  ".basis-0": { "flex-basis": "0px" },
  ".basis-0\\.5": { "flex-basis": "0.125rem" },
  ".basis-1": { "flex-basis": "0.25rem" },
  ".basis-1\\.5": { "flex-basis": "0.375rem" },
  ".basis-2": { "flex-basis": "0.5rem" },
  ".basis-2\\.5": { "flex-basis": "0.625rem" },
  ".basis-3": { "flex-basis": "0.75rem" },
  ".basis-3\\.5": { "flex-basis": "0.875rem" },
  ".basis-4": { "flex-basis": "1rem" },
  ".basis-5": { "flex-basis": "1.25rem" },
  ".basis-6": { "flex-basis": "1.5rem" },
  ".basis-7": { "flex-basis": "1.75rem" },
  ".basis-8": { "flex-basis": "2rem" },
  ".basis-9": { "flex-basis": "2.25rem" },
  ".basis-10": { "flex-basis": "2.5rem" },
  ".basis-11": { "flex-basis": "2.75rem" },
  ".basis-12": { "flex-basis": "3rem" },
  ".basis-14": { "flex-basis": "3.5rem" },
  ".basis-16": { "flex-basis": "4rem" },
  ".basis-20": { "flex-basis": "5rem" },
  ".basis-24": { "flex-basis": "6rem" },
  ".basis-28": { "flex-basis": "7rem" },
  ".basis-32": { "flex-basis": "8rem" },
  ".basis-36": { "flex-basis": "9rem" },
  ".basis-40": { "flex-basis": "10rem" },
  ".basis-44": { "flex-basis": "11rem" },
  ".basis-48": { "flex-basis": "12rem" },
  ".basis-52": { "flex-basis": "13rem" },
  ".basis-56": { "flex-basis": "14rem" },
  ".basis-60": { "flex-basis": "15rem" },
  ".basis-64": { "flex-basis": "16rem" },
  ".basis-72": { "flex-basis": "18rem" },
  ".basis-80": { "flex-basis": "20rem" },
  ".basis-96": { "flex-basis": "24rem" },
  
  // === FLEX BASIS - SPECIAL VALUES ===
  ".basis-auto": { "flex-basis": "auto" },
  ".basis-px": { "flex-basis": "1px" },
  
  // === FLEX BASIS - FRACTIONS ===
  ".basis-1\\/2": { "flex-basis": "50%" },
  ".basis-1\\/3": { "flex-basis": "33.333333%" },
  ".basis-2\\/3": { "flex-basis": "66.666667%" },
  ".basis-1\\/4": { "flex-basis": "25%" },
  ".basis-2\\/4": { "flex-basis": "50%" },
  ".basis-3\\/4": { "flex-basis": "75%" },
  ".basis-1\\/5": { "flex-basis": "20%" },
  ".basis-2\\/5": { "flex-basis": "40%" },
  ".basis-3\\/5": { "flex-basis": "60%" },
  ".basis-4\\/5": { "flex-basis": "80%" },
  ".basis-1\\/6": { "flex-basis": "16.666667%" },
  ".basis-2\\/6": { "flex-basis": "33.333333%" },
  ".basis-3\\/6": { "flex-basis": "50%" },
  ".basis-4\\/6": { "flex-basis": "66.666667%" },
  ".basis-5\\/6": { "flex-basis": "83.333333%" },
  ".basis-1\\/12": { "flex-basis": "8.333333%" },
  ".basis-2\\/12": { "flex-basis": "16.666667%" },
  ".basis-3\\/12": { "flex-basis": "25%" },
  ".basis-4\\/12": { "flex-basis": "33.333333%" },
  ".basis-5\\/12": { "flex-basis": "41.666667%" },
  ".basis-6\\/12": { "flex-basis": "50%" },
  ".basis-7\\/12": { "flex-basis": "58.333333%" },
  ".basis-8\\/12": { "flex-basis": "66.666667%" },
  ".basis-9\\/12": { "flex-basis": "75%" },
  ".basis-10\\/12": { "flex-basis": "83.333333%" },
  ".basis-11\\/12": { "flex-basis": "91.666667%" },
  ".basis-full": { "flex-basis": "100%" },
  
  // === JUSTIFY CONTENT ===
  ".justify-start": { "justify-content": "flex-start" },
  ".justify-center": { "justify-content": "center" },
  ".justify-end": { "justify-content": "flex-end" },
  ".justify-between": { "justify-content": "space-between" },
  ".justify-around": { "justify-content": "space-around" },
  ".justify-evenly": { "justify-content": "space-evenly" },
  ".justify-normal": { "justify-content": "normal" },
  ".justify-stretch": { "justify-content": "stretch" },
  
  // === JUSTIFY ITEMS ===
  ".justify-items-start": { "justify-items": "start" },
  ".justify-items-end": { "justify-items": "end" },
  ".justify-items-center": { "justify-items": "center" },
  ".justify-items-stretch": { "justify-items": "stretch" },
  
  // === JUSTIFY SELF ===
  ".justify-self-auto": { "justify-self": "auto" },
  ".justify-self-start": { "justify-self": "start" },
  ".justify-self-end": { "justify-self": "end" },
  ".justify-self-center": { "justify-self": "center" },
  ".justify-self-stretch": { "justify-self": "stretch" },
  
  // === ALIGN ITEMS ===
  ".items-start": { "align-items": "flex-start" },
  ".items-center": { "align-items": "center" },
  ".items-end": { "align-items": "flex-end" },
  ".items-baseline": { "align-items": "baseline" },
  ".items-stretch": { "align-items": "stretch" },
  
  // === ALIGN CONTENT ===
  ".content-normal": { "align-content": "normal" },
  ".content-center": { "align-content": "center" },
  ".content-start": { "align-content": "flex-start" },
  ".content-end": { "align-content": "flex-end" },
  ".content-between": { "align-content": "space-between" },
  ".content-around": { "align-content": "space-around" },
  ".content-evenly": { "align-content": "space-evenly" },
  ".content-baseline": { "align-content": "baseline" },
  ".content-stretch": { "align-content": "stretch" },
  
  // === ALIGN SELF ===
  ".self-auto": { "align-self": "auto" },
  ".self-start": { "align-self": "flex-start" },
  ".self-end": { "align-self": "flex-end" },
  ".self-center": { "align-self": "center" },
  ".self-stretch": { "align-self": "stretch" },
  ".self-baseline": { "align-self": "baseline" },
  
  // === PLACE ITEMS ===
  ".place-items-start": { "place-items": "start" },
  ".place-items-end": { "place-items": "end" },
  ".place-items-center": { "place-items": "center" },
  ".place-items-baseline": { "place-items": "baseline" },
  ".place-items-stretch": { "place-items": "stretch" },
  
  // === PLACE CONTENT ===
  ".place-content-center": { "place-content": "center" },
  ".place-content-start": { "place-content": "start" },
  ".place-content-end": { "place-content": "end" },
  ".place-content-between": { "place-content": "space-between" },
  ".place-content-around": { "place-content": "space-around" },
  ".place-content-evenly": { "place-content": "space-evenly" },
  ".place-content-baseline": { "place-content": "baseline" },
  ".place-content-stretch": { "place-content": "stretch" },
  
  // === PLACE SELF ===
  ".place-self-auto": { "place-self": "auto" },
  ".place-self-start": { "place-self": "start" },
  ".place-self-end": { "place-self": "end" },
  ".place-self-center": { "place-self": "center" },
  ".place-self-stretch": { "place-self": "stretch" }
});
