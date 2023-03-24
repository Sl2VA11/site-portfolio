import gsap from "gsap";
import { AboutMarkup } from "./AboutMarkup";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function About() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState({
    title: "ABOUT ME",
    text: "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
    currentNum: 1,
  });

  useEffect(() => {
    const Elem = sectionRef.current;
    if (!Elem) return;
    let t2;
    const updateText = (title, text, currentNum) => {
      const textObj = {
        title,
        text,
        currentNum,
      };

      setCurrentSlide(textObj);
    };

    t2 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetHeight * 4}`,
        scrub: 1,
        pin: true,
        pinReparent: false,
      },
    });
    const sections = [
      {
        title: "ABOUT ME",
        text: "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
        currentNum: 1,
      },
      {
        title: "Skills",
        text: "",
        currentNum: 2,
      },
      {
        title: "WORK EXPERIENCE",
        text: "Focus Digital Syndicate (Barcelona, Spain)",
        currentNum: 3,
      },
      {
        title: "IT-EDUCATION",
        text: "IT School GoIT (Kyiv) - FullStack Developer",
        currentNum: 4,
      },
      {
        title: "IT-EDUCATION",
        text: "IT School GoIT (Kyiv) - FullStack Developer",
        currentNum: 4,
      },
    ];

    sections.forEach((section) => {
      t2.add(
        () => updateText(section.title, section.text, section.currentNum),
        `+=${Elem.offsetHeight}`
      );
    });

    return () => {
      if (t2) {
        t2.kill();
      }
      if (t2.scrollTrigger) {
        t2.scrollTrigger.kill();
      }
      gsap.set(containerRef.current, { clearProps: "all" });
    };
  }, [sectionRef]);

  return (
    <div ref={containerRef}>
      <div ref={sectionRef}>
        <AboutMarkup
          title={currentSlide.title}
          text={currentSlide.text}
          number={currentSlide.currentNum}
          sectionRef={sectionRef}
        />
      </div>
    </div>
  );
}
