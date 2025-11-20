import { useState } from 'react';
import { Button } from '@components/ui';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="header-navs">
          <div className="container">
            <div className="flex content-between flex-wrap lg:flex-nowrap lg:justify-between lg:items-center">
              <nav className="main-navigation" aria-label="Main navigation">
                <div className="menu-main-menu-container">
                  <ul className="menu nav-menu lg:flex lg:items-center lg:gap-1 xl:gap-2">
                    <li className="menu-item lg:inline-flex lg:items-center has-link-icon active-page">
                      <a href="#" className="hover:!text-primary-800 hover:!border-primary-800">
                        <svg aria-hidden="true" className="text-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <path
                            d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        </svg>
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="menu-item relative lg:inline-flex lg:items-center menu-item-has-children group">
                      <a href="" data-dropdown-placement="bottom-start" data-dropdown-toggle="OurServicesHover"
                         data-dropdown-trigger="hover" className="group-hover:!text-primary-800 group-hover:!border-primary-800">Our services</a>
                      <button id="OurServicesMenus" data-dropdown-toggle="OurServicesHover" className="submenu-btn flex-shrink-0 group-hover:!text-primary-800">
                        <span><span className="sr-only">show submenu for "Our services"</span></span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="16"/>
                        </svg>
                      </button>
                      <div id="OurServicesHover" className="submenu hidden lg:py-4 xl:py-5 2xl:py-6 rounded-bordered">
                        <div className="[&>div]:p-3 [&>div]:w-72 lg:flex lg:flex-wrap">
                          <div>
                            <ul className="space-y-1.5 xl:space-y-2 2xl:space-y-2.5" aria-labelledby="OurServicesMenus">
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item group">
                      <a href="#" className="group-hover:!text-primary-800 group-hover:!border-primary-800">About us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="header-navs-right">
                <ul className="flex items-center">
                  <li>
                    <a href="#" data-tooltip-placement="bottom" data-tooltip-target="tooltip-login"
                       className="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center justify-center flex-shrink-0">
                      <svg className="flex-shrink-0 w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/>
                        <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="16"/>
                      </svg>
                      <span className="sr-only">Login</span>
                    </a>
                    <div id="tooltip-login" role="tooltip" className="z-50 aegov-tooltip">
                      Login
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li>
                    <a href="#" data-tooltip-placement="bottom" data-tooltip-target="tooltip-accessibility"
                       className="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center justify-center flex-shrink-0">
                      <svg className="flex-shrink-0 w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/>
                        <circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <path
                          d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z"
                          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                      </svg>
                      <span className="sr-only">Accessibility</span>
                    </a>
                    <div id="tooltip-accessibility" role="tooltip" className="z-50 aegov-tooltip">
                      Accessibility
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                  <li>
                    <a href="#" data-tooltip-placement="bottom" data-tooltip-target="tooltip-Switch-language"
                       className="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center justify-center flex-shrink-0">
                      <svg className="flex-shrink-0 w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <path
                          d="M88,128c0,37.46,13.33,70.92,34.28,93.49a7.77,7.77,0,0,0,11.44,0C154.67,198.92,168,165.46,168,128s-13.33-70.92-34.28-93.49a7.77,7.77,0,0,0-11.44,0C101.33,57.08,88,90.54,88,128Z"
                          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <line x1="37.46" y1="96" x2="218.54" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="16"/>
                        <line x1="37.46" y1="160" x2="218.54" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="16"/>
                      </svg>
                      <span className="sr-only">Switch language</span>
                    </a>
                    <div id="tooltip-Switch-language" role="tooltip" className="z-50 aegov-tooltip">
                      Switch language
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="lg:hidden">
        <div className="py-2.5 lg:py-3">
          <div className="container">
            <div className="max-lg:flex max-lg:items-center justify-between">
              <div className="logos">
                <div className="logo-item">
                  <a href="#" className="logo block">
                    <img src="img/logo-ministry.svg" alt="logo"/>
                    <span className="sr-only">Logo</span>
                  </a>
                </div>
              </div>
              <div className="header-top-right">
                <div>
                  <div className="flex items-center gap-3">
                    <button data-modal-target="openNavdd" data-modal-toggle="openNavdd" className="hamburger-icon text-aeblack-700">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                      </svg>
                      <span className="sr-only">Toggle main menu</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="openNavdd" tabIndex="-1" aria-hidden="true"
             className="responsive-menu !transform-none hidden [&_.main-navigation_.menu-item.active-page_a]:border-none [&_.accordion-active_svg]:rotate-180 max-lg:py-4 lg:hidden max-lg:bg-whitely-50 max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:[&_li_a]:w-full max-lg:[&_li_a]:py-2 max-lg:[&_.submenu-btn]:!absolute max-lg:[&_.submenu-btn]:end-0 max-lg:[&_.submenu-btn]:top-2 max-lg:[&_.submenu-btn]:w-6 max-lg:z-50 max-lg:flex-wrap max-lg:items-start max-lg:justify-start">
          <div className="w-full">
            <div className="w-full max-lg:px-4 flex items-center justify-between gap-4 mb-4">
              <a href="">
                <img src="img/emblem.png" alt="logo" width="41"/>
              </a>
              <div className="flex items-center gap-4">
                <button data-modal-hide="openNavdd">
                  <svg aria-hidden="true" className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"/>
                    <line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                  </svg>
                  <span className="sr-only">Close main menu</span>
                </button>
              </div>
            </div>
            <div className="max-lg:max-h-[calc(100vh_-_6.375rem)] max-lg:px-4 max-lg:overflow-auto">
              <nav className="main-navigation mb-4" aria-label="Main navigation">
                <div className="menu-main-menu-container">
                  <ul id="navigation-dropdown-collapse" data-accordion="collapse" className="menu nav-menu">
                    <li className="menu-item has-link-icon">
                      <a href="#">
                        <svg className="text-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <path
                            d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        </svg>
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="menu-item relative menu-item-has-children">
                      <a href="">Our services</a>
                      <button className="submenu-btn flex-shrink-0" id="accordionOurServices" data-accordion-target="#accordion-collapse-service"
                              aria-controls="accordion-collapse-service"><span><span className="sr-only">show submenu for "Our services"</span></span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="16"/>
                        </svg>
                      </button>
                      <div id="accordion-collapse-service" className="submenu hidden bg-transparent" aria-labelledby="accordionOurServices">
                        <div className="[&>div]:p-3 [&_ul]:space-y-1.5">
                          <div>
                            <ul className="space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                              <li className="menu-item">
                                <a href="">Some Service Item Label</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item active-page">
                      <a href="#">About us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="header-top-right">
                <div>
                  <ul className="header-common-links">
                    <li>
                      <a href="#">
                        <svg className="flex-shrink-0 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"/>
                        </svg>
                        <span>Login</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="flex-shrink-0 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <path
                            d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z"
                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        </svg>
                        <span>Accessibility</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="flex-shrink-0 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"/>
                          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <path
                            d="M88,128c0,37.46,13.33,70.92,34.28,93.49a7.77,7.77,0,0,0,11.44,0C154.67,198.92,168,165.46,168,128s-13.33-70.92-34.28-93.49a7.77,7.77,0,0,0-11.44,0C101.33,57.08,88,90.54,88,128Z"
                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <line x1="37.46" y1="96" x2="218.54" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="16"/>
                          <line x1="37.46" y1="160" x2="218.54" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="16"/>
                        </svg>
                        <span>Switch language</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
