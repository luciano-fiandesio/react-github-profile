import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'
import Search from './github/Search.jsx'

class App extends React.Component {

	 constructor (props) {
	 	super(props);
	 	this.state = {

	 		username: 'luciano-fiandesio',
	 		userData: [],
	 		userRepos: [],
	 		perPage: 10
	 	}

	}

    getUserData() {

    	$.ajax({

    		url:"https://api.github.com/users/" + this.state.username + '?client_id ' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
    		dataType: 'json',
    		cache:false,
    		success: function(data) {
    			this.setState({userData:data});
    			console.log(data);

    		}.bind(this),
    		error: function(xhr, status, error) {
    			this.setState({username:null})
    			alert(error);
    		}.bind(this)

 
    	}); 
    }

    getUserRepos() {

    	$.ajax({

    		url:"https://api.github.com/users/" + this.state.username + '/repos?per_page='+ this.state.perPage + '&client_id ' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
    		dataType: 'json',
    		cache:false,
    		success: function(data) {
    			this.setState({userRepos:data});
    			console.log(data);

    		}.bind(this),
    		error: function(xhr, status, error) {
    			this.setState({username:null})
    			alert(error);
    		}.bind(this)

 
    	}); 
    }


    handleFormSubmit(username) {
        this.setState({username:username}, function() {
            this.getUserData();
            this.getUserRepos();

        })

    }

    componentDidMount() {

    	this.getUserData();
    	this.getUserRepos();
    }

	render() {

		return (
			<div>
                <Search onFormSubmit= {this.handleFormSubmit.bind(this)}/>
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {

	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string

}

App.defaultProps = {

	clientId: 'e67e230f4d38ca9557eb',
	clientSecret: '0e3817b228fddef292caa7dff1f80902bb989d33'
}

export default App;