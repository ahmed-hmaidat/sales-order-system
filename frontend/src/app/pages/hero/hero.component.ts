import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})

export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'https://source.unsplash.com/1600x900/?shopping',
      alt: 'Shopping Experience'
    },
    {
      image: 'https://source.unsplash.com/1600x900/?electronics',
      alt: 'Electronics'
    },
    {
      image: 'https://source.unsplash.com/1600x900/?fashion',
      alt: 'Fashion'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }
}
