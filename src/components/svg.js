import React, { Component } from 'react';
import './svg.css';
import svg from './ihopethisworks.svg';

class Svgdisplay extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickedObj: null
    }
  }

  handleClick(e){
    //console.log(e.target.id);
    //console.log(this.state.clickedObj);
    var obj = document.getElementById(e.target.id);
    //console.log(obj.id);
    if(obj.style.fill == "green"){
      obj.style.fill = "white";
      console.log("what");
    }
    else{
      var name= obj.id;
      if(this.state.clickedObj!= null && this.state.clickedObj != name){
        //for changing the color of previous clicked object
        var oldObj =document.getElementById(this.state.clickedObj);
        oldObj.style.fill = "white";
      }
      obj.style.fill = "green";

      //console.log(name);
      this.setState({
        clickedObj:name
      }, () =>{
        console.log(name);
        /*SetState is asynchonous and will only queue up the state change,
        it needs to complete the loop to change. creating a new function
         allows it to continue
        */
        console.log('updated state value', this.state.clickedObj)
        this.props.handlerFromParent(this.state.clickedObj);

      });
      console.log(this.state.clickedObj);
    }
   }


  render() {
    //const {location} = this.location; //if given
    return (

      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 535 688.7"  xmlSpace="preserve">
      <g id="Foundation">
      	<rect id="outerWall" x="19.6" y="13.3" className="st0" width="503.4" height="667.3"/>
      	<line id="officeDoor" className="st1" x1="490" y1="640.3" x2="521" y2="640.3"/>
      	<line id="leftDoor" className="st1" x1="237" y1="481.2" x2="237" y2="505.9"/>
      	<line id="rightDoor_1_" className="st1" x1="339.5" y1="482.2" x2="339.5" y2="506.9"/>
      	<rect id="serverRoom" x="237.5" y="514.2" className="st2" width="102" height="167"/>
      	<g id="Door_in">
      		<g>
      			<line className="st3" x1="228.7" y1="20.3" x2="228.7" y2="68"/>
      			<g>
      				<polygon points="222.6,63.1 223.7,62 228.7,67.5 233.8,62 234.9,63.1 228.7,69.7 				"/>
      			</g>
      		</g>
      	</g>
      	<rect id="randomRack" x="280.9" y="264.4" className="st2" width="6.5" height="51"/>
      	<path id="BACKOFFICE" className="st2" d="M478.1,639.5H346.9c-3.6,0-6.6,3-6.6,6.6v26c0,3.6,3,6.6,6.6,6.6h131.2c3.6,0,6.6-3,6.6-6.6
      		v-26C484.7,642.5,481.7,639.5,478.1,639.5z"/>
      	<rect id="kevincantmergestuffsoheresarandomline" x="237" y="642.7" className="st2" width="102.5" height="38.5"/>
      </g>
      <g id="Locations">
      	<path id="FC_1_" className="st2" d="M332.5,482.2h-88c-3.9,0-7-3.2-7-7v-25c0-3.9,3.2-7,7-7h88c3.9,0,7,3.2,7,7v25
      		C339.5,479,336.3,482.2,332.5,482.2z"/>
      	<rect id="_x33_DFIL" x="288.8" y="264.4" className="st2" width="6.5" height="51"/>
      	<rect id="DR3" x="19.6" y="33.7" className="st2" width="56.4" height="38"
        onClick={ this.handleClick} />
      	<rect id="DR2" x="19.6" y="71.7" className="st2" width="56.4" height="38.5"
        onClick={this.handleClick}/>
      	<rect id="DR1" x="19.6" y="110.2" className="st2" width="56.4" height="103.5"/>
      	<rect id="FD" x="269.5" y="443.2" className="st2" width="37" height="39"/>
      	<rect id="CTR" x="149.9" y="482.2" className="st2" width="6.3" height="50.5"/>
      	<rect id="CR4" x="224" y="514.2" className="st2" width="6" height="51"/>
      	<rect id="CR3" x="211.5" y="571.7" className="st2" width="18.5" height="38.5"/>
      	<rect id="CR2" x="38.5" y="565.2" className="st2" width="24.5" height="45"/>
      	<rect id="CR1" x="95" y="613.7" className="st2" width="135" height="29"/>
      	<rect id="FL2" x="156.1" y="251.2" className="st2" width="12.6" height="224"/>
      	<rect id="S2" x="149.8" y="251.2" className="st2" width="6.3" height="224"/>
      	<rect id="FL1" x="130.3" y="251.2" className="st2" width="11.6" height="224"/>
      	<rect id="S1" x="141.9" y="251.2" className="st2" width="6.5" height="224"/>
      	<rect id="FL4" x="156.3" y="33.7" className="st2" width="12.6" height="180"/>
      	<rect id="S4" x="150" y="33.7" className="st2" width="6.3" height="180"/>
      	<rect id="FL3" x="130.6" y="33.7" className="st2" width="11.6" height="180"/>
      	<rect id="S3" x="142.2" y="33.7" className="st2" width="6.5" height="180"/>
      	<rect id="FL6" x="295.1" y="33.7" className="st2" width="12.6" height="224.3"/>
      	<rect id="S6" x="288.8" y="33.7" className="st2" width="6.3" height="224.3"/>
      	<rect id="FL5" x="269.3" y="33.7" className="st2" width="11.6" height="224.3"/>
      	<rect id="S5" x="280.9" y="33.7" className="st2" width="6.5" height="224.3"/>
      	<rect id="FL8" x="419.9" y="33.7" className="st2" width="12.6" height="180"/>
      	<rect id="S8" x="413.6" y="33.7" className="st2" width="6.3" height="180"/>
      	<rect id="FL7" x="394.2" y="33.7" className="st2" width="11.6" height="180"/>
      	<rect id="S7" x="405.8" y="33.7" className="st2" width="6.5" height="180"/>
      	<rect id="FL10" x="420.2" y="232.3" className="st2" width="12.6" height="128.7"/>
      	<rect id="S10" x="413.8" y="232.3" className="st2" width="6.3" height="128.7"/>
      	<rect id="FL9" x="394.4" y="232.3" className="st2" width="11.6" height="128.7"/>
      	<rect id="S9" x="406" y="232.3" className="st2" width="6.5" height="128.7"/>
      	<rect id="FL12" x="420.4" y="401" className="st2" width="12.6" height="183"/>
      	<rect id="S12" x="414.1" y="401" className="st2" width="6.3" height="183"/>
      	<rect id="FL11" x="394.7" y="401" className="st2" width="11.6" height="183"/>
      	<rect id="S11" x="406.3" y="401" className="st2" width="6.5" height="183"/>
      	<rect id="BEAM" x="269.3" y="322.2" className="st2" width="37.8" height="37.8"/>
      	<polygon id="HB" className="st2" points="322.4,48.1 341.6,48.5 341.7,59.5 322.5,59.1 	"/>
      	<rect id="HA" x="309" y="322.2" className="st2" width="17.3" height="38.8"/>
      	<polygon id="MR2" className="st2" points="318.3,383.7 293.3,401.5 292,367.1 	"/>
      	<ellipse id="MR1" className="st2" cx="264.4" cy="384.3" rx="15.1" ry="16.6"/>
      	<polygon id="TREASUREBOX" className="st2" points="356.7,48 384,47.6 384,59.7 356.7,60 	"/>
      	<rect id="DR4" x="471.7" y="206" className="st2" width="50" height="192.3"/>
      	<rect id="DR5" x="471.7" y="398.3" className="st2" width="50" height="51.7"/>
      	<rect id="DR6" x="471.7" y="450" className="st2" width="50" height="50.7"/>
      	<rect id="KIT1" x="341.7" y="623.7" className="st2" width="39.3" height="14.3"/>
      	<rect id="MAG" x="384" y="623.7" className="st2" width="25.5" height="14.3"/>
      	<rect id="DIR" x="412.8" y="623.7" className="st2" width="66.3" height="14.3"/>
      	<rect id="KIT2" x="394.7" y="589.3" className="st2" width="40.3" height="14.3"/>
      	<polygon id="CR5" className="st2" points="148.3,534.2 148.6,482.2 142.1,482.2 141.8,534.2 141.8,534.2 141.8,546.3 148.3,546.3
      		156.2,546.3 156.2,534.2 	"/>
      	<rect id="MR3" x="445.9" y="48.1" className="st2" width="65.4" height="17.7"/>
      	<rect id="TR" x="505.5" y="546.3" className="st2" width="10.5" height="72.3"/>
      </g>
      <g id="WALLS_x5F_WINDOWS">
      	<rect id="WIN4" x="413.8" y="17.7" className="st0" width="108.6" height="12"/>
      	<rect id="WIN3" x="321" y="17.7" className="st0" width="91.3" height="12"/>
      	<rect id="WIN2" x="23" y="17.7" className="st0" width="125.7" height="12"/>
      	<rect id="WIN1_1_" x="152" y="17.7" className="st0" width="56.3" height="12"/>
      	<rect id="WALL3" x="520.3" y="506.9" className="st2" width="2.7" height="128.4"/>
      	<rect id="WALL2" x="519.7" y="33.7" className="st2" width="2" height="166"/>
      	<rect id="WALL1" x="30.5" y="219.7" className="st2" width="3" height="390.5"/>
      </g>
      <g id="text">
      	<text id="WIN4text" transform="matrix(1 0 0 1 460.5 27.4274)" className="st4 st5">WIN4</text>
      	<text id="WIN3text" transform="matrix(1 0 0 1 351.1667 27.4274)" className="st4 st5">WIN3</text>
      	<text id="WIN2text" transform="matrix(1 0 0 1 167.1667 27.4274)" className="st4 st5">WIN2</text>
      	<text id="WIN1text" transform="matrix(1 0 0 1 69.5 27.4274)" className="st4 st5">WIN1</text>
      	<text id="DR6text_1_" transform="matrix(1 0 0 1 487.9704 477.9691)" className="st4 st5">DR6</text>
      	<text id="DR5text" transform="matrix(1 0 0 1 487.9704 426.8024)" className="st4 st5">DR5</text>
      	<text id="DR4text" transform="matrix(1 0 0 1 487.9704 304.8024)" className="st4 st5">DR4</text>
      	<text id="DR3text" transform="matrix(1 0 0 1 38.5 56.3024)" className="st4 st5">DR3</text>
      	<text id="DR2text" transform="matrix(1 0 0 1 38.5 93.5524)" className="st4 st5">DR2</text>
      	<text id="DR1text" transform="matrix(1 0 0 1 37.3037 160.3024)" className="st4 st5">DR1</text>
      	<text id="CR4text" transform="matrix(1 0 0 1 203.75 542.3024)" className="st4 st5">CR4</text>
      	<text id="CR3text" transform="matrix(1 0 0 1 212.5 592.8747)" className="st4 st6">CR3</text>
      	<text id="CR2text" transform="matrix(1 0 0 1 40.75 590.3024)" className="st4 st5">CR2</text>
      	<text id="CR1text" transform="matrix(1 0 0 1 154 630.8024)" className="st4 st5">CR1</text>
      	<text id="CR5text" transform="matrix(1 0 0 1 120.2083 510.0524)" className="st4 st5">CR5</text>
      	<text id="CTRtext" transform="matrix(1 0 0 1 159.9583 510.0524)" className="st4 st5">CTR</text>
      	<text id="WALL3text" transform="matrix(1 0 0 1 482.6002 534.2002)" className="st4 st5">WALL3</text>
      	<text id="WALL2text" transform="matrix(1 0 0 1 484.3333 113.8029)" className="st4 st5">WALL2</text>
      	<text id="WALL1text" transform="matrix(1 0 0 1 38.5 406.4695)" className="st4 st5">WALL1</text>
      	<text id="FDtext" transform="matrix(1 0 0 1 280.9366 465.3024)" className="st4 st5">FD</text>
      	<text id="MR3text" transform="matrix(1 0 0 1 471.7 60.0028)" className="st4 st7">MR3</text>
      	<text id="MR2text" transform="matrix(1 0 0 1 292.0019 386.9127)" className="st4 st5">MR2</text>
      	<text id="MR1text" transform="matrix(1 0 0 1 254.0002 386.9127)" className="st4 st5">MR1</text>
      	<text id="HAtext" transform="matrix(1 0 0 1 312.333 343.1245)" className="st4 st7">HA</text>
      	<text id="HBTEXT" transform="matrix(1 0 0 1 326.2997 56.9499)" className="st4 st7">HB</text>
      	<text id="BEAMtext" transform="matrix(1 0 0 1 275.125 343.1247)" className="st4 st6">BEAM</text>
      	<text id="_x33_DFILtext" transform="matrix(1 0 0 1 298.6122 292.6247)" className="st4 st6">3DFIL</text>
      	<text id="KIT2text" transform="matrix(1 0 0 1 404.5 599.5417)" className="st4 st6">KIT2</text>
      	<text id="KIT1text" transform="matrix(1 0 0 1 353 633.7917)" className="st4 st6">KIT1</text>
      	<text id="MAGtext" transform="matrix(1 0 0 1 384.9171 633.7917)" className="st4 st6">MAG</text>
      	<text id="DIRtext" transform="matrix(0.9328 0 0 1 435 633.958)" className="st4 st6">DIR</text>
      	<text id="backOfficeText" transform="matrix(1 0 0 1 385.8753 661.2288)" className="st4 st6">Back Office</text>
      	<text id="TBtext" transform="matrix(1 0 0 1 366.0221 56.3052)" className="st4 st7">TB</text>
      	<text id="_x31_2text" transform="matrix(1 0 0 1 416.5412 398.4175)" className="st4 st7">12</text>
      	<text id="_x31_1text" transform="matrix(1 0 0 1 399.1245 398.6818)" className="st4 st7">11</text>
      	<text id="_x31_0text" transform="matrix(1 0 0 1 416.8745 369.9318)" className="st4 st7">10</text>
      	<text id="_x39_text" transform="matrix(1 0 0 1 401.5 369.3799)" className="st4 st7">9</text>
      	<text id="_x38_text" transform="matrix(1 0 0 1 418.75 222.6965)" className="st4 st7">8</text>
      	<text id="_x37_text" transform="matrix(1 0 0 1 402 222.6965)" className="st4 st7">7</text>
      	<text id="_x36_text" transform="matrix(1 0 0 1 300.3878 266.6964)" className="st4 st7">6</text>
      	<text id="_x35_text" transform="matrix(1 0 0 1 270.375 266.6964)" className="st4 st7">5</text>
      	<text id="_x34_text" transform="matrix(1 0 0 1 153.0833 221.9465)" className="st4 st7">4</text>
      	<text id="_x33_text" transform="matrix(1 0 0 1 138.75 221.9465)" className="st4 st7">3</text>
      	<text id="_x32_text" transform="matrix(1 0 0 1 153.0833 246.9465)" className="st4 st7">2</text>
      	<text id="_x31_text" transform="matrix(1 0 0 1 138.75 246.9465)" className="st4 st7">1</text>
      	<text id="TRtext" transform="matrix(-1.346898e-010 1.3094 -1 -1.763692e-010 508.1797 572.2666)" className="st4 st8">TR</text>
      </g>
      </svg>
    );
  }
}

export default Svgdisplay;
