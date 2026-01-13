import ListEntry from "./ListEntry";


function List(){
    
    const obj: researchObject[] = [
        {
            "date": "June 6, 2025",
            "title": "Ramsey Theory for Generalised Fans vs. Triangles",
            "desc": `<div> In this paper we provide the Ramsey number for 
                        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>r</mi><mo form="prefix" stretchy="false">(</mo><msub><mi>F</mi><mrow><mn>3</mn><mo separator="true">,</mo><mn>2</mn></mrow></msub><mo separator="true">,</mo><msub><mi>K</mi><mn>3</mn></msub><mo form="postfix" stretchy="false">)</mo><mo>=</mo><mn>1</mn><mn>3</mn></mrow></math>
                        and the Gallai-Ramsey number for
                   
                        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><msub><mi>r</mi></msub><mo form="prefix" stretchy="false">(</mo><msub><mi>F</mi><mrow><mn>3</mn><mo separator="true">,</mo><mn>2</mn></mrow></msub><mo separator="true">,</mo><msub><mi>K</mi><mn>3</mn></msub><mo separator="true">,</mo><msub><mi>K</mi><mn>3</mn></msub><mo form="postfix" stretchy="false">)</mo><mo>=</mo><mn>3</mn><mn>1</mn></mrow></math>
                    </div>`, 
            "link": "https://combinatorialpress.com/um-articles/vol-123/ramsey-theory-for-a-generalized-fan-versus-triangles/"
        },
        {
            "date": "December 12, 2025",
            "title": "The Star-Critical Ramsey Number and related critical colorings",
            "desc": `<div> In this paper we provide the star-critical Gallai-Ramsey number for 
                        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><msub><mi>r</mi><mo>*</mo></msub><mo form="prefix" stretchy="false">(</mo><msub><mi>F</mi><mrow><mn>3</mn><mo separator="true">,</mo><mn>2</mn></mrow></msub><mo separator="true">,</mo><msub><mi>K</mi><mn>3</mn></msub><mo separator="true">,</mo><msub><mi>K</mi><mn>3</mn></msub><mo form="postfix" stretchy="false">)</mo></mrow></math>               
            </div>`, 
            "link": "https://combinatorialpress.com/cn-articles/volume-236/the-star-critical-gallai-ramsey-number-gr_f_32-k_3-k_3-and-related-critical-colorings/"
            
        }

    ];


    
    return(
        <div className="rounded-2xl">
           <ul>
            {obj.map((item, index) => (
                <li key={index}>
                <ListEntry date={item.date} title={item.title} link={item.link} desc={item.desc}/>
                </li>
            ))}
            </ul>
        </div>
    );

};

export default List;