import React, { Component } from 'react'
import { Card, Col, Row,Image } from 'antd'
import 'antd/dist/antd.css';
import './Post1.css';

export class Post extends Component {
    render() {
        return (
            <div>
                 <div>
    <Row gutter={24}>
      <Col span={16}>
        <Card>
            <h1 className="postheader">Popular Post</h1>
        <Row gutter={18}>
            <Col span={9} className="Post1">
            <Image
      width={270}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
    <h1>Hello Every One</h1>
    <p >A paragraph is a series of related sentences developing a central idea, called the topic.
         Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group
         of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your
         broader argument.</p>
         <Row gutter={22}>
         <Col span={4} >
            <Image className="imagepost"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
         <Col span={16}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series o</p>
        </Col>
            
    </Row>
            </Col>
            <Col span={9} className="Post2">
            <Image 
      width={250}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
     <h1>Hello Every One</h1>
    <p >A paragraph is a series of related sentences developing a central idea, called the topic.
         Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group
         of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your
         broader argument.</p>
         <Row gutter={22}>
         <Col span={4} >
            <Image className="imagepost"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
         <Col span={18}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series o</p>
        </Col>
            
    </Row>
            </Col>
        </Row>

        </Card>
      </Col>
      <Col span={8}>
      <Card>
            <h1>Recent Post</h1>
            <Row gutter={22}>
            <Col span={18}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series of related sentences developing </p>
        </Col>
            <Col span={4}>
            <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
    </Col>
    <Col span={18}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series of related sentences developing </p>
        </Col>
            <Col span={4}>
            <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
    <Col span={18}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series of related sentences developing </p>
        </Col>
            <Col span={4}>
            <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
  </Row>
          </Card>
       
      </Col>
    </Row>
  </div>
            </div>
        )
    }
}

export default Post
