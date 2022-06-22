
// import PropTypes from 'prop-types
// import Button from './'Button'

// const Header = ({title}) =>{
//   return (
//     <header classNameName='header'>
//        <h1>{title}</h1>
//        <Button color='steel' text='Home' event={App} />
//        <Button color='steel' text='About' event={AboutPage} />
//        <Button color='steel' text='Contact' event={ContactPage} />
//     </header>
//   )
// }

// //Has to have defaultProps
// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.propTypes = {
//   title: Proptypes.string.isRequired,
// }

// export default Header


// import PropTypes from 'prop-types'
// import Button from './'Button'

// const Footer = ({txtFooter}) =>{
//    return (
//      <footer classNameName='footer'>     ////Footer container
//        <h1>{txtFooter}<h1/>
//        <Button color='orange' text='Instagram'/>
//        <Button color='blue' text='Facebook'/>
//        <Button color='turquoise' text='Tweeter'/>
//     </footer>
//   )
// }

// Footer.defaultProps =
// {
//   txtFooter: 'Contact Us Here:'
// }

// Footer.propTypes =
// {
//    txtFooter: PropTypes.string.isRequired,
// }

// export default Footer

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// Button.js::::::::::::::::::::::::::::::::::::::

// import PropTypes from 'prop-types'

// const Button = ({color, text, event}) =>{
//    return (
//      <button onClick={event} style={{backgroundColor: color}} classNameName='btn'>
//         {text}
//      </button>

//   )
// }

// Button.defaultProps =
// {
//   color: 'steelblue'
// }

// Button.propTypes =
// {
//    text: PropTypes.string,
//    color: PropTypes.string,
//    onClick: PropTypes.func,
// }

// export default Button

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx







// import Header from './components/Header'
// import Footer from './components/Footer'
// import Home from './components/Home'
import SignIn from './components/SignIn'
const App = () => {
  
  return (
    // <Router>
     <div >
        <SignIn />
        {/* <Route path='/home' component={Home} /> */}
      </div>
      
    // </Router>

  )

}

export default App









//  AboutPage.js:::::::::::::::::::::::::::::::::::::::::::::::

// import Header from './components/Header' 
// import Header from './components/Footer'

// const AboutPage = () =>{
//    return (
//      <div classNameName= 'container'>
//        <Header />    ///////Calling component Header.js//
         
//                     <br></br><br>
//             <p> About Page</p>

//             <p>khguherg rkghaerg arg arighjarg aergjarg,milrag jkh
//                <br></br>kuhgkurhg krbiuagb agrgg knrg akjnvn zvkubukn
//             </p>
            
//                    </br><br></br>
//        <Footer />    ///////Calling component Footer.js//
//      </div>
//    )

// }

// export default App

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx










// ContactPage.js:::::::::::::::::::::::::::::::::::::::::::::::

// import Header from './components/Header' 
// import Header from './components/Footer'

// const ContactPage = () =>{
//    return (
//      <div classNameName= 'container'>
//        <Header />    ///////Calling component Header.js//
         
//                   <br></br><br>

//             <p> Contact Page</p>

//             <li>Contacts: 063 964 8227
//             <li>Email: thabisol816@gmail.com
//             <li>Address: 71 Tyala Street
//               <br></br>
//                          Galeshewe
//               <br></br>
//                          Kimberley

//                   </br><br></br>
//        <Footer />    ///////Calling component Footer.js//
//      </div>
//    )

// }
