import React, { Component } from 'react';
import Web3 from 'web3';

import Storage from './abis/Storage.json'
// import Navbar from './nav'
import Main from './Main'
// import Identicon from 'identicon.js';

class Post extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Storage.networks[networkId]
    if(networkData) {
      const storage = web3.eth.Contract(Storage.abi, networkData.address)
      this.setState({ storage })
      const postCount = await storage.methods.postCount().call()
      this.setState({ postCount })

      // Load Posts
      for (var i = 1; i <= postCount; i++) {
        const post = await storage.methods.posts(i).call()
        this.setState({
          posts: [...this.state.posts, post]
         
        })
      }
      console.log({posts:this.state.post})
    } else {
         window.alert('SocialNetwork contract not deployed to detected network.')
    }
  }
      // Sort posts. Show highest tipped posts first
  //     this.setState({
  //       posts: this.state.posts.sort((a,b) => b.tipAmount - a.tipAmount )
  //     })
  //     this.setState({ loading: false})
  //   
  //   }
    
  // }

  createPost(content) {
    this.setState({ loading: false })
    this.state.storage.methods.createPost(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: true })
    })
  }

  // tipPost(id, tipAmount) {
  //   this.setState({ loading: true })
  //   this.state.socialNetwork.methods.tipPost(id).send({ from: this.state.account, value: tipAmount })
  //   .once('receipt', (receipt) => {
  //     this.setState({ loading: false })
  //   })
  

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      storage: null,
      postCount: 0,
      posts: [],
      loading:false
    }

    this.createPost = this.createPost.bind(this)
    // this.tipPost = this.tipPost.bind(this)
  }

  render() {
    return (
      <div>
        {/* <Navbar account={this.state.account} /> */}
        {/* <Main posts={this.state.posts} /> */}
        { this.state.loading
          ? <div id="loader" className="text"><p>Idiots its Loading...</p></div>
          : <Main
              posts={this.state.posts}
              createPost={this.createPost}
              tipPost={this.tipPost}
            />
        }
      </div>
      
    );
  }
}
export default Post;