import axios from 'axios';
import { observable, action, computed } from 'mobx';

class UserStore {
  @observable data = '';

  @action setData(data) {
    this.data = data;
  }

  @computed get getData() {
    return this.data;
  }

  getUserInfo = () => axios.get('/iam/v1/users/self').then((res) => {
    this.setData(res);
  });
}

const userStore = new UserStore();
export default userStore;
