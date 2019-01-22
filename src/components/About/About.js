import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='subnav'>
                    <Link to='/about' className='subnav_links'>
                        <h3>About</h3>
                    </Link>
                    <Link to='/about/history' className='subnav_links'>
                        <h3>History</h3>
                    </Link>
                    <Link to='/about/contact' className='subnav_links'>
                        <h3>Contact</h3>
                    </Link>
                </div>
                <div className='box'>
                    <Switch>
                        <Route path='/about/history' component={History} />
                        <Route path='/about/contact' component={Contact} />
                        <Route
                            exact
                            path='/about/'
                            render={() => (
                                <div>
                                    <h1 className='title'>About</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Dolore minus ut culpa
                                        sequi eos similique consequuntur quae
                                        facilis praesentium iure tempora soluta
                                        adipisci, molestias, perspiciatis ad ea
                                        libero dignissimos cupiditate?
                                    </p>
                                </div>
                            )}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}
