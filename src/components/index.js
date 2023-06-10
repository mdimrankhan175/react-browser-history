import {Component} from 'react'
import './index.css'

class BrowserHistoryApp extends Component {
  state = {
    searchValue: '',
    historyList: [
      {
        id: 0,
        timeAccessed: '07:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
        title: 'Instagram',
        domainUrl: 'instagram.com',
      },
      {
        id: 1,
        timeAccessed: '05:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
        title: 'Twitter. It’s what’s happening / Twitter',
        domainUrl: 'twitter.com',
      },
      {
        id: 2,
        timeAccessed: '04:35 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
        title: 'Facebook – log in or sign up',
        domainUrl: 'facebook.com',
      },
      {
        id: 3,
        timeAccessed: '04:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
        title: 'LinkedIn: Log In or Sign Up',
        domainUrl: 'linkedin.com',
      },
      {
        id: 4,
        timeAccessed: '04:00 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
        title:
          'Hashnode: Everything you need to start blogging as a developer!',
        domainUrl: 'hashnode.com',
      },
      {
        id: 5,
        timeAccessed: '03:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
        title: 'GitHub: Where the world builds software · GitHub',
        domainUrl: 'github.com',
      },
      {
        id: 6,
        timeAccessed: '02:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
        title: 'React – A JavaScript library for building user interfaces',
        domainUrl: 'reactjs.org',
      },
      {
        id: 7,
        timeAccessed: '01:25 PM',
        logoUrl:
          'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
        title:
          'Stack Overflow - Where Developers Learn, Share, & Build Careers',
        domainUrl: 'stackoverflow.com',
      },
      {
        id: 8,
        timeAccessed: '09:25 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
        title: 'Gmail',
        domainUrl: 'mail.google.com',
      },
      {
        id: 9,
        timeAccessed: '09:00 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
        title: 'Google',
        domainUrl: 'google.com',
      },
    ],
  }

  handleSearchChange = event => {
    this.setState({searchValue: event.target.value})
  }

  handleDelete = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {searchValue, historyList} = this.state

    const filteredHistoryList = historyList.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const isHistoryEmpty = historyList.length === 0
    const isSearchEmpty = searchValue !== '' && filteredHistoryList.length === 0

    return (
      <div className="main-container">
        <div className="top-holder">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <div className="content-holder">
          {isHistoryEmpty && <p>There is no history to show</p>}
          {isSearchEmpty && <p>There is no history to show</p>}
          {!isHistoryEmpty && !isSearchEmpty && (
            <ul className="inner-holder">
              {filteredHistoryList.map(item => (
                <li key={item.id}>
                  <div className="icon-holder">
                    <p className="time">{item.timeAccessed}</p>
                    <img
                      className="logo-element"
                      src={item.logoUrl}
                      alt="domain logo"
                    />
                    <div className="logo-content">
                      <p>{item.title}</p>
                      <p>{item.domainUrl}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => this.handleDelete(item.id)}
                      data-testid="delete"
                      className="delete-button"
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete-icon"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistoryApp
