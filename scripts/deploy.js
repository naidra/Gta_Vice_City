import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    src: ["**/*", "!game.tar.gz"],
    nojekyll: true,
  },
  (error) => {
    if (error) {
      console.error(error.message);
      process.exitCode = 1;
      return;
    }
    console.log("Published to the gh-pages branch.");
  },
);
