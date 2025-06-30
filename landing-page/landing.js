const scrollRevealOption = {
distance: "50px" ,
origin: "bottom",
duration: 1000, 

}

scrollReveal().reveal(".container .letter-s" ,{
    duration: 1000,
    delay: 1000,
})

scrollReveal().reveal(".container img" ,{
    duration: 1000,
    delay: 1500,
})

ScrollReveal().reveal(".container .text__left" ,{
    ...scrollRevealOption,
    origin: "right",
    delay: 2000, 
}) 

ScrollReveal().reveal(".container .text__right" ,{
    ...scrollRevealOption,
    origin: "left",
    delay: 2000, 
})

ScrollReveal().reveal(".container .explore" ,{
    
    duration: 1000,
    delay: 2500, 
})

ScrollReveal().reveal(".container .catalogue" ,{
    
    duration: 1000,
    delay: 5000, 
})

ScrollReveal().reveal(".container .print" ,{
    
    duration: 1000,
    delay: 5500, 
})



// go to the scroll reveal website
