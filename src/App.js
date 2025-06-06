import { useState } from 'react';
import './App.css';
import userData from './data/data.json'
import miniFlash from './assets/mini-flash.png'
import vectorOne from './assets/firstPage.png'
import product from './assets/prodact.png'

import bgSecond from './assets/bg-second-page.png'
import bgThird from './assets/bg-third-page.png'
import bgThirdDesktop from './assets/prodact-desktop.png'
import skillImage from './assets/skills.png'
import contactImage from './assets/contact.png'

import pageTwo from './assets/page2.png';

import {Header} from './pages/header/header.js'

function App() {

  const [showFireWork, setShowFireWork] = useState(false)

  const useFireWork = () => {
    document.getElementById("Contact-with-me").scrollIntoView({behavior: 'smooth'});

    setShowFireWork(true)

    setTimeout(()=>{
      setShowFireWork(false)
    }, 10000)
  }

  console.log(userData['projects']['noroma'])

  const moveToAbout = () => {
    document.getElementById("about-me-page").scrollIntoView({behavior: 'smooth'});
  }

  const moveTProjects = () => {
    document.getElementById("project-page").scrollIntoView({behavior: 'smooth'});
  }

  const moveToContact = () => {
    document.getElementById("Contact-with-me").scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
        {/* Start header */}
        <header className="header_container">
          <Header movetoabout={moveToAbout} movetoproject={moveTProjects} movetocontact={moveToContact} />
        </header>
        {/* End header */}

        {/* Start firstPage */}
        <div className='first-page'>
          <div>
            <p className="title-description" >
              {
                userData['title-description']
              }
            </p>
            <img src={miniFlash} className="mini-flash"/>
            <div className='button-container'>
              <div className="first-button" onClick={useFireWork}>
                <p>
                  {
                    userData['first-button']
                  }
                </p>
              </div>
              <a className="first-button second-button" href={`${process.env.PUBLIC_URL}/meysam-balafkan.pdf`} >
                <p>
                  {
                    userData['second-button']
                  }
                </p>
                <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 10L12 15L7 10" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 15V3" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <img src={vectorOne} className="vector-one" />
        </div>
        {/* End firstPage */}
        
        {/* Start secondPage */}
        <div className="second-page" id="about-me-page">
          <div className='second-page-container'>
            <div>
              <p className="title-description">
                {
                  userData['about-me']
                }
              </p>
              <p className="about-me-description">
                {
                  userData['about-me-description']
                }
              </p>
              <img src={bgSecond} className="bg-second-page"/>
            </div>
          </div>
          <img src={pageTwo} className='pageTwo-vector' />
        </div>
        {/* End secondPage */}

        {/* Start thirdPage */}
        <div className="third-page" id="project-page">
          {/* <img src={bgThird} srcSet={bgThirdDesktop} className="bg-third-page"/> */}

          <div className='third-page-container'>
            <p className="title-description">
              {
                userData['project-title']
              }
            </p>
            {
              Object.entries(userData['projects']).map(([key, value]) => {
                return (
                  <a 
                    key={key}
                    className="card-container" 
                    href={value[1]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={process.env.PUBLIC_URL + value[2]} className="project-card-image" />
                    <p className="project-card-description">
                      {value[0]}
                    </p>
                  </a>
                );
              })
            }
          </div>
          {/* <img src={bgThirdDesktop} className="bg-third-page"/> */}
          {/* <img src={bgThird} className="bg-third-page-mobile"/> */}
        </div>
        {/* End ThirdPage */}

        {/* Start FourthPage */}
        <div className="fourth-page" id="fourth-page">
          <p className="title-description" >
            {
              userData['skill-title']
            }
          </p>
          <img src={skillImage} className='skills-image'/>
          <div className="skill-container-ul">
            <ul>
              {
                userData['skills'][0].map((value)=>{
                  return <li> <span> {value} </span> </li>
                })
              }
            </ul>
            <ul>
              {
                userData['skills'][1].map((value)=>{
                  return <li> <span> {value} </span> </li>
                })
              }
            </ul>
          </div>
        </div>
        {/* End FourthPage */}

        {/* Start FifsPage */}
        <div className="fifth-page" id="Contact-with-me">
          <p className="title-description" >
            {
              userData['contact-title']
            }
          </p>
          <img src={contactImage} className='skills-image' />
          <p>
            شماره تماسم:{'\r'}
            {userData.phone}
          </p>
          <p>
            ایمیلم:{'\r'}
            {userData.mail}
          </p>
          <p>
            تلگرامم:{'\r'}
            {userData.user_id}
          </p>
        </div>
        {/* End fifthPage */}

        <div className="end-line"></div>

        {/* Start sixthPage */}
        <div className="sixth-page">
          <div>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.52149 19.5059C8.52147 19.3592 8.48919 19.2144 8.42695 19.0816C8.3647 18.9488 8.27401 18.8313 8.16131 18.7375C8.0486 18.6436 7.91663 18.5757 7.77476 18.5386C7.63289 18.5014 7.48458 18.4959 7.34034 18.5225C6.03126 18.7627 4.37843 18.7988 3.93897 17.5645C3.55578 16.6085 2.92105 15.774 2.10206 15.1495C2.04363 15.1177 1.98794 15.0811 1.93556 15.0401C1.86389 14.851 1.73658 14.6881 1.57043 14.5729C1.40428 14.4576 1.2071 14.3955 1.00489 14.3946H1.00001C0.735613 14.3945 0.481942 14.4991 0.294525 14.6856C0.107109 14.8721 0.00121216 15.1253 1.4021e-05 15.3897C-0.00389598 16.2051 0.811014 16.7276 1.14161 16.9043C1.53146 17.296 1.84477 17.7571 2.06544 18.2637C2.4297 19.2872 3.48829 20.8399 6.53126 20.6397C6.53226 20.6749 6.53321 20.7081 6.5337 20.7383L6.53809 21.0059C6.53809 21.2711 6.64345 21.5255 6.83099 21.713C7.01852 21.9006 7.27288 22.0059 7.53809 22.0059C7.80331 22.0059 8.05766 21.9006 8.2452 21.713C8.43274 21.5255 8.53809 21.2711 8.53809 21.0059L8.53321 20.6876C8.52833 20.4981 8.52149 20.2236 8.52149 19.5059ZM19.1885 4.37987C19.2202 4.25487 19.2515 4.1162 19.2788 3.95995C19.4406 2.84554 19.2996 1.70814 18.8706 0.666948C18.8165 0.531211 18.7333 0.408955 18.627 0.308751C18.5206 0.208547 18.3936 0.132819 18.2549 0.0868779C17.8989 -0.0332421 16.5845 -0.269572 14.0708 1.33688C11.9814 0.845173 9.80629 0.845173 7.71682 1.33688C5.21339 -0.246042 3.90577 -0.0312421 3.55323 0.0820379C3.4111 0.126118 3.28063 0.201445 3.17138 0.302496C3.06214 0.403547 2.97689 0.527762 2.92188 0.666038C2.48419 1.72722 2.34472 2.88781 2.51856 4.02248C2.54298 4.15041 2.56934 4.26858 2.59669 4.37697C1.76826 5.48041 1.327 6.82633 1.34132 8.20607C1.33862 8.5139 1.35281 8.82166 1.3838 9.12794C1.7178 13.7305 4.7178 15.1123 6.80811 15.5869C6.76466 15.7119 6.72511 15.8457 6.68995 15.9873C6.62729 16.2446 6.66922 16.5163 6.80655 16.7427C6.94388 16.9691 7.1654 17.1318 7.42252 17.1952C7.67965 17.2585 7.95141 17.2173 8.1782 17.0806C8.40499 16.9439 8.56831 16.7228 8.63233 16.4658C8.69596 16.1326 8.85905 15.8266 9.10011 15.5879C9.24587 15.4603 9.3514 15.2931 9.40387 15.1066C9.45634 14.9201 9.45348 14.7224 9.39564 14.5375C9.33781 14.3526 9.22748 14.1885 9.0781 14.0652C8.92872 13.9419 8.74671 13.8646 8.55421 13.8428C5.10011 13.4483 3.60059 12.041 3.37501 8.94436C3.35003 8.69909 3.33878 8.45261 3.34132 8.20608C3.32528 7.22273 3.65015 6.26416 4.26075 5.49319C4.32211 5.41281 4.38746 5.33556 4.45655 5.26174C4.57899 5.12474 4.6613 4.95666 4.69447 4.77594C4.72763 4.59523 4.71036 4.40887 4.64455 4.23733C4.57709 4.05686 4.52514 3.87096 4.48928 3.68166C4.40782 3.14337 4.43454 2.59425 4.56788 2.06642C5.43702 2.31189 6.255 2.71146 6.98288 3.2461C7.10325 3.32627 7.23946 3.37963 7.38226 3.40254C7.52505 3.42546 7.67111 3.4174 7.81052 3.37892C9.83163 2.83042 11.9624 2.83076 13.9834 3.37992C14.1235 3.41836 14.2704 3.42596 14.4138 3.40219C14.5571 3.37842 14.6937 3.32384 14.8139 3.24223C15.5384 2.70537 16.353 2.30223 17.2192 2.0518C17.352 2.56695 17.3817 3.10325 17.3066 3.62992C17.2704 3.83746 17.2138 4.04092 17.1377 4.23735C17.0719 4.40889 17.0546 4.59525 17.0878 4.77596C17.1209 4.95668 17.2032 5.12476 17.3257 5.26176C17.4028 5.34867 17.48 5.44242 17.5493 5.53031C18.1556 6.28823 18.475 7.23578 18.4512 8.20607C18.453 8.46568 18.4404 8.72519 18.4136 8.98341C18.1934 12.0391 16.688 13.4473 13.2178 13.8428C13.0252 13.8647 12.8432 13.9421 12.6938 14.0656C12.5445 14.189 12.4342 14.3532 12.3764 14.5382C12.3186 14.7232 12.3159 14.921 12.3684 15.1075C12.4209 15.294 12.5265 15.4613 12.6724 15.5889C12.921 15.8339 13.0845 16.1522 13.1387 16.4971C13.2063 16.7648 13.2373 17.0404 13.231 17.3164V19.6504C13.2212 20.2979 13.2212 20.7832 13.2212 21.0059C13.2212 21.2711 13.3265 21.5254 13.5141 21.713C13.7016 21.9005 13.956 22.0059 14.2212 22.0059C14.4864 22.0059 14.7408 21.9005 14.9283 21.713C15.1158 21.5254 15.2212 21.2711 15.2212 21.0059C15.2212 20.7891 15.2212 20.3135 15.231 19.666V17.3164C15.239 16.8742 15.1869 16.433 15.0762 16.0049C15.0445 15.8643 15.0057 15.7255 14.96 15.5889C16.4812 15.3362 17.8634 14.5518 18.8606 13.3755C19.8577 12.1992 20.4051 10.7072 20.4053 9.16506C20.4382 8.84648 20.4535 8.52633 20.4512 8.20607C20.4734 6.82484 20.0284 5.47657 19.1885 4.37987Z" fill="#EEEEEE" fill-opacity="0.75"/>
            </svg>
          </div>
          
          <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6371 5.72746V7.98992C11.0814 7.26822 11.6937 6.6819 12.4142 6.28836C13.1346 5.89481 13.9386 5.70751 14.7473 5.7448C19.0662 5.7448 20 8.62453 20 12.3708V19.9981H15.9998V13.2361C15.9998 11.6229 15.6948 9.54844 13.3397 9.54844C11.0559 9.54844 10.6659 11.3043 10.6659 13.1161V19.9981H6.67824V5.72746H10.6371ZM3.99938 2.14113C3.99889 2.56376 3.88143 2.97684 3.66172 3.32856C3.44201 3.68028 3.12984 3.955 2.76433 4.11828C2.39898 4.28024 1.99671 4.32261 1.60871 4.23999C1.22071 4.15737 0.864529 3.9535 0.5855 3.65432C0.305947 3.35496 0.115625 2.97413 0.0384694 2.55972C-0.0386864 2.1453 0.000768408 1.71581 0.151872 1.32524C0.302975 0.934681 0.558981 0.600486 0.887696 0.364685C1.21641 0.128883 1.60316 0.00200302 1.9993 0C2.26259 -1.97434e-06 2.52329 0.0554369 2.76644 0.163137C3.00959 0.270837 3.23041 0.428678 3.41623 0.627606C3.60205 0.826534 3.74922 1.06263 3.84929 1.32236C3.94936 1.58209 4.00037 1.86033 3.99938 2.14113Z" fill="#DDDDDD" fill-opacity="0.75"/>
            <path d="M4.00015 5.74658H0V19.9999H4.00015V5.74658Z" fill="#DDDDDD" fill-opacity="0.75"/>
          </svg>
          </div>

          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9204 5.05032 19.765 4.22945 19.48 3.45C19.2269 2.78255 18.831 2.17846 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78198 0.777253 2.17736 1.17008 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17736 18.8299 2.78198 19.2227 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.765 15.7705 19.9204 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1329 14.6348 18.0179 15.2638 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7254 17.3403 16.3331 17.5961 15.9 17.76C15.3038 17.9779 14.6748 18.0929 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38085 18.1129 4.72445 18.0114 4.1 17.8C3.68619 17.6273 3.3119 17.3721 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01505 15.2954 1.8796 14.652 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86365 5.35098 1.98214 4.70772 2.21 4.1C2.38605 3.67791 2.65627 3.30166 3 3C3.30292 2.65519 3.67863 2.38195 4.1 2.2C4.7094 1.97948 5.35194 1.8645 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86709 15.2638 1.98206 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3767 3.30802 17.6326 3.68334 17.8 4.1C18.0224 4.70888 18.1375 5.35176 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z" fill="#DDDDDD" fill-opacity="0.75"/>
            </svg>
          </div>
        </div>
        {/* End sixthPage */}
        
        <div style={{visibility: showFireWork ? 'visible' : 'hidden'}}>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
      </div>
  );
}

export default App;