import React, { Component } from 'react'
import { Card, Col, Row ,Image} from 'antd';
import './Dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="site-card-wrapper">
    <Row>
      <Col span={12}>
          <div className="Dashboardrow1"> 
          <h5 className="Dashboardrow1Heading"><strong>ABSOUL</strong></h5>
          <div className="Dashboardrow1Image">
          <Image preview={false} width={250} height={150}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
          </div>
          </div>
          <div className="Dashboardrow2"> 
          <div> <h3 className="Dashboardrow1Heading">Revenue Optimization</h3></div>
         <div className="Dashboardpart2">
         <Row gutter ={24} className="DashboardContent">
            <Col span={12}>
              <div className="DashboardContent1">
            <Image preview={false} width={50} height={35}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
            <p className="DashboardContentp1">File Rate</p>
            </div>
            </Col>
            <Col span={12} >
              <div className="DashboardContent2">
            <Image preview={false} width={50} height={35}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
            <p className="DashboardContentp2">Improve CTR</p>
            </div>
            </Col>
          </Row>
          <Row gutter ={24} className="DashboardContent">
          <Col span={12}>
          <div className="DashboardContent3">
            <Image preview={false} width={50} height={35}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
            <p className="DashboardContentp3">Refresh Rate</p>
            </div>
            </Col>
            <Col span={12}>
            <div className="DashboardContent4">
            <Image preview={false} width={50} height={35}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
            <p className="DashboardContentp4">Quick Integration</p>
            </div>
            </Col>
          </Row>
         </div>
          </div>
      </Col>
      <Col span={12} className="Col23">
         <div className="Dashboardrow1col1">
           <div className="DashboardApp">
         <h2>Apps</h2>
         </div>
         <div className="DashboardAppIcon">
          <Image preview={false} src="https://www.flaticon.com/edge/redirect?url=aHR0cHM6Ly9jbGsudHJhZGVkb3VibGVyLmNvbS9jbGljaz9wPTMwNDYwOCZhPTMyMTQ3MjMmZz0yNDczNzQ3OCZlcGk9R0ExLjIuMjAzNDk3NjY1NC4xNjE4ODI0NTE4JnVybD1odHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRmltYWdlcyUyRmlkJTJGMTc3MzA0ODg5JTNGYXNfY2FtcGFpZ24lM0RGbGF0aWNvbiUyNmFzX2NvbnRlbnQlM0RhcGklMjZhc19hdWRpZW5jZSUzRHNycA==" />
         </div>
         </div>
         <div className="Dashboardrow1col2"> 
         <div className="Dashboardcard">
         <Card className="card">
           <Row>
         <Col>
         
            <Image className="imgContent1" preview={false}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
    </Col>
    
            <Col>
               <h1 className="contentDream11">Dream 11</h1>
                <p className="contentDreamP1">Publisher Name </p>
        </Col>
        <p ><i className="arrow1 right arrowHeader1"></i></p>
        </Row>
        <Row>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Revenue</p>
          <p className="contentDream2"><strong>$345</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Request</p>
          <p className="contentDream2"><strong>34M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Response</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">impressions</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
        </Row>
        </Card>
         </div>
         <div className="Dashboardcard">
         <Card className="card">
           <Row>
         <Col>
         
            <Image className="imgContent1" preview={false}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
    </Col>
    
            <Col>
               <h1 className="contentDream11">Dream 11</h1>
                <p className="contentDreamP1">Publisher Name </p>
        </Col>
        <p ><i className="arrow1 right arrowHeader1"></i></p>
        </Row>
        <Row>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Revenue</p>
          <p className="contentDream2"><strong>$345</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Request</p>
          <p className="contentDream2"><strong>34M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Response</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">impressions</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
        </Row>
        </Card>
         </div>
         <div className="Dashboardcard">
         <Card className="card">
           <Row>
         <Col>
         
            <Image className="imgContent1" preview={false}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
    </Col>
    
            <Col>
               <h1 className="contentDream11">Dream 11</h1>
                <p className="contentDreamP1">Publisher Name </p>
        </Col>
        <p ><i className="arrow1 right arrowHeader1"></i></p>
        </Row>
        <Row>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Revenue</p>
          <p className="contentDream2"><strong>$345</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Request</p>
          <p className="contentDream2"><strong>34M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Response</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">impressions</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
        </Row>
        </Card>
         </div>
         <div className="Dashboardcard">
         <Card className="card">
           <Row>
         <Col>
         
            <Image className="imgContent1" preview={false}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"/>
    </Col>
    
            <Col>
               <h1 className="contentDream11">Dream 11</h1>
                <p className="contentDreamP1">Publisher Name </p>
        </Col>
        <p ><i className="arrow1 right arrowHeader1"></i></p>
        </Row>
        <Row>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Revenue</p>
          <p className="contentDream2"><strong>$345</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Request</p>
          <p className="contentDream2"><strong>34M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">Ad Response</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
          <Col>
          <div className="contentDreams">
          <p className="contentDream1">impressions</p>
          <p className="contentDream2"><strong>10M</strong></p>
          </div>
          </Col>
        </Row>
        </Card>
         </div>
         </div>
      </Col>
    </Row>
    </div>
    </div>
        )
    }
}

export default Dashboard
