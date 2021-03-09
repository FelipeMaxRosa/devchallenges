import Head from 'next/head';
import { Button } from '@material-ui/core';
// import { StButton } from '../components/styled';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Music Library Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button color="primary" variant="outlined">Hello World</Button>
        {/* <StButton>Styled</StButton> */}
      </main>
    </div>
  )
}
