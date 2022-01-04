import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import 'assets/scss/material-kit-pro-react.scss'

// pages for this product
import AboutUsPage from 'views/AboutUsPage/AboutUsPage.js'
import BlogPostPage from 'views/BlogPostPage/BlogPostPage.js'
import BlogPostsPage from 'views/BlogPostsPage/BlogPostsPage.js'
import ComponentsPage from 'views/ComponentsPage/ComponentsPage.js'
import ContactUsPage from 'views/ContactUsPage/ContactUsPage.js'
import EcommercePage from 'views/EcommercePage/EcommercePage.js'
import LandingPage from 'views/LandingPage/LandingPage.js'
import LoginPage from 'views/LoginPage/LoginPage.js'
import PresentationPage from 'views/PresentationPage/PresentationPage.js'
import PricingPage from 'views/PricingPage/PricingPage.js'
import ProfilePage from 'views/ProfilePage/ProfilePage.js'
import ProductPage from 'views/ProductPage/ProductPage.js'
import SectionsPage from 'views/SectionsPage/SectionsPage.js'
import ShoppingCartPage from 'views/ShoppingCartPage/ShoppingCartPage.js'
import SignupPage from 'views/SignupPage/SignupPage.js'
import ErrorPage from 'views/ErrorPage/ErrorPage.js'

const hist = createBrowserHistory()

const reload = () => window.location.reload()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/product-page' component={ProductPage} />



      <Route path="/docs/index.html" onEnter={reload} />
      <Route path='/docs/openid-client.html' onEnter={reload} />
      <Route path='/d3/d3-bubble-covid/index.html' onEnter={reload} />




      <Route path='/profile-page' component={ProfilePage} />
      
      

      
      <Route path='/about-us' component={AboutUsPage} />
      <Route path='/blog-post' component={BlogPostPage} />
      <Route path='/blog-posts' component={BlogPostsPage} />
      <Route path='/components' component={ComponentsPage} />
      <Route path='/contact-us' component={ContactUsPage} />
      <Route path='/ecommerce-page' component={EcommercePage} />
      <Route path='/landing-page' component={LandingPage} />
      <Route path='/login-page' component={LoginPage} />
      <Route path='/pricing' component={PricingPage} />
      



      <Route path='/sections' component={SectionsPage} />
      <Route path='/shopping-cart-page' component={ShoppingCartPage} />
      <Route path='/signup-page' component={SignupPage} />
      <Route path='/error-page' component={ErrorPage} />

      
      <Route path='/' component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
