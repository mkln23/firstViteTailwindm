
function Card(props){
    return (
        <>
  <div className="flex mb-2 divide-slate-100">
    <div className="col">
      <div id="image" >
        <img className="rounded-2xl @apply w-[120px] p-2.5 ;" src={props.pic}  alt="Movie" />
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex mx-1 p-1">
        <div className="font-bold">Movie : &nbsp;</div>
        <div className="movie_name">{props.movie}</div>
        <div className="font-bold"> &nbsp; {props.yr}</div>
      </div>
      <div className="flex mx-1 p-1">
        <div className="font-bold">Director : &nbsp;</div>
        <div className="dir">{props.dir}</div>
      </div>
      <div className="flex mx-1 p-1">
        <div className="font-bold">Genre :&nbsp;</div>
        <div className="plot">{props.genre}</div>
      </div>
      <div className="flex mx-1 p-1">
        {" "}
        <span>Know more at &nbsp; </span>
        <a href={props.link}>Imdb</a>
      </div>
      <div className="when">This movie is old</div>
    </div>
  </div>
</>
    )
}

// function when(yr){
//   if()
// }

export default Card;