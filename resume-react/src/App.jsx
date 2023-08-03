import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[url('Background.png')]">
        <div className="navbar bg-base-200 rounded-lg">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">Kritwatchara</a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="https://www.techupth.com/">About</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=kerXy7fMv-U">
                  Passions
                </a>
              </li>
              <li>
                <a href="https://github.com/JumbKWC">Portfolio</a>
              </li>
            </ul>
            <a
              href="https://discordapp.com/users/1119207186023854181"
              className="btn bg-blue-500 text-white"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* section 1 */}
        <div className="hero w-100 bg-base-100">
          <div className="hero-content flex-row-reverse text-left">
            <img src="heroImg.png" className="max-w-sm rounded-lg" />
            <div className="m-8">
              <h1 className="text-2xl py-4">Hi !</h1>
              <h1 className="text-4xl font-bold">
                I'm Kritwatchara Wangkhumphai.
              </h1>
              <h1 className="text-4xl font-bold">a Front-End Developer</h1>
              <br />
              <h1 className="text-l">
                Front-End devel oper based in Bangkok, Thailand I'm coding with
                a clean and beautiful problem solving in mind.
              </h1>
            </div>
          </div>
        </div>
        {/* Section 2 | additional passions */}
        <div className="additional passions">
          <div className="flex justify-center p-10 space-x-2">
            <h1 className="text-xl">Additional</h1>
            <h1 className="text-xl font-bold">passions</h1>
          </div>
          <div className="flex space-x-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="FEimage.png" alt="Front-End" className="rounded-xl" />
              </figure>
              <div className="card-body flex-col items-center">
                <div className="flex justify-center space-x-2">
                  <h1 className="card-title text-l font-bold">Front-End</h1>
                  <p className="text-xl">Developer</p>
                </div>
                <p>(NodeJS, Laravel, Codeigniter)</p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="BEimage.png" alt="Back-End" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex justify-center space-x-2">
                  <h1 className="card-title text-l font-bold">Back-End</h1>
                  <p className="text-xl">Developer</p>
                </div>
                <p>(Figma, Zeplin, Adobe XD)</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="UXimage.png" alt="UX/UI" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex justify-center space-x-2">
                  <h1 className="card-title text-l font-bold">UI/UX</h1>
                  <p className="text-xl">Designer</p>
                </div>
                <p>(Sass, Bootstrap, Tailwind)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 | My portfolio */}
        <div className="additional passions">
          <div className="flex justify-center p-20 space-x-2">
            <h1 className="text-xl">My</h1>
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>

          <div className="flex space-x-4">
            <div className="card w-100 bg-base-100 shadow-xl bg-[url('Ellipse-1.png')] bg-no-repeat bg-[left_1rem_top_1rem]">
              <div className="flex flex-row items-center space-x-4">
                <img src="E-icon.png" />
                <p className="text-xl text-indigo-600">Sendpay</p>
              </div>
              <figure className="pt-10">
                <img src="image1.png" alt="Front-End" className="rounded-xl" />
              </figure>
            </div>

            <div className="card w-100 bg-base-100 shadow-xl bg-[url('Ellipse-2.png')] bg-no-repeat bg-[left_1rem_top_1rem]">
              <div className="sclae-70% m-1">
                <img src="E-Commerce.png" />
              </div>
              <div className="scale-70% m-1 ml-20 absolute">
                <img src="Website.png" className="relative left-10 top-6" />
              </div>
              <figure className="pt-10 mt-6">
                <img src="image2.png" alt="Back-End" className="rounded-xl" />
              </figure>
            </div>

            <div className="card w-100 bg-base-100 shadow-xl bg-[url('Ellipse-3.png')] bg-no-repeat bg-[left_1rem_top_1rem]">
              <div className="scale-50%">
                <img src="Logo3.png" />
              </div>
              <figure className="pt-10">
                <img src="image3.png" alt="UX/UI" className="rounded-xl" />
              </figure>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <footer className="footer footer-center w-100 p-20">
          <div className="flex justify-center space-x-1">
            <h1 className="text-xl">Contact</h1>
            <h1 className="text-xl font-bold">Me</h1>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/JumbKWC">
              <img src="Git.png" alt="Git" className="rounded-xl" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="Instagram.png" alt="IG" className="rounded-xl" />
            </a>
            <a href="mailto: kritwatchara.wang@gmail.com">
              <img src="Email.png" alt="Email" className="rounded-xl" />
            </a>
            <a href="tel: 0859043532">
              <img src="telpon.png" alt="Tel" className="rounded-xl" />
            </a>
          </div>
        </footer>

        <svg
          width="100%"
          height="330"
          viewBox="0 0 1440 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-201 330L-143.7 288.8C-86.4 247.6 28.2 165.2 142.8 165.2C257.4 165.2 372 247.6 486.6 247.6C601.2 247.6 715.8 165.2 830.4 151.552C945 136.875 1059.6 193.525 1174.2 178.847C1288.8 165.2 1403.4 82.8 1460.7 41.6L1518 0.400024V330H1460.7C1403.4 330 1288.8 330 1174.2 330C1059.6 330 945 330 830.4 330C715.8 330 601.2 330 486.6 330C372 330 257.4 330 142.8 330C28.2 330 -86.4 330 -143.7 330H-201Z"
            fill="#4581F6"
          />
          <text
            x="50%"
            y="90%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="#ffffff"
            font-size="24px"
          >
            Design By Kritwatchara
          </text>
        </svg>
      </div>
    </>
  );
}

export default App;
