import React from 'react'
import urql from 'urql'
import { withUrqlClient } from 'next-urql'

const Page = () => {
  return <h1>Edit this text and it will <strong>NOT</strong> be updated with Fast Refresh.</h1>
}

export default withUrqlClient(() => ({ url: "https://graphql-pokemon.now.sh/" }))(Page);
