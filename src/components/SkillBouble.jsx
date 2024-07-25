
export default function SkillBouble(props) {
    return (
        <div className={`${props.width} ${props.heigth} ${props.grid} font-Jost font-bold flex justify-center items-center gap-3 ${props.text} rounded-xl py-1 ${props.color} shadow-xl hover:translate-y-1 hover:translate-x-1 `}>
            <h3>{props.name}</h3>
            <i>{props.icon}</i>
        </div>
    )
}