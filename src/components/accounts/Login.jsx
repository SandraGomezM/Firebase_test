import React, {Component} from 'react'
import {Input} from 'antd'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            correo: null,
            contraseña: null
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                    <p>Inicia sessión</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <p>Login</p>
                    <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}></Input>
                    </Col>
                    <Col span={12}>
                    <p></p>
                    </Col>
                </Row>
            </div>
        )
    }
}

