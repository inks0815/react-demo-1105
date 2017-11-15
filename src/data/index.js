// *Author:wusheng
// *Date:2017-{{mm}}-{{dd}}
// *Email:wus5@chinaunicom.cn
//这是一个reducers，它是一个运输过程




import img1 from '../imgs/comming.png'
import img2 from '../imgs/storydefault.jpg'
import img3 from '../imgs/Talent.jpg'





export default (state=0,action)=>{
  //  console.log(action);
   switch(action.type){
     case 'AAA':return img1
     case 'BBB':return img2
     case 'CCC':return img3
     default:return img3
   }
}
