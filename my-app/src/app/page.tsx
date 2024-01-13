export default async function Home() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    // className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    // aria-current="page"
                  >
                    Home
                  </a>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Products
                  </a>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Wishlist
                  </a>
                  <button
                    type="submit"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Team
            </a>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Projects
            </a>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Calendar
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center h-96 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4">Welcome to Our Homepage</h1>
        <p className="text-lg mb-8">
          Explore the latest trends in fashion and find the perfect outfit for
          any occasion.
        </p>
        <a
          href={"/products"}
          className="inline-block px-6 py-3 text-lg bg-white text-blue-500 rounded hover:bg-blue-700 hover:text-white transition"
        >
          Explore Products
        </a>
      </div>
      <div className="flex flex-wrap gap-8 justify-center  bg-gradient-to-r from-blue-500 to-purple-500 p-8">
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-md p-4 shadow-md">
          <img
            className="w-full"
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/22/5696699/5696699_235702d9-a2f1-47dc-af34-3e795f3ef0a0_2048_2048.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nama</div>
            <p className="text-gray-700 text-base">Bahan</p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Detail
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
