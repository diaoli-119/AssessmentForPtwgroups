/*
 * @Author: your name
 * @Date: 2021-07-21 09:32:24
 * @LastEditTime: 2021-07-21 09:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assessment\emailverification\src\App.js
 */
import './App.css';
import SendVerificationCode from './component/form/sendVerificationCode/send';
import Submit from './component/form/submit/submit';

const App = () => {
  return (  
    <div className='App'>
      <SendVerificationCode/>
      <Submit/>
    </div>
  );
}

export default App;