import Head from "next/head";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

import ItemCard from "../../src/components/marketplace/ItemCard";
import MarketplaceNav from "../../src/components/marketplace/MarketplaceNav";
import Footer from "../../src/components/footer/Footer";
import { getAllMarketData } from "../../src/services/data-files/MarketplaceData";
import Filters from "../../src/components/marketplace/Filters";
import Pagination from "../../src/components/marketplace/Pagination";
import SearchBar from "../../src/components/marketplace/SearchBar";
import MobileFilters from "../../src/components/marketplace/MobileFilters";

const shop = getAllMarketData();

export default function MarketPlace() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [level, setLevel] = useState(1);
  const [age, setAge] = useState(1);
  const [items] = useState([...shop, ...shop]);

  const setQueryParam = (key, value) => {
    router.push({
      pathname: "/marketplace",
      query: { ...router.query, [key]: value },
    });
  };

  const removeAllQueryParams = () => {
    router.push({
      pathname: "/marketplace",
      query: {},
    });
    setLevel(1);
    setAge(1);
  };

  let shopList = [];

  const newItems = [...items];

  shopList =
    !!!router.query.sort ||
    router.query.sort === null ||
    router.query.sort === ""
      ? newItems
      : newItems.sort((a, b) => {
          if (
            !!!router.query.sort ||
            router.query.sort === null ||
            router.query.sort === ""
          )
            return;
          if (router.query.sort === "Price: Low To High")
            return parseFloat(a.price) - parseFloat(b.price);
          if (router.query.sort === "Price: High To Low");
          return parseFloat(b.price) - parseFloat(a.price);
          if (router.query.sort === "Score: Low To High")
            return parseFloat(a.score) - parseFloat(b.score);
          if (router.query.sort === "Score: High To Low")
            return parseFloat(b.score) - parseFloat(a.score);
          if (router.query.sort === "Quality: Low To High")
            return parseFloat(a.quality) - parseFloat(b.quality);
          if (router.query.sort === "Quality: High To Low")
            return parseFloat(b.quality) - parseFloat(a.quality);
        });

  shopList = shopList
    .filter((item) => {
      if (
        !!!router.query.area ||
        router.query.area === null ||
        router.query.area === ""
      )
        return true;
      if (item.area === router.query.area) return true;
      return false;
    })
    .filter((item) => {
      if (
        !!!router.query.rarity ||
        router.query.rarity === null ||
        router.query.rarity === ""
      )
        return true;
      if (item.rarity === router.query.rarity) return true;
      return false;
    })
    .filter((item) => {
      if (
        !!!router.query.seed ||
        router.query.seed === null ||
        router.query.seed === ""
      )
        return true;
      if (item.seed == router.query.seed) return true;
      return false;
    })
    .filter((item) => {
      if (item.level >= level) return true;
      return false;
    })
    .filter((item) => {
      if (item.age >= age) return true;
      return false;
    })
    .filter((item) => {
      if (
        router.query.search === "" ||
        !!!router.query.search ||
        router.query.search === null
      )
        return true;
      if (
        item.title
          .toLocaleLowerCase()
          .includes(router.query.search.toLocaleLowerCase())
      )
        return true;
      return false;
    })
    .slice((currentPage - 1) * 15, currentPage * 15)
    .map((props, i) => <ItemCard key={i} {...props} />);

  return (
    <div>
      <Head>
        <title>Project Forest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <title>Sustainability-Focused Grow to Earn NFTs | Project Forest</title>
        <meta
          name="title"
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          name="description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
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
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="og:description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />

        <meta
          property="twitter:image"
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.png?v1"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projectforest.io/" />
        <meta
          property="twitter:title"
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="twitter:description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJKS1PTP6Y"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XJKS1PTP6Y');
</script> */}
      </Head>

      <div className="full-page-bg-img min-h-screen text-black">
        <div className="flex w-full flex-col">
          <MarketplaceNav />
          <main className="flex h-full md:border-t md:border-[#CECECE] md:border-opacity-40">
            <Filters
              age={age}
              level={level}
              setAge={setAge}
              setLevel={setLevel}
              removeAllQueryParams={removeAllQueryParams}
            />
            <div className="flex-grow p-4 relative">
              <div className="flex gap-5 md:gap-0 justify-between items-center">
                <h1 className="md:text-2xl text-2xl -mt-2 font-semibold">
                  Marketplace
                </h1>
                <select
                  value={router.query.sort ?? "Price: Low To High"}
                  className="bg-white  text-[10px] md:text-sm p-1 hidden md:block text-[#A2A2A2] border-r-[4px] border-white"
                  onChange={(e) => setQueryParam("sort", e.target.value)}
                >
                  <option value="Price: Low To High">Price: Low To High</option>
                  <option value="Price: High To Low">Price: High To Low</option>
                </select>
              </div>
              <SearchBar />
              <MobileFilters
                age={age}
                level={level}
                setAge={setAge}
                setLevel={setLevel}
              />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-4">
                {shopList}
              </div>
              <Pagination
                currentPage={currentPage}
                items={items}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
