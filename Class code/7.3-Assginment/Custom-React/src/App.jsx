const anchorData = {
  type: "a",
  props: {
    herf: "https://www.google.com/",
    innerText: "click here",
  },
};

function generateTag(anchorData) {
  return `<${anchorData.type} href="${anchorData.props.herf}">${anchorData.props.innerText}</${anchorData.type}>`;
}

function customRender(anchorData, root) {
  const rootElement = document.querySelector(root);

  const htmlTag = generateTag(anchorData);
  // console.log(htmlTag);

  rootElement.innerHTML = htmlTag;
}

function App() {
  return <>{customRender(anchorData, "#root")}</>;
}

export default App;
