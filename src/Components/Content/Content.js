import React, { Component } from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
class Content extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    {/* this is the content for menu */}
                    <Left></Left>
                    {/* this is a content for item */}
                    <Right></Right>
                </div>
            </div>
        );
    }
}

export default Content;			