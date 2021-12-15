import React from "react";
import { Carousel, CarouselItem, Container, Row, Col } from "react-bootstrap";

import headphones from "../../../Images/headphones.jpg";
import bags from "../../../Images/bags.jpg";
import laptops from "../../../Images/laptops.jpg";

function Content() {
  return (
    <div>
      <section class="">
        {/* <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                alt="First slide"
                style={{ height: "520px" }}
              />
            </div>
            <div class="carousel-item active">
              <img
                class="d-block w-100 "
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
                style={{ height: "520px" }}
              />
            </div>
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://cdn7.dissolve.com/p/D2115_162_751/D2115_162_751_1200.jpg"
                alt="Third slide"
                style={{ height: "520px" }}
              />
            </div>
          </div>
        </div> */}
        <Carousel interval="3000">
          <CarouselItem>
            <img
              className="d-block w-100 h-10"
              src={headphones}
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src={laptops} alt="Second slide" />
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src={bags} alt="Third slide" />
          </CarouselItem>
        </Carousel>
      </section>

      <section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Know about us</h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">The Team</h3>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Abby Smith
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">CEO</h6>
                </div>
              </div>

              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Brian Johnson
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">VP-Marketing</h6>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Carly Williams
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">VP-Sales</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Daniela Jones
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">
                    VP-Innovations
                  </h6>
                </div>
              </div>

              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Eddy Scott
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">VP-Technology</h6>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(11).jpg"
                      class="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Fannie Cusak
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">
                    VP-Customer Relations
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Our Company</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5a32d9be04286346b0bc865f/images/5eac85db2c7d3a5ea54a5400/file-YdskpgY37U.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Location 1</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://www.google.co.in/maps/@25.5740882,83.9638417,15z"
                    class="btn btn-primary"
                  >
                    Find location
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="https://www.hours.be/map.php?store=H40o7PPHfOQ%3D"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Location 2</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://www.google.co.in/maps/@25.5740882,83.9638417,15z"
                    class="btn btn-primary"
                  >
                    Find location
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/R.9ae2e993eee416ec066ba142413c4ecc?rik=jN2ydRW7mlX6Jw&riu=http%3a%2f%2frealestate-ink.com%2fwp-content%2fuploads%2f2016%2f01%2fHomes-near-Endeavor-Elementary-in-West-Chester-OH-School-Data.png&ehk=VVV4zme9hlvdjsrbvzQHeZdljvM4OzqwoxBsdT646Yg%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Location 3</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://www.google.co.in/maps/@25.5740882,83.9638417,15z"
                    class="btn btn-primary"
                  >
                    Find location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4">Information</h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Location
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Company Journey
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Founder
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">testimonial</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Customer</h6>
                <p class="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Ella Davies
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Customer</h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                <h6 class="font-weight-bold blue-text my-3">Customer</h6>
                <p class="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
