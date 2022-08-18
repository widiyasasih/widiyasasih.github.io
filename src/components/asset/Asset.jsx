function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../../assets/images', false, /\.(png|jpe?g|jpg|svg)$/)
);

export default images;

// const Asset = ({ number, suit }) => {
//   const combo = number ? `${number}${suit}` : 'red_back';

//   return (
//     <img
//       src={images[`${combo}.png`].default}
//       alt={combo}
//       height={150}
//       width={150}
//     />
//   );
// };
