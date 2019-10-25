import { useState } from 'react';
import { Divider, Row, Col, Slider, InputNumber } from 'antd';

import '../public/components/ellipse.css';

const Ellipse = () => {
    const [w, setW] = useState(200);
    const [h, setH] = useState(300);
    const [tlv, setTlv] = useState(0);
    const [tlh, setTlh] = useState(0);
    const [trv, setTrv] = useState(0);
    const [trh, setTrh] = useState(0);
    const [blv, setBlv] = useState(0);
    const [blh, setBlh] = useState(0);
    const [brv, setBrv] = useState(0);
    const [brh, setBrh] = useState(0);

    const radiusStyle = {
        borderTopLeftRadius: `${tlv} ${tlh}`,
        borderTopRightRadius: `${trv} ${trh}`,
        borderBottomLeftRadius: `${blv} ${blh}`,
        borderBottomRightRadius: `${brv} ${brh}`
    }

    const [style, setStyle] = useState(radiusStyle);
    
    const updateStyle = () => {
        setStyle({
            width: `${w}px`,
            height: `${h}px`,
            borderTopLeftRadius: `${tlv}px ${tlh}px`,
            borderTopRightRadius: `${trv}px ${trh}px`,
            borderBottomLeftRadius: `${blv}px ${blh}px`,
            borderBottomRightRadius: `${brv}px ${brh}px`
        })
    }


    console.log('radiusStyle: ', JSON.stringify(radiusStyle))


    return (
        <>
           <div className="container" style={{fontSize: '20px', color: 'red'}}>
                <div className="box" style={style}></div>
            </div>
            <Divider>box width</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                    <Slider min={0} max={350} value={w} onChange={value => {setW(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={w} onChange={value => {setW(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>box height</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={h} onChange={value => {setH(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={h} onChange={value => {setH(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-top-left-vertical</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={tlv} onChange={value => {setTlv(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={tlv} onChange={value => {setTlv(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-top-left-horizontal</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={tlh} onChange={value => {setTlh(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={tlh} onChange={value => {setTlh(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-top-right-vertical</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                    <Slider min={0} max={350} value={trv} onChange={value => {setTrv(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={trv} onChange={value => {setTrv(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-top-right-horizontal</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={trh} onChange={value => {setTrh(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={trh} onChange={value => {setTrh(value); updateStyle();}} />
                </Col>
            </Row>      
            <Divider>Testborder-bottom-left-vertical</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                    <Slider min={0} max={350} value={blv} onChange={value => {setBlv(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={blv} onChange={value => {setBlv(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-bottom-left-horizontal</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={blh} onChange={value => {setBlh(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={blh} onChange={value => {setBlh(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-bottom-right-vertical</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                    <Slider min={0} max={350} value={brv} onChange={value => {setBrv(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={brv} onChange={value => {setBrv(value); updateStyle();}} />
                </Col>
            </Row>
            <Divider>Testborder-bottom-right-horizontal</Divider>
            <Row type="flex" justify="center">
                <Col span={14}>
                <Slider min={0} max={350} value={brh} onChange={value => {setBrh(value); updateStyle();}} /> 
                </Col>
                <Col span = {4} offset={1}>
                    <InputNumber min={0} max={350} value={brh} onChange={value => {setBrh(value); updateStyle();}} />
                </Col>
            </Row>
        </>
    )
}

export default Ellipse;
