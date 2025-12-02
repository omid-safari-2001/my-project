import item from "./item"

const TimeList = (props) => {
    return (
        <div className="main_time_list">
            {props.children.map((c)=>(
                <item key={Math.random()}>{c}</item>
            ))}
            
        </div>
    )
}

export default TimeList;