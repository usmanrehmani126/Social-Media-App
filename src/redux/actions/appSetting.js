import {storeData} from '../../utlis/helperFunction';
import {changeLang, changeTheme} from '../reducers/appSetting';
import { saveUserData } from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

export const changeLanguage = data => {
  dispatch(changeLang(data));
};
export const changeThemeApp = data => {
  storeData('theme', data)
    .then(res => {
      dispatch(changeTheme(res));
    })
    .catch(error => {
      console.log('Error while changing theme', error);
    });
};
export const storeUserData = data => {
  storeData('userData', data)
    .then(res => {
      dispatch(saveUserData(res));
    })
    .catch(error => {
      console.log('Error while changing theme', error);
    });
};
