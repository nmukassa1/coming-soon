

const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: .7 } });

gsap.set("g", { autoAlpha: 1 }); // flash of unwanted content

gsap.set("#BY-NY", {xPercent: -36})

gsap.to('svg', {
    scale: 1.2,
    duration: 4
})


tl
    .from(`#CREATED .str1`, {
        yPercent: -200,
        stagger: {
            each: .03,
            from: "end"
        },
        skewY: 60,
        skewX: 30.,
        scaleY: .9,
        opacity: 0,
        delay: .4
    })
    .from(`#BY-NY .str1`, {
        yPercent:215,
        stagger: {
            each: .03,
            from: "end"
        },
        skewY: 60,
        skewX: 30.,
        scaleY: .5,
        opacity: 0
    }, "-=.7")
    .to("#BY-NY", {
        xPercent: 0,
        ease: 'elastic.out(1, 0.5)',
    }, "1.3")
    .from("#hourglass", {
        xPercent: -100,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
    }, "-=.7")
    .to("#CREATED .str1", {
        skewX: 30,
        x: 30,
        stagger: {
            each: .03,
            from: "end"
        },
        opacity: 0,
        duration: .2,
    }, "+=1")
    .to("#BY-NY .str1", {
        skewX: 30,
        x: 30,
        stagger: {
            each: .03,
            from: "end"
        },
        opacity: 0,
        duration: .2,
    }, "<")
    .to("#hourglass", {
        x: 100,
        duration: 1.3,
        ease: 'elastic.out(1, 0.3)',
    }, "<")
    .to("#hourglass", {
        rotateZ: -360,
        transformOrigin: "center"
    }, "-=.8")
    .to("#hourglass", {
        yPercent: 600,
        duration: 1.3
    })
    .to("#hourglass", {
        yPercent: -1700,
        duration: 1.3
    }, "-=.7")
    .to("#reveal", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.3,
        ease: "power4.inOut"
    }, "<")
    .to("#reveal-2", {
        scaleY: 0,
        transformOrigin: "top",
        duration: .8,
        ease: "power4.inOut"
    }, "-=.7")
    // .to("#reveal-3", {
    //     scaleY: 0,
    //     transformOrigin: "top",
    //     duration: 1.3,
    //     ease: "power4.inOut"
    // }, "-=.7")