import gsap from 'gsap';
import { AboutMarkup } from './AboutMarkup';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';



export function About() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState({
    title: 'ABOUT ME',
    text: "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
    currentNum: 1,
  });


  

  useLayoutEffect(() => {
    const Elem = sectionRef.current;

    const updateText = (title, text, currentNum) => {
      const textObj = {
        title,
        text,
        currentNum,
      };

      setCurrentSlide(textObj);
    };

    let t2 = gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: `top top`,
        end: `+=${Elem.offsetWidth + 800}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `+=${Elem.offsetWidth + 800}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'ABOUT ME',
          "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
          1,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'ABOUT ME',
          "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
          1,
        ],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'ABOUT ME',
          "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
          1,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'ABOUT ME',
          "I'm a Front End Developer proficient in HTML, CSS, JavaScript, and React. I develop responsive web interfaces, optimize",
          1,
        ],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: ['Skills', '', 2],
        onReverseComplete: updateText,
        onReverseCompleteParams: ['Skills', '', 2],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: ['Skills', '', 2],
        onReverseComplete: updateText,
        onReverseCompleteParams: ['Skills', '', 2],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'WORK EXPERIENCE',
          'Focus Digital Syndicate (Barcelona, Spain)',
          3,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'WORK EXPERIENCE',
          'Focus Digital Syndicate (Barcelona, Spain)',
          3,
        ],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'WORK EXPERIENCE',
          'Focus Digital Syndicate (Barcelona, Spain)',
          3,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'WORK EXPERIENCE',
          'Focus Digital Syndicate (Barcelona, Spain)',
          3,
        ],
      })

      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'IT-EDUCATION',
          'IT School GoIT (Kyiv) - FullStack Developer',
          4,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'IT-EDUCATION',
          'IT School GoIT (Kyiv) - FullStack Developer',
          4,
        ],
      })
      .to(Elem, {
        onStart: updateText,

        onStartParams: [
          'IT-EDUCATION',
          'IT School GoIT (Kyiv) - FullStack Developer',
          4,
        ],
        onReverseComplete: updateText,
        onReverseCompleteParams: [
          'IT-EDUCATION',
          'IT School GoIT (Kyiv) - FullStack Developer',
          4,
        ],
      });

    return () => t2.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AboutMarkup title={currentSlide.title} text={currentSlide.text} number={currentSlide.currentNum}  sectionRef={sectionRef} />;
}
