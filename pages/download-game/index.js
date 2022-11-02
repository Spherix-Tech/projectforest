import Head from "next/head";
import DownloadGameComponent from "../../src/components/download-game/DownloadGameComponent";

function DownloadGame() {
  return (
    <div>
      {" "}
      <Head>
        <title>Download Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <title>Download Project Forest Game | Project Forest</title>
        <meta
          name="title"
          content="Sustainability Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          name="description"
          content="Project Forest is a collection of sustainability focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />
        <meta
          property="og:image"
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.png"
          key="ogimage"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projectforest.io/" />
        <meta
          property="og:title"
          content="Sustainability Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="og:description"
          content="Project Forest is a collection of sustainability focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />

        <meta
          property="twitter:image"
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.png?v1"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projectforest.io/" />
        <meta
          property="twitter:title"
          content="Sustainability Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="twitter:description"
          content="Project Forest is a collection of sustainability focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />
      </Head>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <DownloadGameComponent />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DownloadGame;
