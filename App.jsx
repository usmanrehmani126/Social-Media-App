import Routes from './src/navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {useEffect} from 'react';
import {getData} from './src/utlis/helperFunction';
import FlashMessage from 'react-native-flash-message';
import {saveUserData} from './src/redux/reducers/auth';
const App = () => {
  const {dispatch} = store;
  useEffect(() => {
    initiateLang();
    initiateTheme();
  }, []);
 
  const initiateTheme = async () => {
    try {
      let myTheme = await getData('theme');
      if (!!myTheme) {
        changeAppTheme(myTheme);
      }
    } catch (error) {
      console.log('no data found');
    }
  };
  const initiateLang = async () => {
    try {
      let myLang = await getData('language');
      if (!!myLang) {
        changeLanguage(myLang);
      }
    } catch (error) {
      console.log('no data found');
    }
  };

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" autoHide={true} animationDuration={20} />
    </Provider>
  );
};

export default App;
