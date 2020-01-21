let quotesNAuth = [
    {name: 'Albert Camus', quote: 'It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.'},
    {name: 'Richard Dawkins', quote: 'Natural selection is anything but random'},
    {name: 'Virgil Abloh', quote: 'I\'m not gay'},
    {name: 'Bruce Lee', quote: "The key to immortality is first living a life worth remembering."}
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
    constructor(props){
        super(props)
        let rand = getRandomInt(4)
        this.state = {
            name: quotesNAuth[rand].name,
            quote: quotesNAuth[rand].quote,
        }
    }

    changeQuote = () =>{
        let rand = getRandomInt(4)
        this.setState({
            name: quotesNAuth[rand].name,
            quote: quotesNAuth[rand].quote,    
        })
    }

    render(){
        return(
            <div id="quote-box">
                <div className ='text'>
                    <div id="text">{this.state.quote}</div>
                    <div id="author">{'~'+this.state.name}</div>
                </div>

                <div className = 'buttons'>
                    <button id="new-quote" onClick ={this.changeQuote}>Change Quote</button>
                    <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>   
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))