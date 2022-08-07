import React, { lazy, useEffect, useState } from "react";
import shortid from "shortid";

const importView = (subreddit) =>
  lazy(() => import(`./${subreddit}`).catch(() => import(`./PageOne.js`)));

export default function App({ subredditsToShow }) {
  const [views, setViews] = useState([]);

  useEffect(() => {
    async function loadViews() {
      const componentPromises = subredditsToShow.map(async (subreddit) => {
        const View = await importView(subreddit);
        return <View key={shortid.generate()} />;
      });

      Promise.all(componentPromises).then(setViews);
    }

    loadViews();
  }, [subredditsToShow]);

  return (
    <React.Suspense fallback="Loading views...">
      <div className="container">{views}</div>
    </React.Suspense>
  );
}
