import React from 'react'
import Head from '../components/head'
import ReCAPTCHA from 'react-google-recaptcha'

export default class extends React.Component {
   constructor(props) {
      super(props)
      this.state = {recaptchaFilled: false, value: ''}
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFilled = this.handleFilled.bind(this)
      this.handleExpired = this.handleExpired.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
   }
   handleSubmit(event) {
      if (this.state.recaptchaFilled) return true
      event.preventDefault()
      alert('Fill the captcha!')
   }
   handleFilled() {
      this.setState({recaptchaFilled: true})
   }
   handleExpired() {
      this.setState({recaptchaFilled: false})
   }
   handleTextChange(event) {
      this.setState({value: event.target.value})
   }
   render() {
      return (
         <div>
            <Head title="Google reCAPTCHA app"/>
            <h1>NOW YOU SEE ME WORKED~</h1>
            <form method="post" action="?query=submit" onSubmit={this.handleSubmit}>
               <input type="email" name="email" placeholder="Type your email" size="40" required/><br/>
               <textarea type="text" name="content" value={this.state.value} onChange={this.handleTextChange} placeholder="Enter your comments" size="40" required/>
               <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6Ldy80YUAAAAAFk1TycvEjZ7wu_tQb3ti5_vq7Qp"
                  onChange={this.handleFilled}
                  onExpired={this.handleExpired}
               />
               <input type="submit"/><br/><br/>
            </form>
         </div>
      )
   }
}
