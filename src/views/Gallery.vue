<template>
  <div class="media-wrapper">
    <Header/>
    <div class="gallery-main-wrapper">
      <h1>Videos</h1>
        <div class="videos-wrapper">
            <iframe class="video" width="1280" height="720" src="https://www.youtube.com/embed/in350imQNtc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="video" width="1280" height="720" src="https://www.youtube.com/embed/rI9KTCMSOKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="video" width="1280" height="720" src="https://www.youtube.com/embed/KaYHvbFFn1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="video" width="1280" height="785" src="https://www.youtube.com/embed/KFhcnesgBT8?list=PLwnTDEMXKrMiEnbDErDROS9gRT4qVH0Jz" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="video" width="1280" height="785" src="https://www.youtube.com/embed/cesbvtopUH8?list=PLwnTDEMXKrMiEnbDErDROS9gRT4qVH0Jz" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="video" width="1280" height="785" src="https://www.youtube.com/embed/WyyVFCD2fDM?list=PLwnTDEMXKrMiEnbDErDROS9gRT4qVH0Jz" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="images-wrapper">
            <h1> Gallery</h1>
            <div id="columns">
                <div class="grid">
                    <img src="../assets/images/img/grid3.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid4.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid6.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid11.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid15.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid14.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid7.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid9.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid12.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid16.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid23.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid8.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid2.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid21.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid20.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid17.png" alt="">
                </div>
                <div class="grid">
                    <img src="../assets/images/img/grid18.png" alt="">
                </div>
            </div>
    </div><!--end-images-wrapper-->

    </div>
    <Footer/>

  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>



