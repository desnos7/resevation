import "../assets/css/vehicule.css";

function vehicule() {
  return (
    <>
      <div class="container ">
        <div class="card  mt-5">
          <div class="row">
            <div class="col-sm-5">
              <img
                class="d-block w-100"
                src="https://picsum.photos/150?image=641"
                alt=""
              />
            </div>
            <div class="col-sm-7 ">
              <div class="card-block ">
                <h4 class="card-title">Small card</h4>
                <p >Copy paste the HTML and CSS.</p>
                <p>Change around the content for awsomenes</p>
                <p>Copy paste the HTML and CSS.</p>
                <p>Change around the content for awsomenes</p>
                <p>Copy paste the HTML and CSS.</p>
                <p>Change around the content for awsomenes</p>
                <br />
                <a href="#" class="btn btn-primary btn-sm float-right  p-4 ">
                  Read More
                </a>
                <a href="#" class="btn btn-primary btn-sm float-right p-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default vehicule;
