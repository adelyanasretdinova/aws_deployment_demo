const Card = () => {
  return (
    <>
    <div className="card" style={{ width: "18rem", border: "solid" }}>
      <div className="card-body">
        <h5 className="card-title">T-shirt</h5>
        <p className="card-text">  A nice cotton T-Shirt  </p>
        <button className="btn btn-primary" id='T-shirt'  >Add to outfit</button>
      </div>
    </div>
    <p>This will not break it!</p>
    </>
  )
}

export default Card