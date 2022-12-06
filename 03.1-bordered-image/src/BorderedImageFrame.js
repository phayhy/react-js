const myStyle = {
  border: '4px solid red'
};   

function BorderedImageFrame(props) {
    return (
      <img style={myStyle} src={props.newImage} height = "300" alt="new image" />
    );
  }

  export default BorderedImageFrame;