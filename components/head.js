import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = (props) => (
   <NextHead>
      <meta charset="UTF-8" />
      <title>{props.title || ''}</title>
      <link rel="icon" href="../static/logo_recaptcha.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
   </NextHead>
)

Head.propTypes = {
   title: string
}

export default Head
