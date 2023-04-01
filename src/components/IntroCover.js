




export default function IntroCover(props) {
    
    return(<>
    <div className="cover-container">
      {/* <div className="cover-image" style={{ backgroundImage: `url(${props.image})` }}></div> */}
      <div className="content-container">
        {props.children}
        <div id="wrapper">some content</div>

      </div>
    </div>
    <div className="cover-container">some content</div>

    </>)


}


