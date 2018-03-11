import React                       from 'react';
import PropTypes                   from 'prop-types';


class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
                <p>Foother here...</p>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;