import React, { Component } from 'react'

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'shubrhrho',
                    email: 'hi@shubhro.in',
                    phone: '900-900'
                },
                {
                    id: 2,
                    name: 'sarahhahah',
                    email: 'hi@sayrah.in',
                    phone: '900-900'
                },
                {
                    id: 3,
                    name: 'bhov',
                    email: 'hi@heyeye.in',
                    phone: '900-900'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Contacts;