import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Headline from './components/Headline';
import Button from './components/Button';
import ArticleCard from './components/ArticleCard';
import {  fetchPosts  } from './actions';
import './app.scss';

const user = [
  {
    firstName: 'Muhanned',
    lastName: 'Noman',
    email: 'muhanned.noman@gmail.com',
    age: 27,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

   fetch () {
    this.props.fetchPosts()
    this.updateState();
  }

  updateState = () => {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  // This method is only for testing purposes! 
  returnFunction(number){
    return number + 1;
  }

  render() {
    const {posts} = this.props;
    const { hideBtn } = this.state;

    const articles = posts.map((post,index) => {
      const {title, body} = post;
      return(
        <ArticleCard key={index} title={title} desc={body} />
      )
    })

  return (
    <div className="App" data-test="app-component">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          user={user}
        />
        {!hideBtn && <Button event={this.fetch} text="Get posts" />}
        {posts.length > 0 && <div>{articles}</div>}
      </section>
    </div>
  );
}

}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
