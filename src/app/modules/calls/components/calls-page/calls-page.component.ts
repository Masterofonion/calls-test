import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.scss'],
})
export class CallsPageComponent implements OnInit {
  mediaRecorder: MediaRecorder | null = null;

  timerValue: number | null = null;

  isRecordingStarted = false;

  isPlaybackStarted = false;

  timer: any = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.initListener();
      console.log(this.mediaRecorder);
    });
  }
  startRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.start();
      console.log(this.mediaRecorder);
      this.startTimer();
      this.isRecordingStarted = true;
    }
  }
  stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.isRecordingStarted = false;
      this.isPlaybackStarted = true;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.timerValue = null;
      }
    }
  }
  initListener() {
    if (this.mediaRecorder) {
      this.mediaRecorder.ondataavailable = (e) => {
        console.log(this.isRecordingStarted);
        this.playAudio(e.data);
      };
    }
  }
  playAudio(data: Blob) {
    this.isPlaybackStarted = false;
    console.log(this.isPlaybackStarted);
    let url = window.URL.createObjectURL(data);
    let audio = new Audio(url);
    audio.play();

    audio.onended = (e) => {
      this.isPlaybackStarted = false;
      this.cdr.detectChanges();
    };
  }
  startTimer() {
    this.timerValue = 0;
    this.timer = setInterval(() => {
      if (this.timerValue || this.timerValue === 0) {
        this.timerValue++;
      }
    }, 1000);
  }
}
