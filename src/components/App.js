import React from 'react'
import unsplash from '../api/Unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{
    state = { images : []}

    onSearchSubmit = async term =>{
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        })

        this.setState({images : response.data.results})
        console.log(this.state.images)
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images = {this.state.images} />
            </div>

        )
    }
}


export default App