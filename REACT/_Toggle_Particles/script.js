class App extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            bubbleLayer: false,
            snowLayer: false
        }

        this.handleClickBubbles = this.handleClickBubbles.bind(this)
        this.createLayerElements = this.createLayerElements.bind(this)
        this.handleClickSnow = this.handleClickSnow.bind(this)
        this.createSnowLayer = this.createSnowLayer.bind(this)
    }

    //Handles the toggle of the Bubble Layer
        // State switch on/off
        handleClickBubbles(){
            this.setState({
                bubbleLayer: !this.state.bubbleLayer,
                snowLayer: this.state.snowLayer
            })
        }

        // Creates the array with the bubble elements    
        createLayerElements(){
            let arr = []
            if(this.state.bubbleLayer){
                for(let i = 0; i < 100; i++){
                    arr.push('bubble'+i)
                }
            } else {
                arr = []
            }

            return arr;
        }
    //End Bubble Handle

    /************************\
        Handle snow toggle 
    \************************/
        handleClickSnow(){
            this.setState({
                bubbleLayer: this.state.bubbleLayer,
                snowLayer: !this.state.snowLayer
            })

            console.log(this.state.snowLayer)
        }

        createSnowLayer(){
            let arr = []
            for(let i=0; i<300; i++){
                arr.push('snow'+i)
            }

            if(this.state.snowLayer){
                return(arr);
            } else{
                return([]);
            }
        }
    /************************\
      End Handle snow toggle 
    \************************/
        

    render(){
        return(
            <div>
                <button onClick = {this.handleClickBubbles}></button>
                <button onClick = {this.handleClickSnow}></button>

                {this.createLayerElements().map(element => <div className ={element} key={element} ></div> )}
                {this.createSnowLayer().map(element => <div className={element} key={element}></div>)}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('canvas'))