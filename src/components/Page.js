import React, { Component } from 'react'
import { Table, Col, Row,Image,Tag,Space } from 'antd'
import moment from 'moment'
import './Page.css'
import axios from 'axios'
export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member:[],loading:true
           };

    }   
    componentDidMount(){
        axios.get(`https://api.npoint.io/d734975d2aee62d197ef`).then(res=>{
      this.setState({member:res.data,loading:false});
        })
    }
    
    render() {  
        let value=this.state.member;
        let mem=[];
        if(value){
            for(let val in value){
                value[val].map(v=>{
                  let a=(v.impressions/v.adResponse)*100
                 mem.push({...v,renderRate:a});
                 console.log(mem)
                })
            }
        }
        const numberWithCommas = (x) => {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
           
        const columns = [
            {
              title: 'Date',
              dataIndex: 'date',
              key: 'date',
              render: date => <a className="tableData">{moment().format('Do MMMM YYYY')}</a>,
            },
            {
              title: 'Revenue',
              dataIndex: 'revenue',
              key: 'revenue',
              render: revenue =><a className="tableData">{"$"+numberWithCommas(revenue)}</a>
            },
            
            {
                title: 'AdRequest',
                dataIndex: 'adRequest',
                key: 'adRequest',
                render: adRequest =><a className="tableData">{numberWithCommas(adRequest)}</a>
              },
              {
                title: 'AdResponse',
                dataIndex: 'adResponse',
                key: 'adResponse',
                render: adResponse =><a className="tableData">{numberWithCommas(adResponse)}</a>
              },
              {
                title: 'Clicks',
                dataIndex: 'clicks',
                key: 'clicks',
                render: licks =><a className="tableData">{numberWithCommas(licks)}</a>
              },{
                title: 'Impressions',
                dataIndex: 'impressions',
                key: 'impressions',
                render: impressions =><a className="tableData">{numberWithCommas(impressions)}</a>
              },
              ,{
                title: 'Render Rate',
                dataIndex: 'renderRate',
                key: 'renderRate',
                render: renderRate => <a className="tableData">{renderRate.toFixed(0)+"%"}</a>
              },
          ];    
        return (
            <div>
                <div>
                    <nav className="navBar">
                    <h5 className="Content"><strong> ABSOUL</strong></h5>
                </nav>
                </div>
                <div>
                <p className="arrowHeader"><i className="arrow left arrowHeader"></i></p>
                <Row>
                <Col >
            <Image className="imgContent" preview={false} width={70}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
    </Col>
            <Col >
               <h1 className="contentDream">Dream 11</h1>
                <p className="contentDreamP">A paragraph is </p>
        </Col>
    </Row>
                </div>
                <div className="ContentTable">
               <Table columns={columns} dataSource={mem}  pagination={false} loading={this.state.loading} className="table"  />
                </div>  
            </div>
        )
    }
}

export default Page
