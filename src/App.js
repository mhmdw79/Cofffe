import './App.css';
import icon from "./Rectangle.png"
import coffeIcon from "./coffee.png"
import Arrow from "./ArrowArcRight.png"
import iconButton from "./Coffeebutton.png"
function App() {
  return (
    <div className='App'>
      <div className='secOne'>
      <div>
        <img src={icon} alt="icon"/>
      </div>
      <div className='nav'>
        <ul>
          <li><a  href="/">Order Now</a></li>
          <li><a href="/">Book Table</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Customize</a></li>

        </ul>
      </div>
      </div>
<div className="secTwo">
<div className="text-secTwo">
<h1><span>A</span> CUP <span>Of</span></h1>
<h2>C O F F E E</h2>  
</div>


</div>

<div className="sec-Icon">
  <img src={coffeIcon} className="icon" alt="coffee"/>
  <button className='Button-Icon'>CUSTOMIZE <img className="iconButton" src={iconButton}/></button>
</div>

<div className='secThree'>
  <p>Order now to skip the line</p>
  <div className="sub-secThree">
    <button>Menu</button>
    <button>Order Now</button>
     <img src={Arrow} alt="arrow"/>
  </div>
</div>
    </div>
  );
}

export default App;
