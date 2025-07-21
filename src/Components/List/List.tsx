import ListEntry from "./ListEntry";
interface jsonObject{
    date: String,
    title: String,
    desc:String,
    link:string
};

function List(){
    
    const obj: jsonObject[] = [
        {
            "date": "May 8, 2025",
            "title": "Generalised Fans vs. Triangles",
            "desc": "In this paper we evaluated the Ramsey number of a fan with 2, 3-vertex blades vs. triangles",
            "link": "https://combinatorialpress.com/um-articles/vol-123/ramsey-theory-for-a-generalized-fan-versus-triangles/"
        },
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