function RenderBurger(props){
    if(props.val == 'burger'){
        return (
            <ul>

            </ul>
        );
    } else {
        return(
            <ul className = 'navbar'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Abt</a></li>
                <li><a href="#">CNtct</a></li>
            </ul>
        );
    }
}

function renderList(){
    return false;
}

class Burger extends React.Component { 
    constructor(props){
        super(props)
    
        this.state = {
            nav: 'burger'
        }
    }
    
    onClick = () => {
        this.state.nav == 'burger'? 
            this.setState({nav: 'nav'}) : 
            this.setState({nav: 'burger'})
    }

    render(){
        return(
            <div className = 'navigation'>
                <button onClick = {this.onClick} className='burger-icon'>
                    <span></span>
                </button>
                <RenderBurger val = {this.state.nav} />
            </div>
        );
    }
}

ReactDOM.render(< Burger/>, document.getElementById('nav-bar'))