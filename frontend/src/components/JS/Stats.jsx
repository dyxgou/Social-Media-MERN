import "../CSS/Stats.css"

const Stats = ({ Icon , colorIcon , text , value }) => {
  return (
    <div className="stats" >
      <div style={{color : colorIcon}} >
        { Icon && <Icon className="stats__icon"  /> }
      </div>

      <h2> {text} </h2>
      <span> {value} </span>

    </div>
  )
}

export default Stats
