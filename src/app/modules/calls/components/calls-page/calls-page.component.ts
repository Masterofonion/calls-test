import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrentCall } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

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

  currentCall: CurrentCall | null = null;

  currentUser = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private auth: AuthService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.data.getHistory();
    this.currentUser = this.auth.getCurrentUser();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.initListener();
      console.log(this.mediaRecorder);
    });
  }
  startRecording() {
    if (this.mediaRecorder) {
      this.currentCall = new CurrentCall(this.currentUser);
      this.currentCall.start = new Date().toString();
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
      if (this.currentCall && this.timerValue) {
        this.currentCall.finish = new Date().toString();
        this.currentCall.length = this.timerValue;
        this.data.saveCall(this.currentCall);
        this.currentCall = null;
      }
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
  saveCall() {}
}
