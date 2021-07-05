import React, { Component } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';



class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  toggleModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
  };

  render() {
    const { } = this.props;
    const { } = this.state;
    return (
      <div className="py-8 px-12 bg-gray-200 md:px-4 lg:px-8 md:py-8 xl:px-24 xl:py-2">
        <div className="flex flex-col mt-4 md:flex-row justify-between bg-white px-8 py-4 mb-8 border border-gray-200 rounded shadow">
          <div className=" w-full md:w-1/3 mt-4">
            <div className="flex flex-col md:flex-row w-full md:w-48 text-sm">
              <label className="md:self-center font-bold w-1/2">Filter By:</label>
              <div className="md:self-center relative mt-1 w-full">
                <select
                  // onChange={this.handleFilter}
                  className="block appearance-none bg-gray-200 w-full shadow border border-gray-200 text-sm text-gray-700 py-2 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="all">New</option>
                  <option value="all">Old</option>
                </select>
                <div className="pointer-events-none absolute text-gray-700 right-0 top-0 inset-y-0 pr-2 flex items-center">
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <br />

          
          <div className="flex flex-col md:flex-row w-full md:w-48 text-sm">
            <label className="md:self-center font-bold w-1/2">Size By:</label>
            <div className="md:self-center relative mt-1 w-full">
              <select
                // onChange={this.handleFilter}
                className="block appearance-none bg-gray-200 w-full shadow border border-gray-200 text-sm text-gray-700 py-2 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="all">Small</option>
                <option value="all">Medium</option>
                <option value="all">Large</option>
                <option value="all">Extra Large</option>
              </select>
              <div className="pointer-events-none absolute text-gray-700 right-0 top-0 inset-y-0 pr-2 flex items-center">
                <svg
                  className="fill-current h-4 w-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* wrapper */}

        <div className="text-black text-2xl font-bold">
                  WEDDING GOWNS
                </div>
        <div className="block md:flex flex-wrap mt-2">
          {/* section 1 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/gown.jpg" alt="logo" />
              </div>
              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Rosy Gown</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <button>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded  modal-button">
                  <button classname="" onClick={this.toggleModal}>
                    <i class="fa fa-eye" aria-hidden="true"></i>

                  </button>

                </div>

              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/gown2.png" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Round Neck</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 3 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/gown3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">Black Jacket</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 4 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/gown3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>
              </div>
              <div className="font-bold">White Hoodie</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="text-black text-2xl mt-8 font-bold">
                  SHIRT
                </div>
        <div className="block md:flex flex-wrap mt-2">
          {/* section 1 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/shirt1.jpg" alt="logo" />
              </div>
              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Rosy Gown</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <button>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded  modal-button">
                  <button classname="" onClick={this.toggleModal}>
                    <i class="fa fa-eye" aria-hidden="true"></i>

                  </button>

                </div>

              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/shirt3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Round Neck</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 3 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/shirt2.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">Black Jacket</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 4 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/shirt4.jpg" alt="logo" />
              </div>

              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>
              </div>
              <div className="font-bold">White Hoodie</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="text-black text-2xl mt-8 font-bold">
                  TROUSER
                </div>
        <div className="block md:flex flex-wrap mt-2">
          {/* section 1 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/trouser.jpg" alt="logo" />
              </div>
              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Rosy Gown</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <button>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <button>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>

                </div>

              </div>
            </div>

          </div>

          {/* section 2 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/trouser2.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Round Neck</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 3 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/trouser3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">Black Jacket</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 4 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/trouser4.jpg" alt="logo" />
              </div>

              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>
              </div>
              <div className="font-bold">White Hoodie</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="text-black text-2xl mt-8 font-bold">
                  JACKET
                </div>
        <div className="block md:flex flex-wrap mt-2">
          {/* section 1 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/jacket.jpg" alt="logo" />
              </div>
              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Rosy Gown</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <button>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <button>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>

                </div>

              </div>
            </div>

          </div>

          {/* section 2 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/jacket1.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Round Neck</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 3 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/jacket3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">Black Jacket</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 4 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/jacket3.jpg" alt="logo" />
              </div>

              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>
              </div>
              <div className="font-bold">White Hoodie</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="text-black text-2xl mt-6 font-bold">
                  HATS
                </div>
        <div className="block md:flex flex-wrap mt-2">
          {/* section 1 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/hat.jpg" alt="logo" />
              </div>
              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Rosy Gown</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <button>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <button>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </button>

                </div>

              </div>
            </div>

          </div>

          {/* section 2 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/hat1.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">White Round Neck</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 3 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0 md:mr-6">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/hat2.jpg" alt="logo" />
              </div>

              <div className="flex justify-between  ">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>

              </div>
              <div className="font-bold">Black Jacket</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>

          {/* section 4 */}
          <div className="flex-1">

            <div className="border bg-white rounded p-4 relative mt-4 md:mt-0">
              <div className="flex justify-between ">
                <div className="flex-initial border px-2 text-center bg-green-500 text-white rounded">
                  new
                </div>
                <div className="flex-initial border px-2 text-center bg-orange-500 text-white rounded">
                  -40%
                </div>
              </div>
              <div className="border-b">
                <img className="rounded" src="/assets/hat1.jpg" alt="logo" />
              </div>

              <div className="flex justify-between">
                <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                  25,000
                </div>
                <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                  30,000
                </div>
              </div>
              <div className="font-bold">White Hoodie</div>
              <div>Condition: <span classname="font-bold">New</span></div>
              <div className="flex  ">
                <div className="flex-initial border py-1 px-2 bg-gray-200 mr-4 text-center rounded">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="flex-auto mr-4 text-center border bg-purple-500 text-white rounded">
                  Add to Cart
                </div>
                <div className="flex-initial py-1 px-2 border bg-gray-200 text-center rounded">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={this.toggleModal}
            className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          ></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content text-left">
              <div className="flex justify-between items-center py-4 px-6 bg-primary mb-3 text-white">
                <p className="text-md font-semibold">
                  Confirmation
                </p>
                <div
                  onClick={this.toggleModal}
                  className="modal-close cursor-pointer z-50"
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 w-full">
                  <h1 classname="text-black font-bold">White Rosy Gown </h1>
                  <img className="rounded h-48 w-48" src="/assets/gown.jpg" alt="logo" />
                </div>

                <div className="flex-1 w-full">
                  <p classname="text-black font-bold">White Rosy Gown </p>
                  <p classname="text-black font-bold">SKU:  <span>1234567</span> </p>
                  <div className="flex justify-between mt-4">
                    <div className="flex-initial text-blue-500 font-bold text-center  text-white rounded">
                      25,000
                    </div>
                    <div className="flex-initial line-through text-center font-bold text-red-500  text-white rounded">
                      30,000
                    </div>
                  </div>

                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facilis
                    repudiandae nostrum at illum, unde dicta, aliquam, deleniti voluptatibus
                    enim eius blanditiis officiis nesciunt exercitationem. Optio consequuntur aperiam itaque nisi!
                  </h1>

                  <div className="flex">
                    <div className="flex-auto mr-4 text-center text-black">
                      SIZE:
                    </div>

                    <div className="flex-auto mr-4  px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      SM
                    </div>

                    <div className="flex-auto mr-4  px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      L
                    </div>

                    <div className="flex-auto mr-4 px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      XL
                    </div>

                    <div className="flex-auto mr-4 px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      XXL
                    </div>

                    <div className="flex-auto mr-4 px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      L
                    </div>
                  </div>
                  <div className="flex mt-4 mb-8">
                    <div className="flex-initial mr-4 text-center text-black">
                      Category:
                    </div>

                    <div className="flex-initial border-b px-2 text-center border bg-gray-200 text-blue-900 rounded">
                      New
                    </div>

                  </div>

                  <div className="flex mt-4 mb-8">
                    <button className="flex-1 border mr-4 font-bold rounded bg-blue-500 p-2 text-center text-white">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
                    </button>

                    <button className="flex-1 font-bold p-2 text-center border bg-blue-500 text-white rounded">
                      <i class="fa fa-heart" aria-hidden="true"></i> Add To Wish
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="p-2 font-bold border bg-purple-800 text-white mt-24 rounded text-center">
            LOAD MORE ITEMS

          </button>
        </div>

      </div >
    )
  }
}



export default Packages;