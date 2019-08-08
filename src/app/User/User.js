import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Descriptions } from 'antd';
import UserStore from './stores/UserStore';
import './style/User.less';

@observer
class User extends Component {
  handleBtnClick = () => {
    UserStore.getUserInfo();
  };

  render() {
    const data = UserStore.getData;

    return (
      <div className="home">
        <div>
          <Button type="primary" onClick={this.handleBtnClick}>获取信息</Button>
        </div>
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="UserName">{data.loginName}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{data.phone}</Descriptions.Item>
          <Descriptions.Item label="Live">{data.organizationCode}</Descriptions.Item>
          <Descriptions.Item label="Remark">{' '}</Descriptions.Item>
          <Descriptions.Item label="Address">{' '}</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default User;
