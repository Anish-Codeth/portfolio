import Card from "../card/page";

const responseOfCommand = (responseOf) => {
  // const chips = () => {
  //   let jsx = <div>command</div>;
  //   return jsx;
  // };

  // return chips();
  switch (responseOf) {
    case "about":
      return <Card />;
    default:
      return (
        <div className="border-2 border-red-50 inline-block relative">
          <p>{responseOf}: command not found</p>
          <p>write --help for help</p>
        </div>
      );
  }
};

export default responseOfCommand;
