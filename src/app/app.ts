  import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppStateService } from './shared/services/app-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'ConsultFlow';
  public isSpinner = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    },1000)
  }
  constructor(private appState : AppStateService){
    this.appState.updateState();
  }
  @ViewChild('progress', { static: false }) progressRef!: ElementRef;




  ngOnDestroy(): void {
    // Cleanup if necessary (though HostListener handles it automatically).
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (this.progressRef) {
      this.progressRef.nativeElement.style.width = `${scrollPercent}%`;
    }
  }
}
