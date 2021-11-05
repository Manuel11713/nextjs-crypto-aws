const SSRPage = ({ data }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <p>{data.randomNumber}</p>
  </main>
);
export default SSRPage;

export async function getServerSideProps() {
  // Fetch data from external API
  const data = {
    randomNumber: Math.random(),
  };

  // Pass data to the page via props
  return { props: { data } };
}
