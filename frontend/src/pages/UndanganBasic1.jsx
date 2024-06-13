import React, { useEffect } from 'react';


import '../assets/style.css'


import imgAkad from '../assets/img/wedding1.jpg'; // Import image for Akad Nikah
// import imgWalimatulUrs from './assets/img/bg4.jpg'; // Import image for Walimatul 'Urs'
import hard1 from '../assets/img/und/undhard1.jpg';
import hard2 from '../assets/img/und/undhard2.jpg';
import hard3 from '../assets/img/und/undhard3.jpg';
import hard4 from '../assets/img/und/undhard4.jpg';
import loveStory from '../assets/img/slide/lovestory.png';
import image1 from '../assets/img/slide/1.jpg';
import image2 from '../assets/img/slide/2.jpg';
import image3 from '../assets/img/slide/3.jpg';
import image4 from '../assets/img/slide/4.jpg';
import image5 from '../assets/img/slide/5.jpg';
import image6 from '../assets/img/slide/6.jpg';
import image7 from '../assets/img/slide/7.jpg';
import image8 from '../assets/img/slide/8.jpg';
import image9 from '../assets/img/slide/9.jpg';
import image10 from '../assets/img/slide/10.jpg';
import image11 from '../assets/img/slide/11.jpg';
import image12 from '../assets/img/slide/12.jpg';
import image13 from '../assets/img/slide/13.jpg';
import image14 from '../assets/img/slide/14.jpg';
import image15 from '../assets/img/slide/15.jpg';
import image16 from '../assets/img/slide/16.jpg';
import image17 from '../assets/img/slide/17.jpg';
import image18 from '../assets/img/slide/18.jpg';
import image19 from '../assets/img/slide/19.jpg';
import image20 from '../assets/img/slide/20.jpg';

import decor from '../assets/img/decor-3.png';
import decor1 from '../assets/img/decor-1.png';
import decor2 from '../assets/img/bottom.png';

import wanita from '../assets/img/wanita.jpg';
import pria from  '../assets/img/pria.jpg';


function initmap() {
  // Logika untuk inisialisasi peta dapat diletakkan di sini
  console.log('Map initialized');
}

