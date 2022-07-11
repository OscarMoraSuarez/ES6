


const data={

    pdf:[
        {
            title:"titulo pdf",
            url:"http://cualquiercosa"
        }
    ],
    podcast:[

        {
            title: "titulo podcast",
            url: "http://cualquiercosa1"
        }, 
        {
            title: "titulo podcas1",
            url: "http://cualquiercosa1"
        }


    ]


}
/* const entradas=Object.keys(data); */
 const {pdf,podcast}=data;
 pdf.map(index=>(console.log(index)));
 podcast.map(index=>console.log(Object.keys(index)));
podcast.map(index => console.log(Object.values(index)));

console.warn('sin mapear');
console.log(pdf);
console.log("primera posicion podcast:",podcast[0]);
console.log("segunda posicion podcast:",podcast[1]); 


