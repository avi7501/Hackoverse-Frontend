import React from 'react'

const Events = () => {
  return (
    <div>Events
      <main>
    <section id="room-name-wrapper">
        <p>Room Name: <span id="room-name"></span></p>
    </section>

    <section id="video-streams"></section>

    <section id="controls-wrapper">
        <div class="icon-wrapper">
            <img class="control-icon" id="mic-btn" src="{% static 'images/microphone.svg' %}" />
        </div>

        <div class="icon-wrapper">
            <img class="control-icon" id="camera-btn" src="{% static 'images/video.svg' %}" />
        </div>

        <div class="icon-wrapper">
            <img class="control-icon" id="leave-btn" src="{% static 'images/leave.svg' %}" />
        </div>
    </section>
</main>


<script type="text/javascript" src="../assets/AgoraRTC_N-4.17.0.js"></script>
<script type="text/javascript" src="../assets/streams.js" ></script>
    </div>
  )
}

export default Events