function UndanganBasic1() {
  useEffect(() => {
    initmap();
  }, []);

  return (
    <div className="App">
      <div>

      <title>Rindi & Dany - The Wedding</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Other meta tags */}
      <meta
          name="description"
          content="Dany Laksono and Rindi Kurnianti's Wedding Invitation"
        />
        <meta name="author" content="Dany Laksono" />
        <meta property="og:title" content="Rindi & Dany - The Wedding" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://www.rindidanywedding.com/"
        />
        <meta
          property="og:image"
          content="http://www.rindidanywedding.com/img/img_src.png"
        />
        <link rel="image_src" href="img/img_src.png" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css " rel="stylesheet" />
      <nav className="navbar navbar-inverse navbar-fixed-top">
        {/* Navbar content */}
        <div className="navbar-header">
            <a className="navbar-brand" href="#home">
              <sup>R</sup> &#9829; <sub>D</sub>
            </a>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse ">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#home">
                  <i className="fa fa-home"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#undangan">Undangan</a>
              </li>
              <li>
                <a href="#resepsi">Resepsi</a>
              </li>
              <li>
                <a href="#peta">Peta</a>
              </li>
              <li>
                <a href="#bukutamu">Buku Tamu</a>
              </li>
            </ul>
          </div>
      </nav>
      <section id="home">
        {/* Home section content */}
        <div className="container">
            <div className="row justify-center">
              <div className=" col-sm-offset-1">
                <div className="well">
                  {/* <img className="decore-top img-responsive" src="img/decor-1.png" alt="" /> */}
                  <img src={decor1} alt="Decor Nikah" className="object-cover object-center" />
                  <h3 className="font-sans">Undangan Pernikahan</h3>
  <div className="col-sm-12">
    <div className="row justify-center">
      <div className="col-sm-12 flex justify-center items-center flex-col">
        <h1 className="text-center mb-4 font-montserrat">Rindi Kurnianti</h1>
        <img src={wanita} alt="Mempelai Wanita" className="w-1/4 h-auto mx-4" />
      </div>
    </div>
    <div className="row justify-center">
      <div className="col-sm-12 and flex justify-center">
        <h1 className="text-center"> & </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 flex justify-center items-center flex-col">
        <h1 className="text-center mb-4 font-montserrat">Dany Laksono</h1>
        <img src={pria} alt="Mempelai Pria" className="w-1/4 h-auto mx-4" />
      </div>
    </div>
  </div>



                  <h2> Makassar, 22 Maret 2014</h2>
                  {/* <img className="decore-bottom img-responsive" src="img/decor-3.png" alt="" /> */}
                  <img src={decor} alt="Decor Nikah" className="object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="undangan">
        {/* Undangan section content */}
        <div className="container">
        <div className="flex flex-wrap">
          <div className="md:w-full md:px-4">
          <p>
              <i>Segala puji bagi Allah Taala yang telah menjadikan segala makhluk-Nya berpasang-pasangan.</i>
              <br />
              <br />
              Dengan memohon limpahan Ridho dan Kasih Sayang Allah Subhanahu Wa Taala, kami bermaksud mengundang Bapak/Ibu dalam acara pernikahan kami:
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-5/12">
                <hr className="border-t-2 border-gray-700" />
                <h2 className="text-2xl font-bold">Rindi Kurnianti, ST</h2>
                <br />
                <p>Putri dari Bapak Basri Bokko dan Ibu Dyah Purhayati, Makassar</p>
                <hr className="border-t-2 border-gray-700" />
              </div>
              <div className="w-full md:w-2/12">
                <br /><br /><br /><i>dengan</i><br /><br />
              </div>
              <div className="w-full md:w-5/12">
                <hr className="border-t-2 border-gray-700" />
                <h2 className="text-2xl font-bold">Dany Puguh Laksono, ST</h2>
                <br />
                <p>Putra dari Bapak Suwadi dan Ibu Nasiroh, Panceng, Gresik</p>
                <hr className="border-t-2 border-gray-700" />
              </div>
            </div>
            <br />
            <p>
            Ungkapan terima kasih dan rasa syukur kami sampaikan atas kehadiran Bapak/Ibu/rekan sekalian atas kehadiran dan doa restu kepada kedua mempelai.
            <br /><br />
            Kami yang berbahagia,
          </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <b>Keluarga Bapak Basri Bokko</b>
              </div>
              <div className="w-full md:w-1/2">
                <b>Keluarga Bapak Suwadi</b>
              </div>
            </div>
            <br />
            <button className="btn btn-info btn-md" data-toggle="modal" data-target="#callUndangan">
              Undangan Kami
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="callUndangan" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  {/* <!-- <div className="modal-header"> */}
                  {/*   <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                  {/*   <h4 className="modal-title" id="undModalLabel">Undangan Kami</h4> */}
                  {/* </div> --> */}
                  <div className="modal-body">
                    {/* <!-- Isi Modal --> */}
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                      {/* <!-- Indicators --> */}
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                      </ol>

                      {/* <!-- Wrapper for slides --> */}
                      <div className="carousel-inner">
                        <div className="item active">
                          <img className="img-responsive" src={hard1} alt="und1" />
                        </div>
                        <div className="item">
                          <img className="img-responsive" src={hard2} alt="und2" />
                        </div>
                        <div className="item">
                          <img className="img-responsive" src={hard3} alt="und3" />
                        </div>
                        <div className="item">
                          <img className="img-responsive" src={hard4} alt="und4" />
                        </div>
                      </div>

                      {/* <!-- Controls --> */}
                      <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                      </a>
                      <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                      </a>
                    </div>
                    {/* <!-- Isi Modal --> */}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Tutup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="hjstories">
              {/* <!--Carousel - no control--> */}
              <div id="slideshow" className="carousel slide carousel-fade" data-ride="carousel">
                {/* <!--js script for good --> */}
                {/* <script>
                  $('.carousel').carousel({
                    interval: 7000,
                    pause: "hover",
                    wrap: true
                  });
                </script> */}



<div className="carousel">
  <div className="carousel-inner relative overflow-hidden">
    {/* Item 1 */}
    <div className="carousel-item absolute opacity-0">
      {/* <img src="image1.jpg" alt="Slide 1" className="w-full" /> */}
      <img src={image1} alt="Akad Nikah" className="w-full" />
    </div>
    
    {/* Item 2 */}
    <div className="carousel-item absolute opacity-0">
    <img src={image2} alt="Akad Nikah" className="w-full" />
    </div>
    
    {/* Item 3 */}
    <div className="carousel-item absolute opacity-0">
      <img src="image3.jpg" alt="Slide 3" className="w-full" />
    </div>
    
    {/* Previous and Next buttons */}
    <button className="prev absolute top-0 left-0 mt-16 ml-4 z-10">Previous</button>
    <button className="next absolute top-0 right-0 mt-16 mr-4 z-10">Next</button>
  </div>
</div>
                {/* <!-- all images are courtesy of hj-story.com --> */}
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="backgr" style={{ backgroundImage: `url(${loveStory})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image1})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image2})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image3})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image4})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image5})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image6})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image7})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image8})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image9})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image10})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image11})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image12})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image13})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image14})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image15})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image16})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image17})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image18})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image19})` }}></div>
                  </div>
                  <div className="item">
                    <div className="backgr" style={{ backgroundImage: `url(${image20})` }}></div>
                  </div>
                </div>
                <a className="left carousel-control" href="#slideshow" data-slide="prev"></a>
                <a className="right carousel-control" href="#slideshow" data-slide="next"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="decor img-responsive" src="img/bottom.png" alt="decor" /> */}
      <img src={decor2} alt="Decor Nikah" className="object-cover object-center" />
      </section>


      <section id="resepsi" className="bg-gray-100 py-12">
        {/* Resepsi section content */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="px-4">
              <img src={imgAkad} alt="Akad Nikah" className="mb-4" />
              <h1 className="text-3xl font-bold mb-4">Akad Nikah</h1>
              <p>
                Akad nikah insya Allah akan dilangsungkan pada:<br /><br />
                <i>
                  Sabtu, 22 Maret 2014<br />
                  Pukul 09.00 WITA<br />
                </i><br />
                Bertempat di Kediaman Mempelai Wanita,<br />
                Perumahan Bumi Tamalanrea Permai (BTP) Blok J/167 B<br />
                Tamalanrea, Makassar
              </p>
            </div>
            <div className="px-4 grid grid-rows-2 gap-4">
              <img src={imgAkad} alt="Akad Nikah" className=" max-h-35" />
              {/* <img src={imgWalimatulUrs} alt="Walimatul 'Urs" className="mb-4" /> */}
              <div>
                <h1 className="text-3xl font-bold mb-4">Walimatul Urs</h1>
                <p>
                  Acara Walimatul Urs diselenggarakan pada:<br /><br />
                  <i>
                    Sabtu, 22 Maret 2014<br />
                    Pukul 19.00 WITA - selesai <br />
                  </i><br />
                  Bertempat di The Westlake Resto,<br />
                  Jalan Ring Road Barat, Sleman, Yogyakarta<br />
                </p>

                
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1" style={{ margin: '0 -15px' }}>
            <div className="px-4">
            <div className="countdown bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">We Are Getting Married</h2>
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <div className="text-5xl font-bold text-blue-500">10</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="mr-4">
                  <div className="text-5xl font-bold text-blue-500">05</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
                <div className="mr-4">
                  <div className="text-5xl font-bold text-blue-500">30</div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-500">20</div>
                  <div className="text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
      
      <section id="peta" className="py-12">
        {/* Peta section content */}
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Alamat Resepsi Nikah</h2>
            <p className="text-lg text-gray-700 mb-8">
              Temukan lokasi resepsi nikah kami di peta di bawah ini.
            </p>
          </div>
          <div className="w-15 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.715269245976!2d110.36549231432474!3d-7.795491579492206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5843429928f3%3A0xd358f85b66a3ebe7!2sWestlake%20Resto!5e0!3m2!1sen!2sid!4v1622562542854!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="bukutamu" className="py-12">
        {/* Bukutamu section content */}
        <div className="container mx-auto">
          <div className="jumbotron">
            <div className="text-center">
              <p className="text-l font-bold text-blue-500">
                Silakan tinggalkan pesan atau ucapan. Kami sangat menghargai setiap
                doa dan harapan yang Anda sampaikan.
              </p>
            </div>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="nama" className="block text-xl font-medium text-gray-700">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="hadir" className="block text-xl font-medium text-gray-700">Kehadiran</label>
                <select name="hadir" id="hadir" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md">
                  <option value="kehadiran">Hadir</option>
                  <option value="alpa">Tidak Hadir</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="pesan" className="block text-xl font-medium text-gray-700">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows="3"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md"
                  placeholder="Tulis pesan atau ucapan Anda di sini"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <section id="footer" className="py-4 bg-gray-900 text-white">
        {/* Footer section content */}
        <div className="container mx-auto">
          <div className="foo">
            <h6>Made with love by <a href="https://github.com/danylaksono/danylaksono.github.io">Dany Laksono</a> &copy; 2014</h6>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default UndanganBasic1
