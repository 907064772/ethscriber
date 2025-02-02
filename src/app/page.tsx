import CenteredContainer from '../components/CenteredContainer';
import { ConnectButton } from '../components/ConnectButton';
import { Ethscribe } from '../components/Ethscribe';
import { GithubButton } from '../components/GithubButton';

function Home() {
  return (
    <>
      <div style={{ position: 'fixed', top: 10, left: 10 }}>
        <GithubButton />
      </div>
      <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <ConnectButton />
      </div>
      <CenteredContainer>
        <h2 style={{ fontFamily: '"Roboto", sans-serif' }}>Ethscriber</h2>
        <div
          style={{
            fontFamily: '"Roboto", sans-serif',
            marginBottom: 25,
            textAlign: 'center',
          }}
        >
          A simple tool to inscribe text{' '}
          <a href="https://ethscriptions.com/">ethscriptions</a> by{' '}
          <a href="https://twitter.com/zac_denham">zacque.eth</a>.
        </div>
        <Ethscribe />
      </CenteredContainer>
    </>
  );
}

export default Home;
