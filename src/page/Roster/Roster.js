import React, { Component } from 'react'

import FullRoster from './FullRoster'
import Player from './Player'
import { Route, Switch } from "react-router-dom";
import { Modal, Button } from 'antd'
import Viewer from 'viewerjs'
import {Input} from 'antd'
import './style/index.scss'
require('viewerjs/dist/viewer.min.css')

class TestRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            containerVisible: false,
            imgList: [require('../../images/1.jpg'), require('../../images/2.jpg')],
            lightbox: {
                isOpen: false,
                src: ''
            }
        }
        this.viewer = []
    }
    hideModal = () => {
        this.setState({
            visible: false

        })
    }
    showModal = () => {
        this.setState({
            visible: true,

        })
    }
    componentDidUpdate = () => {
        setTimeout(() => {
            this.viewer.map(o => o.destory && o.destory())
            this.viewer = []
            const wraper = document.querySelectorAll('.img-wraper')

            console.log(wraper)
            if (wraper.length > 0) {
                wraper.forEach(o => {
                    this.viewer.push(new Viewer(o, {
                        url: 'src', minWidth: 0, minHeight: 0,
                        container: '.ant-modal',
                        backdrop: false
                    }))
                })
            }

        }, 1000)
    }
    componentWillUnmount() {
        this.viewer.map(o => o.destroy && o.destroy())
    }
    hanlderViewer = () => {
        this.setState({
            containerVisible: true,
        })
    }
    render() {
        const { visible, imgList, containerVisible } = this.state
        return (<div>
            {
                <Modal
                    maskClosable={false}
                    visible={visible}
                    onCancel={this.hideModal}
                    title="test"

                >
                    <div>
                        <ul className="img-wraper">
                            {
                                imgList.map((item, index) => {
                                    return <li className="item" key={index}>
                                        <img onClick={this.hanlderViewer} src={item} alt="" />
                                    </li>
                                })
                            }
                        </ul>
                        <Input />
                    </div>
                </Modal>
            }

            {/* <div className="v-container"></div> */}


            <Button onClick={this.showModal}>Modal</Button>
            <Switch>
                <Route exact path='/roster' component={FullRoster} />
                <Route path='/roster/:number' component={Player} />
            </Switch>
        </div>)
    }
}
export default TestRouter 