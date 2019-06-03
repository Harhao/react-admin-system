import React,{Component} from 'react';
import { Table, Divider, Tag } from 'antd';
import './index.css';
export default class Basic extends Component{
    render(){
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="/">{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <span>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a href="/">Invite {record.name}</a>
                  <Divider type="vertical" />
                  <a href="/">Delete</a>
                </span>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
        return (
          <div className="messageWrap">
             <div className="labelTitle">
                Table表格
             </div>
             <div className="displayCode clearfix">
                  <div className="codeSection">
                      <div className="example">
                        <Table columns={columns} dataSource={data} />
                      </div>
                  </div>
                  <div className="codeSection">
                      <div className="example">
                        <Table columns={columns} dataSource={data} size="small" />
                      </div>
                  </div>
                  <div className="codeSection">
                      <div className="example">
                        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}