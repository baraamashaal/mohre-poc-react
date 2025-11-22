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
          {/*example 1*/}
          <div
              className="logos-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo1.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo2.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo3.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo4.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo5.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo6.png" alt=""/>
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
                      <img src="images/logo7.png" alt=""/>
                  </a>
              </div>
          </div>

            {/*example2    */}
          <div
              className="initiative-slider [&_.slick-list]:pb-8 aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
              <div>
                  <div className="aegov-card card-bordered card-glow !shadow-primary-500/30">
                      <img src="images/card-Hackathon_png-logo.png" className="w-full h-auto rounded-xl"/>
                      <h5>The UAE Hackathon</h5>
                      <p className="line-clamp-4">This initiative will create an opportunity for hundreds of young
                          people to use open data as a tool for innovation and to boost economic growth. Youth will be
                          able to analyse data and come up with solutions that will advance the UAE towards a prosperous
                          and happy future.</p>
                      <div className="block">
                          <a href="#" className="aegov-link" title="Some link text related description">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"/>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-bordered card-glow !shadow-primary-500/30">
                      <img src="images/card-Hackathon_2.jpg" className="w-full h-auto rounded-xl"/>
                      <h5>The UAE Hackathon</h5>
                      <p className="line-clamp-4">This initiative will create an opportunity for hundreds of young
                          people to use open data as a tool for innovation and to boost economic growth. Youth will be
                          able to analyse data and come up with solutions that will advance the UAE towards a prosperous
                          and happy future.</p>
                      <div className="block">
                          <a href="#" className="aegov-link" title="Some link text related description">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"/>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-bordered card-glow !shadow-primary-500/30">
                      <img src="images/card-Hackathon_png-logo.png" className="w-full h-auto rounded-xl"/>
                      <h5>The UAE Hackathon</h5>
                      <p className="line-clamp-4">This initiative will create an opportunity for hundreds of young
                          people to use open data as a tool for innovation and to boost economic growth. Youth will be
                          able to analyse data and come up with solutions that will advance the UAE towards a prosperous
                          and happy future.</p>
                      <div className="block">
                          <a href="#" className="aegov-link" title="Some link text related description">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"/>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-bordered card-glow !shadow-primary-500/30">
                      <img src="images/card-Hackathon_2.jpg" className="w-full h-auto rounded-xl"/>
                      <h5>The UAE Hackathon</h5>
                      <p className="line-clamp-4">This initiative will create an opportunity for hundreds of young
                          people to use open data as a tool for innovation and to boost economic growth. Youth will be
                          able to analyse data and come up with solutions that will advance the UAE towards a prosperous
                          and happy future.</p>
                      <div className="block">
                          <a href="#" className="aegov-link" title="Some link text related description">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"/>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          
          
          
          
          {/*example 3 */}
          <div
              className="news-card-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
              <div>
                  <div className="aegov-card card-news">
                      <a href="#">
                          <img src="images/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future"/>
                      </a>
                      <div className="card-content">
                          <div className="custom-divide custom-divide-sm flex flex-wrap">
                              <div className="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
                              <a href="#" className="text-sm font-normal">Press release</a>
                          </div>
                          <h5 className="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future
                              through "Digital Skills Forum" on International Youth Day</h5>
                          <p className="line-clamp-3">In alignment with the UAE government's visionary theme for 2023,
                              "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next
                              generation of leaders and visionaries who will drive sustainable growth in the digital
                              era.</p>
                          <a href="#" className="aegov-link">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"></rect>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-news">
                      <a href="#">
                          <img src="images/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future"/>
                      </a>
                      <div className="card-content">
                          <div className="custom-divide custom-divide-sm flex flex-wrap">
                              <div className="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
                              <a href="#" className="text-sm font-normal">Press release</a>
                          </div>
                          <h5 className="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future
                              through "Digital Skills Forum" on International Youth Day</h5>
                          <p className="line-clamp-3">In alignment with the UAE government's visionary theme for 2023,
                              "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next
                              generation of leaders and visionaries who will drive sustainable growth in the digital
                              era.</p>
                          <a href="#" className="aegov-link">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"></rect>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-news">
                      <a href="#">
                          <img src="images/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future"/>
                      </a>
                      <div className="card-content">
                          <div className="custom-divide custom-divide-sm flex flex-wrap">
                              <div className="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
                              <a href="#" className="text-sm font-normal">Press release</a>
                          </div>
                          <h5 className="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future
                              through "Digital Skills Forum" on International Youth Day</h5>
                          <p className="line-clamp-3">In alignment with the UAE government's visionary theme for 2023,
                              "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next
                              generation of leaders and visionaries who will drive sustainable growth in the digital
                              era.</p>
                          <a href="#" className="aegov-link">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"></rect>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="aegov-card card-news">
                      <a href="#">
                          <img src="images/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future"/>
                      </a>
                      <div className="card-content">
                          <div className="custom-divide custom-divide-sm flex flex-wrap">
                              <div className="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
                              <a href="#" className="text-sm font-normal">Press release</a>
                          </div>
                          <h5 className="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future
                              through "Digital Skills Forum" on International Youth Day</h5>
                          <p className="line-clamp-3">In alignment with the UAE government's visionary theme for 2023,
                              "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next
                              generation of leaders and visionaries who will drive sustainable growth in the digital
                              era.</p>
                          <a href="#" className="aegov-link">
                              View details
                              <svg className="link-icon rtl:-scale-x-100" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                  <rect width="256" height="256" fill="none"></rect>
                                  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                  <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>


      </>
  );
}

export default App;
